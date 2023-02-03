import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Anime from "./Anime";
import Getgenre from "./Genres/Getgenre";
import Seasons from "./Seasons";
import Getseasonslist from "./Getseasonslist";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);
  const [genre, setGenre] = useState(true);

  const handleSearch = (e) => {
    if (search) {
      navigate(`/search/${search}`);
      FetchAnime(search);
      setGenre(false);
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}
        `).then((res) => res.json());
    setAnimeList(temp.data);
    console.log(temp.data);
  };

  if (animeList) {
    return (
      <div>
        <div className="flex flex-col md:flex-row space-x-16 pt-12 justify-center">
          <form className="pt-2 h-[80px]" onSubmit={handleSearch}>
            <div className="flex flex-row ">
              <input
                className="w-[288px] h-[36px] ml-4 pl-2 shadow rounded-l appearance-none border-gray-500 focus:outline-none "
                type="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="bg-white rounded-r px-4"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
          <div className="flex flex-col md:flex-row">
            {genre ? (
              <a
                onClick={() => {
                  setAnimeList([]);
                }}
              >
                <div className="flex flex-row">
                  <Getgenre />
                  <Getseasonslist />
                </div>
              </a>
            ) : (
              <a
                onClick={() => {
                  setGenre(true);
                }}
                className="hidden"
              >
                Genres
              </a>
            )}
          </div>
        </div>
        <Anime animeList={animeList} />
        {console.log(animeList)}
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

export default Search;
