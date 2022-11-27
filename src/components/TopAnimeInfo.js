import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {useFetch} from "./Getdata";
const TopAnimeInfo = () => {
  const {mal_id} = useParams();
  const url = `https://api.jikan.moe/v4/anime/${mal_id}`;
  const { topAnime, loading } = useFetch(url);
  const {title, score, scored_by, images, synopsis,rank, popularity, members, favorites, aired, type, season, year} = topAnime;
  console.log(topAnime);
  useEffect(() => {

  }, []);
  if(images){
    return (
      <div className="bg-main font-sans text-gray-500 capitalize">
        <div className="p-6 mx-auto container flex flex-row">
          <img
            className="w-[215px] h-[300px] rounded"
            src={images.jpg.large_image_url}
            alt="img"
          />
          <div className="flex flex-col pt-16">
            <div className="px-10 text-2xl">{title}</div>
            <div className="px-10 py-5">{synopsis}</div>
          </div>
        </div>
        <div className="w-[210px] ml-52 pl-2 space-y-1 bg-white rounded pb-6 mb-6">
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
            <div className="text-cyan-900 font-semibold">Popularity: </div>
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
