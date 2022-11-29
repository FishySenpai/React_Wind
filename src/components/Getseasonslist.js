import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Anime from "./Anime";
import ShowGenre from "./ShowGenre";

const Getseasonslist = () => {
  const [year, setYear] = useState(2022);
  const [season, setSeason] = useState("Spring");
  const [seasons, setSeasons] = useState();
  const [yearToggle, setYearToggle] = useState(false);
  const [seasonToggle, setSeasonToggle] = useState(false);
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/seasons/${year}/${season}`
    ).then((res) => res.json());
    setAnimeList(temp.data);
    console.log(temp.data);
    }
    const FetchSeasons = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/seasons`).then(
      (res) => res.json()
    );
    setAnimeList(temp.data);
    console.log(temp.data);
    };

    const handleClick = () => {
      setYear(seasons.year);
    };

     const handleYear = (e) => {
       if (year) {
         navigate(`/search/anime/${year}/${season}`);
         FetchAnime(year);
         e.preventDefault();
       } else {
         e.preventDefault();
       }
     };
     const handleSeason = (e) => {
       if (season) {
         setAnimeList([]);
         navigate(`/search/anime/${year}/${season}`);
         FetchAnime(season);
         e.preventDefault();
       } else {
         e.preventDefault();
       }
     };

    if(animeList){
         return (
           <div>
             <div>
               <button onClick={FetchSeasons}>season list</button>
             </div>
             <div className="flex flex-col w-[188px] ml-36 bg-white rounded font-normal">
               <form onSubmit={handleYear}>
                 {animeList.slice(0, 8).map((seasons, index) => (
                   <ul className="flex flex-col">
                     <li className="px-4 py-2" key={seasons.mal_id}>
                       <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                         <button
                           className=""
                           onClick={(e) => {
                             setYear(seasons.year);
                           }}
                         >
                           {seasons.year}
                         </button>
                       </div>
                       {console.log(year)}
                     </li>
                   </ul>
                 ))}
               </form>
             </div>
             <div className="">
               <Anime animeList={animeList} />
               {console.log(animeList)}
             </div>
           </div>
         );
}
    else{
        <div>loading</div>
    }
}

export default Getseasonslist;