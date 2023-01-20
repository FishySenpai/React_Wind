import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimeContext } from "./AnimeContext";
import Getgenre from "./Getgenre";

const Anime = ({animeList}) => {
  const navigate = useNavigate();
    console.log(animeList);
    const handleClick= ()=>{
      navigate(0);
    }
  if(animeList){
    return (
      <div>
        <div className="px-6 items-center mx-auto container justify-between">
          <div className="sm:p-6 pt-12 items-center container justify-between">
            <ul className="flex flex-wrap">
              {animeList.slice(0, 24).map((top, index) => (
                <li className="mr-4 md:mr-8 pb-6" key={top.mal_id}>
                  <a href={`/topanime/${top.mal_id}`}>
                    <img
                      className="w-[140px] h-[220px] md:w-[188px] md:h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                      src={top.images?.jpg.large_image_url}
                      alt="img"
                    />
                  </a>
                  <div className="w-36 md:w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                    <button onClick={handleClick}>
                      <Link className="text" to={`/topanime/${top.mal_id}`}>
                        {top.title}
                      </Link>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  else {
    <div>Loading...</div>
  }
};

export default Anime;
