import React, { useState } from 'react';
import axios from 'axios';

function UserLogin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/v1/users/login', { name, password });
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        alert('로그인 성공');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      alert('로그인 실패');
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <input type="text" placeholder="이름" onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default UserLogin;
