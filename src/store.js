import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../src/redux/slice/authSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});