import React, { useState } from "react";
import { useFetch } from "../Getdata";
import { Link } from "react-router-dom";

const Previous = () => {
  const year = 2022;
  const season = "fall";
  const url = `https://api.jikan.moe/v4/seasons/${year}/${season}`;
  const { topAnime, loading } = useFetch(url);
  console.log(topAnime);
  if (loading) {
    return (
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="md:px-10 items-center mx-auto container justify-between">
          <div className="flex flex-wrap">
            {[...Array(24)].map((_, index) => (
              <div className="  rounded-lg p-1 animate-pulse mr-5" key={index}>
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
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="text-gray-500 text-2xl ml-6">Previous</div>
        <div className="p-2 sm:p-6 items-center container justify-between">
          <ul className="flex flex-wrap">
            {topAnime?.slice(0, 24).map((top, index) => (
              <li className="mr-4 md:mr-8 pb-6" key={top.mal_id}>
                <a href={`/topanime/${top.mal_id}`}>
                  <img
                    className="w-[140px] h-[220px] md:w-[188px] md:h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                    src={top.images.jpg.large_image_url}
                    alt="img"
                  />
                </a>
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

export default Previous;
