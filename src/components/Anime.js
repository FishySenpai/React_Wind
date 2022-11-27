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
        <div>
          <div className="px-6 items-center mx-auto container justify-between">
            <div className="p-6 pt-12 items-center container justify-between">
              <ul className="flex flex-wrap">
                {animeList.map((top, index) => (
                  <li className="mr-8 pb-6" key={top.mal_id}>
                    <img
                      className="w-[188px] h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                      src={top.images.jpg.large_image_url}
                      alt="img"
                    />
                    <div className="w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                      <button onClick={handleClick}>
                        <Link to={`/topanime/${top.mal_id}`}>{top.title}</Link>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Anime;
