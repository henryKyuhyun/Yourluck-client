import React, { useState } from 'react';
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
      const loginData = { name, password };
      await dispatch(login(loginData)).unwrap(); // `unwrap`를 사용하여 Promise를 처리합니다.
      navigate('/'); // 성공 시 홈으로 이동
      alert("로그인 성공");
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인 실패' + error.message);
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
