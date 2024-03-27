import axios from "axios";
import { useEffect, useState } from "react"

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem('token');
      if(!token) {
        console.log('로그인 필요합니다');
        setError('로그인 필요합니다');
        return;
      }

      try{
        const response = await axios.get(url, {
          headers: {
            'Authorization' : `Bearer ${token}`,
            'Accept' : 'application/json',
          },
        })

        console.log(response.data,'DATA');
        setData(response.data.result);
      } catch(error) {
        console.error('데이터를 가져오는 중 에러 발생: ', error);
        setError(error);
      }
    };
    fetchData();
  },[url]);//url 변경될때마다 다시 실행
  return {data, error};

};
export default useFetchData;
