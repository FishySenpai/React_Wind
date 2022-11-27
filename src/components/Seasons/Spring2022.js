import React from "react";
import { useFetch } from "../Getdata";
import { Link } from "react-router-dom";

const Spring2022 = ()=>{
      const year = 2022;
      const season = "spring";
      const url = `https://api.jikan.moe/v4/seasons/${year}/${season}`;
      const { topAnime, loading } = useFetch(url);
      console.log(topAnime);
      if (loading) {
        return (
          <div className="flex justify-center">
            <img src="giphy.gif" alt="nothing" />
          </div>
        );
      } else {
        return (
          <div className="px-6 items-center mx-auto container justify-between">
            <div>Spring 2022</div>
            <div className="p-6 pt-12 items-center container justify-between">
              <ul className="flex flex-wrap">
                {topAnime.slice(0, 24).map((top, index) => (
                  <li className="mr-8 pb-6" key={top.mal_id}>
                    <img
                      className="w-[188px] h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                      src={top.images.jpg.large_image_url}
                      alt="img"
                    />
                    <div className="w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                      <Link to={`/topanime/${top.mal_id}`}>{top.title}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      } 
}

export default Spring2022;