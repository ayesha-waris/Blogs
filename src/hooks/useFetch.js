import { useEffect, useState } from 'react';
const useFetch = (url, headers={'Content-Type': 'application/json'}) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, {
      headers: headers})
      .then((res) => {
        if (!res.ok) {
          throw Error('error in fetching');
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
     
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsLoading(false);
        }
    
      });
    return () => abortCont.abort();
  }, [url]);

  return { blogs, isLoading };
};
export default useFetch;
