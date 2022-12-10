import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {useFetch} from "./Getdata";
import Recommendations from "./Recommendations";
const TopAnimeInfo = () => {
  const {mal_id} = useParams();
  const url = `https://api.jikan.moe/v4/anime/${mal_id}`;
  const { topAnime, loading } = useFetch(url);
  const {title, score, scored_by, images, synopsis,rank, popularity, members, favorites, aired, type, season, year, genres} = topAnime;
  console.log(topAnime);

  if(images){
    return (
      <div className="bg-main font-sans text-gray-500 capitalize flex flex-col">
        <div className="relative">
          <img
            className="pt-1 bg-black object-cover w-full h-[375px] blur-sm"
            src={images.jpg.large_image_url}
            alt="img"
          />
          <div className="p-6 mx-auto container flex md:flex-row sm:flex-col">
            <img
              className="w-[215px] h-[300px] absolute rounded top-[250px]"
              src={images.jpg.large_image_url}
              alt="img"
            />
            <div className="mt-44">
              <div className="w-[210px] pl-2 space-y-1 bg-white rounded pb-6 mb-6">
                <div>
                  <div className="text-cyan-900 font-semibold">Format: </div>
                  {type}
                </div>
                <div className="">
                  <div className="text-cyan-900 font-semibold">Score: </div>
                  {score} (Scored by: {scored_by} users)
                </div>
                <div>
                  <div className="text-cyan-900 font-semibold">Rank: </div>
                  {rank}
                </div>
                <div className="">
                  <div className="text-cyan-900 font-semibold">Genres: </div>
                  {genres.map((top, index) => (
                    <li>{top.name}</li>
                  ))}
                  {console.log(genres.name)}
                </div>
                <div className="">
                  <div className="text-cyan-900 font-semibold">
                    Popularity:{" "}
                  </div>
                  {popularity}
                </div>
                <div className="">
                  <div className="text-cyan-900 font-semibold">Members: </div>
                  {members}
                </div>
                <div className="">
                  <div className="text-cyan-900 font-semibold">Favorites:</div>
                  {favorites}
                </div>
                <div>
                  <div className="text-cyan-900 font-semibold"> Aired:</div>
                  {aired.string}
                </div>
                <div>
                  <div className="text-cyan-900 font-semibold">Season:</div>
                  {season} {year}
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row md:flex-col pt-16 mx-12">
              <div className="text-2xl">{title}</div>
              <div className="py-5">{synopsis}</div>
            </div>
          </div>
        </div>
        <Recommendations/>
      </div>
    );
  }
  else if(loading){
    return (
      <div className="flex justify-center">
        <img src="giphy.gif" alt="Loading..." />
      </div>
    );
  }
};

export default TopAnimeInfo;
