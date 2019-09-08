import { useState, useEffect } from 'react'

import me from './me.json';
// const API = 'https://us-central1-gndx-cv.cloudfunctions.net/me'

// TODO: replace the local json
const useGetData = () => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    // fetch(API)
    //   .then(response => response.json())
    //   .then(data => setData(data));
    setData(me);
  }, []);

  return data;
}

export default useGetData;