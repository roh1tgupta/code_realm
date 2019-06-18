import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  let [data, setData ] = useState(null);

  useEffect(() => {
    console.log('fetch is called')
    fetch(url).then(response => response.json())
      .then(resp => {
        console.log('data', resp);
        setIsLoading(false);
        setData(resp);
      }).catch(() => setData(null))
    }, [isLoading])

  return [isLoading, data];
}

export default useFetch;