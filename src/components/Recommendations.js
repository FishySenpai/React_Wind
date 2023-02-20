import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Recommendations = () => {
    const [recList, setRecList] = useState();
    const {mal_id} = useParams();
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
      console.log(temp.data);
    };

    useEffect(() => {
        Relations();   
    }, [mal_id])
    
   if (recList) {
     return (
       <div>
         <div className="px-6 items-center mx-auto container justify-between">
           <div className="p-6 pt-12 items-center container justify-between">
            <div className='text-2xl py-5'>Recommendations</div>
             <ul className="flex flex-row sm:flex-wrap overflow-y-auto">
               {recList.slice(0, 6).map((rec, index) => (
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
   } else {
     <div>Loading...</div>;
   }
}

export default Recommendations;