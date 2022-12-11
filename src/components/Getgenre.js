import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "./Getdata";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";

const Getgenre = () => {
  const [genre, setGenre] = useState();
  const {
    showGenre,
    setShowGenre,
    yearToggle,
    setYearToggle,
    seasonToggle,
    setSeasonToggle,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);

  const handleSubmit = (e) => {
    if (animeList) {
      setShowGenre(!showGenre);
      setYearToggle(false);
      setSeasonToggle(false);
      console.log(genre)
      FetchGenre();
      
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  };

  const handleClick = () => {
    setShowGenre(false);
    setGenre(genre.mal_id);
    navigate(`/search/anime/genre/${genre}`);
  }

  
    const FetchGenre = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/genres/anime`).then(
      (res) => res.json()
    );
    setAnimeList(temp.data);
    console.log(temp.data);
    };

  if (animeList) {
    return (
      <div className="h-[100px]">
        <div className="flex flex-col">
          <button
            onClick={handleSubmit}
            className="pb-2 text-gray-500 text-lg hover:text-red-500 cursor-pointer pt-2"
          >
            Genre
          </button>
          <div className={`${showGenre? "flex" : "hidden"}`}>
            <div className="flex flex-col h-[300px] absolute overflow-y-auto scrollbar bg-white rounded font-normal">
              {animeList.map((genre, index) => (
                <ul className="flex flex-col">
                  <li className="px-4 py-2" key={genre.mal_id}>
                    <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                      <Link to={`/search/anime/genre/${genre.mal_id}`}>
                        <button onClick={handleClick}>
                          <div className="">{genre.name}</div>
                        </button>
                      </Link>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
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

export default Getgenre;
