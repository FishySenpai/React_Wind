import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import Anime from './Anime';



const Recommendations = () => {
    const [animeList, setAnimeList] = useState();
    const {mal_id} = useParams();
    const navigate = useNavigate();
    console.log(animeList);
    const handleClick = () => {
      navigate(0);
    };
    
    useEffect(() => {
      const Relations = async (query) => {
        const temp = await fetch(
          `https://api.jikan.moe/v4/recommendations/anime`
        ).then((res) => res.json());
        setAnimeList(temp.data);
        console.log(temp.data);
      };
    
      return () => {
        Relations();
      }
    }, [mal_id])
    
   if (animeList) {
     return (
       <div>
         <div className="px-6 items-center mx-auto container justify-between">
           <div className="p-6 pt-12 items-center container justify-between">
             <ul className="flex flex-wrap">
               {animeList.slice(0,6).map((top, index) => (
                 <li className="mr-8 pb-6" key={top.mal_id}>
                   <a href={`/topanime/${top.mal_id}`}>
                     <img
                       className="w-[188px] h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                       src={top.images?.jpg.large_image_url}
                       alt="img"
                     />
                   </a>
                   <div className="w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                     <button onClick={handleClick}>
                       <Link className="text" to={`/topanime/${top.mal_id}`}>
                         {top.title}
                       </Link>
                     </button>
                   </div>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     );
   } else {
     <div>Loading...</div>;
   }
}

export default Recommendations;