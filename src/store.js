// store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './redux/slice/authSlice'; // 경로는 실제 구조에 맞게 조정해주세요.
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
