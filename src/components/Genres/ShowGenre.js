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

  if (!animeList) {
    return (
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="md:px-10 items-center mx-auto container justify-between">
          <div className="flex flex-wrap">
            {[...Array(24)].map((_, index) => (
              <div className="  rounded-lg p-1 animate-pulse " key={index}>
                <div className="w-[140px] h-[220px] md:w-[188px] md:h-[264px] bg-gray-300 mb-2"></div>
                <div className="mt-2 mb-2">
                  <div className="w-12 md:w-28  bg-gray-300 h-4 shadow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
    
  } else {
    return (
      <div className="static">
        <div className="right">
          <Anime animeList={animeList} />
          {console.log(animeList)}
        </div>
      </div>
    );
  }
};

export default ShowGenre;
