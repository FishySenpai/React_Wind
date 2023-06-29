import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Anime from "./Anime";

const Reviews = () => {
  const [revList, setRevList] = useState();
  const [revToggle, setRevToggle]= useState(false);
  const [revID, setRevID] = useState();
  const { mal_id } = useParams();
  const [retry, setRetry] = useState(0);
  const maxRetries = 3;
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log(revList);

   const handleClick = (id) => {
     if (id === revID) {
       setRevToggle(!revToggle);
     } else {
       setRevToggle(true);
     }
     setRevID(id);
   };

const Review = async (query) => {
  const temp = await fetch(
    `https://api.jikan.moe/v4/anime/${mal_id}/reviews`
  ).then((res) => res.json());
  setRevList(temp.data);
setLoading(false)
  console.log(temp.data);
};
const fetchData = async () => {
  try {
    await Review();
  } catch (err) {
    if (retry < maxRetries) {
      setRetry(retry + 1);
      console.log(err);
      setTimeout(() => {
        fetchData();
      }, 2000); // Retry after 2 seconds
    } else {
      console.log("Maximum retry count reached");
      setLoading(true);
    }
  }
};
  useEffect(() => {
      fetchData();
  }, [retry]);

  if (loading) {
     return (
       <div className="px-2 sm:px-6 items-center mx-auto container justify-between ">
         <div className="sm:p-6 pt-12 items-center container justify-between">
           <div className="text-2xl py-5">Reviews</div>
           <div className="flex flex-wrap">
             {[...Array(3)].map((_, index) => (
               <div className="rounded-lg p-1 animate-pulse mr-7" key={index}>
                 <div className="mb-7">
                   <div className="flex flex-row">
                     <div className="w-16 h-16 rounded-full bg-gray-300 mb-2"></div>
                     <div className="mt-6 ml-2 w-12 md:w-28 bg-gray-300 h-4 shadow"></div>
                   </div>
                   <div className="w-40 md:w-[800px] bg-gray-300 h-4 mt-2 shadow"></div>
                   <div className="w-40 md:w-[800px] bg-gray-300 h-4 mt-2 shadow"></div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     );
    
  } else {
   return (
     <div>
       <div className="px-2 sm:px-6 items-center mx-auto container justify-between ">
         <div className="sm:p-6 pt-12 items-center container justify-between">
           <div className="text-2xl py-5">Reviews</div>
           <ul className="flex flex-wrap">
             {revList?.slice(0, 3).map((rev, index) => (
               <li className="mr-8 pb-6" key={rev.mal_id}>
                 <div className="text-gray-600 text-md">
                   <div className="flex flex-row">
                     <a href={rev.user.url}>
                       {console.log(revList.user)}
                       <img
                         className="w-16 h-16 rounded-full"
                         src={rev.user.images?.jpg.image_url}
                         alt="img"
                       />
                     </a>
                     <div className="text-[16px] space-x-24 p-4 text-gray-800 font-medium">
                       {rev.user.username}
                     </div>
                     <div className="text-[16px] space-x-24 p-4 text-gray-800 font-medium">
                       {rev.tags.slice(0, 1)}
                     </div>
                   </div>
                   <button onClick={() => handleClick(rev.mal_id)}>
                     <div
                       className={`${
                         rev.mal_id === revID && revToggle ? "flex" : "text"
                       }`}
                     >
                       {rev.review}
                     </div>
                   </button>
                 </div>
               </li>
             ))}
           </ul>
         </div>
       </div>
     </div>
   );

  }
};

export default Reviews;
