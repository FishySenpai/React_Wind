import React, { useState } from "react";
import { useFetch } from "../Getdata";
import { Link } from "react-router-dom";
import ShowSeasons from "./ShowSeasons";
const Top = () => {
  const [viewAll, setViewAll] = useState(6);
  const url = `https://api.jikan.moe/v4/top/anime`;
  const { topAnime, loading } = useFetch(url);
  console.log(topAnime);
 return (
   <div>
     <div className="px-6 items-center mx-auto container justify-between">
       <div className="md:px-10 items-center mx-auto container justify-between">
         <div className="text-gray-500 text-2xl ml-2 md:ml-6 static">
           Top Anime
           <button
             className="text-[16px] pl-[130px] sm:ml-[96] sm:pl-[300px] xl:ml-96 xl:pl-[770px] sticky"
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
       </div>
     </div>
     <ShowSeasons loading={loading} topAnime={topAnime} viewAll={viewAll} />
   </div>
 );
}

export default Top;
