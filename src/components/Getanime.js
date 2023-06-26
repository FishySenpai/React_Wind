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
    return (
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="md:px-6 items-center mx-auto container justify-between">
          <div className="flex flex-wrap">
            {[...Array(viewAll)].map((_, index) => (
              <div className="  rounded-lg p-1 animate-pulse " key={index}>
                <div className="w-[140px] h-[220px] md:w-[188px] md:h-[264px] bg-gray-300 mb-2"></div>
                <div className="mt-2">
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
      <div className="md:px-6">
        <div className="text-gray-500 text-2xl pb-4 ml-2 md:ml-6">
          Trending...
          <button
            className="text-[16px] pl-[130px] sm:ml-[96] sm:pl-[300px] xl:ml-96 xl:pl-[770px]"
            onClick={(e) => {
              if (viewAll == 6) {
                setViewAll(24);
              } else if (viewAll == 24) {
                setViewAll(6);
              }
            }}
          >
            View All
          </button>
        </div>
        <div className="md:px-6 items-center container justify-between">
          <ul className="flex flex-wrap">
            {topAnime?.slice(0, viewAll).map((top, index) => (
              <li className="mr-4 md:mr-8 pb-6" key={top.mal_id}>
                <img
                  className="w-[140px] h-[220px] md:w-[188px] md:h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                  src={top.images.jpg.large_image_url}
                  alt="img"
                />
                <div className="w-36 md:w-48 text-gray-500 text-lg text hover:text-red-500 cursor-pointer">
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


