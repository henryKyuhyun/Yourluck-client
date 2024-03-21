// src/redux/authAction.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk("user/login", async (loginData, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:8081/api/v1/users/login", loginData);
    console.log(response); // 응답을 콘솔에 로그합니다.
    const { token, user } = response.data.result;
    localStorage.setItem("token", token);
    return { token, user };
  } catch (error) {
    console.error(error); // 에러를 콘솔에 로그합니다.
    return rejectWithValue(error.response.data);
  }
});
