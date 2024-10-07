import React from 'react';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/atoms/ThemedText';

import { Images } from '@/constants/Images';
import { Strings } from '@/constants/Strings';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
  const isUserLogin = useSelector((state: boolean) => state.auth.isLoggedIn);
  const apiUrl = Constants.expoConfig.extra.apiUrl;
  const environment = Constants.expoConfig.extra.environment;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ThemedText>{`${Strings['appName']} -  ${environment}`}</ThemedText>
        <Image source={Images['icon']} />
        <ThemedText>Home Screen</ThemedText>
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
