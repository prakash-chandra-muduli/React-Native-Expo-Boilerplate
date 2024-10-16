import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { ThemedText } from '../../components/atoms/ThemedText';
import { Link, router } from 'expo-router';
import auth from '@react-native-firebase/auth';
const login = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const signInHandler = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User registered successfully');
        router.replace('./(tabs)');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Alert.alert('Login Failed', errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
      ></TextInput>
      <Button title="Sign In!" onPress={signInHandler} />
      <Link href="/registration" asChild>
        <ThemedText>Create new account</ThemedText>
      </Link>
    </View>
  );
};
export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
