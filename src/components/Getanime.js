import React, { useState, useEffect } from "react";
import { useFetch } from "./Getdata";
import { Link } from "react-router-dom";

 export const Getanime = () => {
  const url = "https://api.jikan.moe/v4/seasons/now";
  const year = 2022;
  const season = "spring";
  const [viewAll, setViewAll] = useState(6);
  const { topAnime, loading } = useFetch(url);
  console.log(topAnime);
  
  if (loading) {
    <div>
      <div className="flex justify-center">
        <img src="giphy.gif" alt="nothing" />
      </div>
    </div>;
  } else {
    return (
      
        <div className="px-6 items-center mx-auto container justify-between">
          <div className="text-gray-500 text-2xl pb-4 ml-6">
            Trending...
            <button
              className="text-[16px] sm:ml-96 sm:pl-[770px] "
              onClick={(e) => {
                setViewAll(24);
              }}
            >
              View All
            </button>
          </div>
          <div className="px-6 items-center container justify-between">
            <ul className="flex flex-wrap">
              {topAnime.slice(0, viewAll).map((top, index) => (
                <li className="mr-8 pb-6" key={top.mal_id}>
                  <img
                    className="w-[188px] h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                    src={top.images.jpg.large_image_url}
                    alt="img"
                  />
                  <div className="w-48 text-gray-500 text-lg text hover:text-red-500 cursor-pointer">
                    <Link to={`/topanime/${top.mal_id}`}>{top.title}</Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    );
  }
};


