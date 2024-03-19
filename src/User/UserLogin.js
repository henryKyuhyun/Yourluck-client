import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authAction';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/v1/users/login', { name, password });
      console.log(response.data); //응답데이터 출력
      const { token } = response.data.result;
      if (token) {
        localStorage.setItem('token', token);
        // Redux 상태 관리를 위해 login 액션 디스패치
        dispatch(login(token));
        alert('로그인 성공');
        navigate('/')
      } else{
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인 실패'+error.message);
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <input type="text" placeholder="이름" onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default UserLogin;
