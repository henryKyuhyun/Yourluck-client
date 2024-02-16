import React, { useState } from 'react';
import axios from 'axios';

function UserJoin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nation, setNation] = useState('');
  const [birthOfDayAndTime, setBirthOfDayAndTime] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [gender, setGender] = useState('');

  const join = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/v1/users/join', { name, password, nation, birthOfDayAndTime, bloodType, gender });
      alert('가입 성공');
    } catch (error) {
      alert('가입 실패');
    }
  };

  return (
    <div>
      <h1>가입</h1>
      <input type="text" placeholder="이름" onChange={(e) => setName(e.target.value)} />
      <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="국가" onChange={(e) => setNation(e.target.value)} />
      <input type="datetime-local" onChange={(e) => setBirthOfDayAndTime(e.target.value)} />
      <select onChange={(e) => setBloodType(e.target.value)}>
  <option value="">혈액형 선택</option>
  <option value="A형">A형</option>
  <option value="B형">B형</option>
  <option value="AB형">AB형</option>
  <option value="O형">O형</option>
</select>
      <select onChange={(e) => setGender(e.target.value)}>
        <option value="">성별 선택</option>
        <option value="MALE">남성</option>
        <option value="FEMALE">여성</option>
      </select>
      <button onClick={join}>가입</button>
    </div>
  );
}

export default UserJoin;
