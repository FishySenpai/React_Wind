import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "./Getdata";
import Recommendations from "./Recommendations";
import Reviews from "./Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, regular } from "@fortawesome/free-solid-svg-icons";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { db } from "../firebaseConfig";
const TopAnimeInfo = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });
  const { mal_id } = useParams();
  const url = `https://api.jikan.moe/v4/anime/${mal_id}`;
  const { topAnime, loading } = useFetch(url);
  const {
    title,
    score,
    scored_by,
    images,
    synopsis,
    rank,
    popularity,
    members,
    favorites,
    aired,
    type,
    season,
    year,
    genres,
  } = topAnime;
  console.log(topAnime);
useEffect(()=>{
 const userFav = async () => {
   
   // Add a new document in collection "cities"
   try {
     await setDoc(doc(db, "users", user.uid), {});
   } catch (err) {
     console.log(err);
   }
 };
 userFav();
})
 const addFav = async () => {
   // Add a new document in collection "cities"
   try {
     await addDoc(collection(db, "users", user.uid, "favs"), {
      topAnime
     });
   } catch (err) {
     console.log(err);
   }
 };
  if (images) {
    return (
      <div className="bg-main font-sans text-gray-500 capitalize flex flex-col">
        <div className="relative">
          <img
            className="pt-1 bg-black object-cover w-full h-[375px] blur-sm"
            src={images.jpg.large_image_url}
            alt="img"
          />
          <div className="p-6 mx-auto container flex md:flex-row sm:flex-col flex-col">
            <img
              className="w-[215px] h-[300px] absolute rounded top-[250px]"
              src={images.jpg.large_image_url}
              alt="img"
            />
            <div className="mt-44">
              <div className="overflow-y-auto sm:overflow-y-hidden">
                <div className="w-[810px]  p-2 space-x-6 sm:space-x-0 sm:w-[210px] sm:pl-2 sm:space-y-1 bg-white rounded sm:pb-6 sm:mb-6 flex flex-row sm:flex-col">
                  <div>
                    <div className="text-cyan-900 font-semibold">Format: </div>
                    {type}
                  </div>
                  <div className="">
                    <div className="text-cyan-900 font-semibold">Score: </div>
                    {score}
                    <div className="hidden sm:visible">
                      (Scored by: {scored_by} users)
                    </div>
                  </div>
                  <div>
                    <div className="text-cyan-900 font-semibold">Rank: </div>
                    {rank}
                  </div>
                  <div className="">
                    <div className="text-cyan-900 font-semibold mx-4">
                      Genres:{" "}
                    </div>
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
                    <div className="text-cyan-900 font-semibold">
                      Favorites:
                    </div>
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
            </div>
            <div className="flex flex-col sm:flex-col md:flex-col pt-16 sm:mx-12 ">
              <div className="text-2xl">
                {title}
                <button onClick={addFav}>
                  <FontAwesomeIcon icon={faStar} className="ml-4" />
                </button>
              </div>
              <div className="py-5 text-sm">{synopsis}</div>
              <div className="hidden sm:visible">
                <Reviews />
              </div>
            </div>
          </div>
          <div className="overflow-y-auto">
            <Recommendations />
          </div>
        </div>
      </div>
    );
  } else if (loading) {
    return (
      <div className="flex justify-center">
        <img src="giphy.gif" alt="Loading..." />
      </div>
    );
  }
};

export default TopAnimeInfo;
