import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import todoReducer from './slices/todoSlice';
import rootSaga from './sagas';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'root', 
  storage:AsyncStorage,

};

const rootReducer = combineReducers({
  auth: authReducer,
    user: userReducer,
    todo: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false ,  serializableCheck: false,}).concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);