import { useState, useEffect } from 'react'
const API = 'https://us-central1-gndx-cv.cloudfunctions.net/me'

const useGetData = () => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
}

export default useGetData;