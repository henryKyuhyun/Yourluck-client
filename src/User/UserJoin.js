import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserJoin() {

  const [userInfo, setUserInfo] = useState({
    name:'',
    password:'',
    nation:'',
    birthOfDayAndTime:'',
    bloodType:'',
    gender:''
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const join = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/v1/users/join', userInfo);
      alert('가입 성공');
      navigate(`/`);
      
    } catch (error) {
      alert(`가입 실패` + error.response.data.message);
    }
  };

  return (
    <div>
      <h1>가입</h1>
      <input type="text" name="name" placeholder="이름" onChange={handleChange} />
      <input type="password" name="password" placeholder="비밀번호" onChange={handleChange} />
      <input type="text" name="nation" placeholder="국가" onChange={handleChange} />
      <input type="datetime-local" name="birthOfDayAndTime" onChange={handleChange} />
      <select name="bloodType" onChange={handleChange}>
        <option value="">혈액형 선택</option>
        <option value="A형">A형</option>
        <option value="B형">B형</option>
        <option value="AB형">AB형</option>
        <option value="O형">O형</option>
      </select>
      <select name="gender" onChange={handleChange}>
        <option value="">성별 선택</option>
        <option value="MALE">남성</option>
        <option value="FEMALE">여성</option>
      </select>
      <button onClick={join}>가입</button>
    </div>
  );
}
export default UserJoin;
