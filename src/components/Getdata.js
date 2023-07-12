import React, { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [topAnime, setTopAnime] = useState([]);
  const [retry, setRetry] = useState(0);
  const maxRetries = 3; // Maximum number of retries

  const getTopAnime = useCallback(async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const topAnimeData = await response.json();
    setTopAnime(topAnimeData.data);
    setLoading(false);
  }, [url]);

  const retryFetch = useCallback(() => {
    if (retry < maxRetries) {
      setRetry(retry + 1);
    } else {
      console.log("Maximum retry count reached");
    }
  }, [retry]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getTopAnime();
      } catch (err) {
        retryFetch();
        if (retry < maxRetries) {
          setTimeout(() => {
            fetchData();
          }, 2000); // Retry after 1 second
        }
      }
    };

    fetchData();
  }, []); // Empty dependency array

  return { loading, topAnime };
};
