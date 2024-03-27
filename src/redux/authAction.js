// src/redux/authAction.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import sessionStorage from 'redux-persist/es/storage/session';

export const login = createAsyncThunk("user/login", async (loginData, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:8081/api/v1/users/login", loginData,{
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    console.log(response);
    const { token, user } = response.data.result;
    sessionStorage.setItem('token', token);
    return { token, user };
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.response.data);
  }
});
