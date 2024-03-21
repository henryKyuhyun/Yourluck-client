// src/tokenUtils.js
import axios from 'axios';

// Token 저장 Key
const TOKEN_KEY = 'token';

// axios instance 
const instance = axios.create({
  baseURL: 'http://localhost:8081/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token;
};
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const fetchData = async () => {
  try {
    const token = getToken(); // 토큰 가져오기
    const response = await instance.get('/your-endpoint', {
      headers: {
        Authorization: `Bearer ${token}` // 토큰을 Authorization 헤더에 추가
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    window.location = '/logineee';  //일부로 에러발생
  }
};

// 로그인 후 토큰을 받아 저장하는 예시 함수
export const loginTokenSave = async (name, password) => {
  try {
    const response = await instance.post('/login', {
      name,
      password
    });
    const { token } = response.data; // 서버로부터 받은 토큰
    saveToken(token); // 토큰 저장
    console.log('Login successful');
  } catch (error) {
    // 로그인 실패 시 에러 처리
    console.error('Login failed:', error);
  }
};

// axios 인스턴스에 요청 인터셉터 추가
instance.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// axios 인스턴스에 응답 인터셉터 추가
instance.interceptors.response.use(
  response => {
    // 응답을 처리하기 전에 할 작업
    return response;
  },
  error => {
    // 오류 응답을 처리하기 전에 할 작업
    if (error.response.status === 401) {
      // 토큰이 유효하지 않을 때의 처리, 예를 들어 로그인 페이지로 리디렉션
    }
    return Promise.reject(error);
  }
);
