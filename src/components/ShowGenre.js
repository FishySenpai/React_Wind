import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Anime from './Anime';
import { useFetch } from './Getdata';

const ShowGenre = () => {
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);
  const { id } = useParams();
  console.log(id)
  const FetchGenre = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?genres=${id}`
    ).then((res) => res.json());
    setAnimeList(temp.data);
    console.log(temp.data);
  };
  useEffect( ()=>{
    FetchGenre();
  },[id]);

  if (animeList) {
    return (
      <div className="px-6 items-center mx-auto container justify-between">
        <div className="p-6 pt-12 items-center container justify-between">
          <ul className="flex flex-wrap">
            {animeList.slice(0, 24).map((top, index) => (
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
  } else {
    return (
      <div className="flex justify-center">
        <img src="giphy.gif" alt="nothing" />
      </div>
    );
  }
};


export default ShowGenre;