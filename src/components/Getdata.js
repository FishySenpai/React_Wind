import React, { useState, useEffect } from "react";
export  const useFetch= (...url)=>{
  const [loading, setLoading] = useState(true)
  const [topAnime, setTopAnime] = useState([]);

  const getTopAnime = async () => {
    const response = await fetch(url);
    const topAnime = await response.json();
    setTopAnime(topAnime.data);
    setLoading(false)
  };
  useEffect(() => {
    getTopAnime();
  }, []);
  return {loading, topAnime}
}

