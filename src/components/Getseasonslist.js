import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Anime from "./Anime";
import { UserContext } from "./Contexts/UserContext";

const Getseasonslist = () => {
  const [year, setYear] = useState(2022);
  const [season, setSeason] = useState("Spring");
  const { showGenre, setShowGenre, yearToggle, setYearToggle, seasonToggle, setSeasonToggle } = useContext(UserContext);
  const [seasonList, setSeasonList] = useState([]);
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);
  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/seasons/${year}/${season}`
    ).then((res) => res.json());
    setAnimeList(temp.data);
    console.log(temp.data);
  };
  const FetchSeasons = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/seasons`).then((res) =>
      res.json()
    );
    setSeasonList(temp.data);
    console.log(temp.data);
  };

  const handleClick = () => {
    FetchSeasons();
    setYearToggle((prev) => !prev);
    setSeasonToggle(false);
    setShowGenre(false);
  };

  const handleTest = (e) => {
    if (year) {
      setAnimeList([]);
      navigate(`/search/anime/${year}/${season}`);
      FetchAnime();
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  };
  if (animeList) {
    return (
      <div className="flex flex-row pt-2">
        <div>
          <button
            className="px-5 pb-2 text-gray-500 text-lg text-left hover:text-red-500 cursor-pointer"
            onClick={handleClick}
          >
            Year
          </button>
          <form className="" onSubmit={handleTest}>
            <div className={`${yearToggle ? "flex" : "hidden"}`}>
              <div className="h-[300px] absolute overflow-y-auto scrollbar overflow-x-hidden">
                <div className="flex flex-col w-[150px] bg-white rounded font-normal">
                  {seasonList.slice(0, 50).map((seasons, index) => (
                    <ul className="flex flex-col">
                      <li className="px-4 py-2" key={seasons.mal_id}>
                        <div className="text-gray-500 text-md hover:text-red-500 cursor-pointer">
                          <button
                            className=""
                            onClick={(e) => {
                              setYear(seasons.year);
                              setYearToggle((prev) => !prev);
                            }}
                          >
                            {seasons.year}
                          </button>
                        </div>
                        {console.log(year)}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <button
            onClick={() => {
              setSeasonToggle((prev) => !prev);
              setYearToggle(false);
              setShowGenre(false);
            }}
            className="px-5 pb-2 text-gray-500 text-lg text-left hover:text-red-500 cursor-pointer"
          >
            Season
          </button>
          <form className="pt-2" onSubmit={handleTest}>
            <div className="flex flex-col">
              <div className={`${seasonToggle ? "flex" : "hidden"}`}>
                <div className="flex flex-col absolute w-[150px] pl-2 space-y-1 bg-white rounded font-normal">
                  <button
                    value={"spring"}
                    onClick={(e) => {
                      setSeason(e.target.value);
                      setSeasonToggle((prev) => !prev);
                    }}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    Spring
                    {console.log(season)}
                  </button>
                  <button
                    value={"winter"}
                    onClick={(e) => {
                      setSeason(e.target.value);
                      setSeasonToggle((prev) => !prev);
                    }}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    Winter
                    {console.log(season)}
                  </button>
                  <button
                    value={"summer"}
                    onClick={(e) => {
                      setSeason(e.target.value);
                      setSeasonToggle((prev) => !prev);
                    }}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    Summer
                    {console.log(season)}
                  </button>
                  <button
                    value={"fall"}
                    onClick={(e) => {
                      setSeason(e.target.value);
                      setSeasonToggle((prev) => !prev);
                    }}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    Fall
                    {console.log(season)}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="static">
          <div className="left-5 sm:left-14 absolute sm:right-0 mt-32 -z-10">
            <Anime animeList={animeList} />
            {console.log(animeList)}
          </div>
        </div>
      </div>
    );
  } else {
    <div>loading</div>;
  }
};

export default Getseasonslist;
