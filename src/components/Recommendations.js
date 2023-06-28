import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Recommendations = () => {
    const [recList, setRecList] = useState();
    const {mal_id} = useParams();
    const [retry, setRetry] = useState(0);
    const maxRetries = 3;
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    console.log(recList);
    const handleClick = () => {
      navigate(0);
    };
    
    const Relations = async (query) => {
      const temp = await fetch(
        `https://api.jikan.moe/v4/anime/${mal_id}/recommendations`
      ).then((res) => res.json());
      setRecList(temp.data);
      setLoading(false);
      console.log(temp.data);
    };

    const fetchData = async () => {
      try {
        await Relations();
      } catch (err) {
        if (retry < maxRetries) {
          setRetry(retry + 1);
          console.log(err);
          setTimeout(() => {
            fetchData();
          }, 3000); // Retry after 2 seconds
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
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="md:px-16 items-center mx-auto container justify-between">
          <div className="flex flex-wrap">
            {[...Array(6)].map((_, index) => (
              <div className="  rounded-lg p-1 animate-pulse mr-7" key={index}>
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
       <div>
         <div className="sm:px-6 items-center mx-auto container justify-between">
           <div className="p-6 pt-12 items-center container justify-between">
             <div className="text-2xl py-5">Recommendations</div>
             <ul className="flex flex-row sm:flex-wrap overflow-y-auto">
               {recList?.slice(0, 6).map((rec, index) => (
                 <li className="mr-8 pb-6" key={rec.entry.mal_id}>
                   <a href={`/topanime/${rec.entry.mal_id}`}>
                     {console.log(recList.entry)}
                     <img
                       className="w-[188px] h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                       src={rec.entry.images?.jpg.large_image_url}
                       alt="img"
                     />
                   </a>
                   <div className="w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                     <button onClick={handleClick}>
                       <Link
                         className="text"
                         to={`/topanime/${rec.entry.mal_id}`}
                       >
                         {rec.entry.title}
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
   }
}

export default Recommendations;