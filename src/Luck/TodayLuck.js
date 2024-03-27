import React from 'react';
import useFetchData from '../hooks/useFetchData';


function TodayLuck() {
    const { data, error } = useFetchData('http://localhost:8081/api/v1/users/luck/todayLuck');
    const message = data ? data.message : error;

    return (
        <div>
            <h1>오늘의 운세</h1>
            <p>{message}</p>
        </div>
    );
}

export default TodayLuck;
