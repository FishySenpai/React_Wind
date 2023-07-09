import React, { useState, useEffect, useCallback, useContext } from "react";

// Create a cache context
const FetchCacheContext = React.createContext({});

export const useFetch = (url) => {
  const cache = useContext(FetchCacheContext);
  const cacheKey = url; // Use the URL as the cache key

  const [loading, setLoading] = useState(true);
  const [topAnime, setTopAnime] = useState([]);
  const [retry, setRetry] = useState(0);
  const maxRetries = 3; // Maximum number of retries

  const getTopAnime = useCallback(async () => {
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      setTopAnime(cachedData);
      setLoading(false);
    } else {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const topAnimeData = await response.json();
      setTopAnime(topAnimeData.data);
      setLoading(false);
      cache.set(cacheKey, topAnimeData.data);
    }
  }, [url, cache, cacheKey]);

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
          }, 1000); // Retry after 1 second
        }
      }
    };

    fetchData();
  }, [getTopAnime, retryFetch]);

  return { loading, topAnime };
};

// Create a cache provider component to wrap your app
export const FetchCacheProvider = ({ children }) => {
  const cache = new Map();

  return (
    <FetchCacheContext.Provider value={cache}>
      {children}
    </FetchCacheContext.Provider>
  );
};
