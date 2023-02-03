import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Anime from "../Anime";
import { useFetch } from "../Getdata";

const ShowGenre = () => {
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);
  const { id } = useParams();
  console.log(id);
  const FetchGenre = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?genres=${id}`
    ).then((res) => res.json());
    setAnimeList(temp.data);
    console.log(temp.data);
  };
  useEffect(() => {
    FetchGenre();
  }, [id]);

  if (animeList) {
    return (
      <div className="static">
        <div className="right">
          <Anime animeList={animeList} />
          {console.log(animeList)}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center">
        <img src="giphy.gif" alt="nothing" />
      </div>
    );
  }
};

export default ShowGenre;
