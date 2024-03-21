import React, { useEffect, useState } from 'react';
import { login } from '../redux/authAction';
import { useDispatch, useSelector } from 'react-redux';

function TodayLuck() {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch(); // useEffect 바깥으로 이동
    const token = useSelector((state) => state.auth.token); // 'auth'는 configureStore에서 정의한 리듀서 키입니다.

    useEffect(() => {
        const url = 'http://localhost:8080/api/v1/todayLuck';

        if (!token) {
          dispatch(login(CredentialsContainer));
        } else {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // 동적 할당으로 수정
                },
            })
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
        }
    }, [token]); // token을 의존성 배열에 추가

    return (
        <div>
            <h1>오늘의 운세</h1>
            <p>{message}</p>
        </div>
    );
}

export default TodayLuck;
