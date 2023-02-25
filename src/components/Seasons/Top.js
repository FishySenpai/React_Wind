import React, { useState } from "react";
import { useFetch } from "../Getdata";
import { Link } from "react-router-dom";

const Top = () => {
  const [viewAll, setViewAll] = useState(6);
  const url = `https://api.jikan.moe/v4/top/anime`;
  const { topAnime, loading } = useFetch(url);
  console.log(topAnime);
  
    return (
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="md:px-6 items-center mx-auto container justify-between">
          <div className="text-gray-500 text-2xl ml-2 md:ml-6 static">
            Top Anime
            <button
              className="text-[16px] pl-[130px] sm:ml-[96] sm:pl-[300px] xl:ml-96 xl:pl-[770px] sticky "
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
              {topAnime.slice(0, viewAll).map((top, index) => (
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
      </div>
    );
  }

export default Top;
