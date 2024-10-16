import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Pressable,
} from 'react-native';
import { ThemedText } from '@/components/atoms/ThemedText';

import { Images } from '@/constants/Images';
import { Strings } from '@/constants/Strings';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';
import { Link, router } from 'expo-router';
import auth from '@react-native-firebase/auth';
export default function HomeScreen() {
  const isUserLogin = useSelector((state: boolean) => state.auth.isLoggedIn);
  const apiUrl = Constants.expoConfig.extra.apiUrl;
  const environment = Constants.expoConfig.extra.environment;
  const logoutHandler = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ThemedText>{`${Strings['appName']} -  ${environment}`}</ThemedText>
        <Image source={Images['icon']} />
        <ThemedText>Home Screen</ThemedText>
        <Link href="/registration" asChild>
          <ThemedText>Home lnk</ThemedText>
        </Link>
        <Pressable onPress={logoutHandler}>
          <ThemedText>Logout</ThemedText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
