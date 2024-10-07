import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './TodoForm';
import { deleteTodoItem } from '@/redux/slices/todoSlice';
const screenHeight = Dimensions.get('screen').height;

const Todo = () => {
  const todoList = useSelector((state: any) => state.todo.todoList);
  const [isAddingNewItem, setIsAddingNewItem] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [curretItem, setCurretItem] = useState({
    title: '',
    description: '',
    id: null,
  });

  const dispatch = useDispatch();

  const itemDeleteHandler = (itemId: number) => {
    dispatch(deleteTodoItem(itemId));
  };

  const itemEditHandler = (item: {
    id: number;
    title: string;
    description: string;
  }) => {
    setCurretItem(item);
    setIsEditMode(true);
    setIsAddingNewItem(true);
  };

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.listItem}>
        <Text style={{ flex: 1 }}>{item.title}</Text>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => itemEditHandler(item)}
          >
            <Text>✏️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => itemDeleteHandler(item.id)}
          >
            <Text>❌</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Text style={styles.heading}>Todo</Text>

        <FlatList
          style={styles.flatList}
          data={todoList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />

        <TodoForm
          isAddingNewItem={isAddingNewItem}
          setIsAddingNewItem={setIsAddingNewItem}
          curretItem={curretItem}
          isEditMode={isEditMode}
          setCurretItem={setCurretItem}
        />

        <TouchableOpacity
          onPress={() => {
            setCurretItem({ title: '', description: '', id: null });
            setIsEditMode(false);
            setIsAddingNewItem(true);
          }}
          style={styles.addButton}
        >
          <Text>➕</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#EDDFE0',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 10,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    gap: 6,
    minHeight: screenHeight,
    position: 'relative',
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 4,
    borderRadius: 6,
  },
  heading: {
    fontSize: 30,
    fontWeight: '500',
  },
  flatList: {
    width: '100%',
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#B7B7B7',
    borderColor: '#F5F5F7',
    borderRadius: 50,
    padding: 4,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 200,
    right: 50,
  },
});
