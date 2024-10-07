import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todoList: TodoItem[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoItem: (state, action: PayloadAction<TodoItem>) => {
      state.todoList.push(action.payload);
    },
    updateTodoItem: (state, action: PayloadAction<{ index: number; data: Partial<TodoItem> }>) => {
      const { index, data } = action.payload;
      state.todoList[index] = { ...state.todoList[index], ...data };
    },
    deleteTodoItem: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload);
    }
  },
});

export const { addTodoItem, updateTodoItem, deleteTodoItem } = todoSlice.actions;

export default todoSlice.reducer;
