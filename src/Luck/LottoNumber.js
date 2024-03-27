import React from 'react';
import useFetchData from '../hooks/useFetchData';

function LottoNumber() {
    const { data, error } = useFetchData('http://localhost:8081/api/v1/users/luck/lotto');
    const lottoNumbers = data || [];

    return (
      <div>
        <h1>로또 번호 생성기</h1>
        {error ? <p>{error}</p> :
          <div>
            <h2>생성된 로또 번호:</h2>
            <ul>
              {lottoNumbers.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
          </div>
        }
      </div>
    );
}

export default LottoNumber;
