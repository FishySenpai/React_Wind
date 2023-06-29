import React, {useState, useEffect} from "react";
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [topAnime, setTopAnime] = useState([]);
  const [retry, setRetry] = useState(0);
  const maxRetries = 3; // Maximum number of retries

  const getTopAnime = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const topAnime = await response.json();
    setTopAnime(topAnime.data);
    setLoading(false);
    
  }

  const fetchData = async () => {
    try {
      await getTopAnime();
    } catch (err) {
      if (retry < maxRetries) {
        setRetry(retry + 1);
        console.log(err);
        setTimeout(() => {
          fetchData();
        }, 3000); // Retry after 2 seconds
      } else {
        console.log('Maximum retry count reached');
        setLoading(true);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [retry]);

  return { loading, topAnime };
};
