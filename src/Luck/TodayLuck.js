import React, { useEffect, useState } from 'react';
import axios from 'axios';


function TodayLuck() {
  const [fortune, setFortune] = useState('');

  useEffect(() => {
    getTodayLuck();
  },[]);

  const getTodayLuck = async() => {
    try{
      const response = await axios.get('/todayLuck');
      setFortune(response.data.message); // 백엔드에서 전달받은 메시지를 상태에 저장합니다.
    }catch(error){
      console.error("운세를 불러오는데 실패 했습니다" , error);
    }
  };

  return (
    <div>
      <h2>오늘의 운세</h2>
      <p>{fortune || "운세를 불러오는 중입니다..."}</p>
    </div>

  );
};

export default TodayLuck;