import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/atoms/ThemedText';

const Registration = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, 'User registered successfully');
        Alert.alert('Success', `User ${user.email} created successfully!`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Alert.alert('Registration Failed', errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Enter your email"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      <Button title="Sign Up!" onPress={createUser} />
      <Link href="/login" asChild>
        <ThemedText>Already have an account</ThemedText>
      </Link>
    </View>
  );
};

export default Registration;

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
