import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { fetchUsersStart } from '@/redux/slices/userSlice';
import { RootState } from '@/redux/store';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, []);

  if (loading) {
    return (
      <SafeAreaView>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <View style={styles.centered}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  const renderItem = ({ item }: { item: any }) => (
    <SafeAreaView>
      <View style={styles.listItem}>
        <Text>{item.name}</Text>
      </View>
    </SafeAreaView>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default UserList;
