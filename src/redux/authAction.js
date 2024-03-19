// authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginStart, loginSuccess, loginFailure } from './slice/authSlice';

export const login = createAsyncThunk('auth/login', async (credentials, { dispatch }) => {
  try {
    dispatch(loginStart());
    const response = await axios.post('/api/v1/users/login', credentials);
    dispatch(loginSuccess(response.data.token));
  } catch (error) {
    dispatch(loginFailure(error.toString()));
  }
});
