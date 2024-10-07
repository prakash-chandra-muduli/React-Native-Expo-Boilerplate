import {
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { ThemedText } from '../atoms/ThemedText';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem, updateTodoItem } from '@/redux/slices/todoSlice';

interface TodoFormProps {
  isAddingNewItem: boolean;
  setIsAddingNewItem: (value: boolean) => void;
  curretItem: { id: number | null; title: string; description: string };
  setCurretItem: (item: {
    id: number | null;
    title: string;
    description: string;
  }) => void;
  isEditMode: boolean;
}

const TodoForm: React.FC<TodoFormProps> = ({
  isAddingNewItem,
  setIsAddingNewItem,
  curretItem,
  isEditMode,
  setCurretItem,
}) => {
  const todoList = useSelector((state: any) => state.todo.todoList);
  const dispatch = useDispatch();

  const onChangeHandler = (inputValue: string, fieldName: string) => {
    setCurretItem((prevItem) => ({
      ...prevItem,
      [fieldName]: inputValue,
    }));
  };

  const itemEditHandler = () => {
    if (curretItem.id !== null) {
      dispatch(updateTodoItem({ index: curretItem.id, data: curretItem }));
    }
    setIsAddingNewItem(false);
    setCurretItem({ id: null, title: '', description: '' });
  };

  const itemAddHandler = () => {
    if (curretItem.title === '') {
      Alert.alert('Please add the title');
      return;
    }
    dispatch(addTodoItem({ ...curretItem, id: todoList.length }));
    setIsAddingNewItem(false);
    setCurretItem({ title: '', description: '', id: null });
  };
  const closeForm = () => {
    setIsAddingNewItem(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isAddingNewItem}
      onRequestClose={() => {
        Alert.alert('Are you sure you want to close the form?');
        setIsAddingNewItem(false);
      }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ThemedText>Title *</ThemedText>
          <TextInput
            style={styles.input}
            editable={true}
            value={curretItem.title}
            onChangeText={(inputValue) => onChangeHandler(inputValue, 'title')}
          />
          <ThemedText>Description</ThemedText>
          <TextInput
            multiline={true}
            editable={true}
            style={styles.input}
            value={curretItem.description}
            onChangeText={(inputValue) =>
              onChangeHandler(inputValue, 'description')
            }
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (isEditMode) {
                itemEditHandler();
              } else {
                itemAddHandler();
              }
            }}
          >
            <Text style={styles.buttonText}>
              {isEditMode ? 'Update item' : 'Add new item'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: '#fffff',
              borderWidth: 2,
            }}
            onPress={closeForm}
          >
            <Text style={{ ...styles.buttonText, color: '#00000' }}>
              cancel
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    flex: 1,
    gap: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
