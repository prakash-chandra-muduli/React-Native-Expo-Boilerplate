import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Todo from '@/components/compound/Todo';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/atoms/ThemedView';
const history = () => {
  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
        <Todo />
      </ThemedView>
    </SafeAreaView>
  );
};

export default history;

const styles = StyleSheet.create({
  container: {},
});
