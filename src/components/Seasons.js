import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Anime from "./Anime";

const Seasons = () => {
  const [year, setYear] = useState(2022);
  const [season, setSeason] = useState("Spring");
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
  };

  const handleYear = (e) => {
    if (year) {
      setAnimeList([]);
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

  if (animeList) {
    return (
      <div>
        <div className="flex flex-row space-x-12">
          <form className="pt-2" onSubmit={handleYear}>
            <div>
              <button
                onClick={() => setYearToggle((prev) => !prev)}
                className="pb-2 text-gray-500 text-lg hover:text-red-500 cursor-pointer"
              >
                Year
              </button>
              <div className={`${yearToggle ? "flex" : "hidden"}`}>
                <div className="flex flex-col w-[188px] pl-2 space-y-1 bg-white rounded font-normal">
                  <button
                    value={2022}
                    onClick={(e) => setYear(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    2022
                    {console.log(year)}
                  </button>
                  <button
                    value={2021}
                    onClick={(e) => setYear(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    2021
                    {console.log(year)}
                  </button>
                  <button
                    value={2020}
                    onClick={(e) => setYear(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    2020
                    {console.log(year)}
                  </button>
                  <button
                    value={2019}
                    onClick={(e) => setYear(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    2019
                    {console.log(year)}
                  </button>
                  <button
                    value={2018}
                    onClick={(e) => setYear(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    2018
                    {console.log(year)}
                  </button>
                  <button
                    value={2017}
                    onClick={(e) => setYear(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    2017
                    {console.log(year)}
                  </button>
                  <button
                    value={2016}
                    onClick={(e) => setYear(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    2016
                    {console.log(year)}
                  </button>
                </div>
              </div>
            </div>
          </form>
          <form className="pt-2" onSubmit={handleSeason}>
            <div className="flex flex-col">
              <button
                onClick={() => setSeasonToggle((prev) => !prev)}
                className="pb-2 text-gray-500 text-lg text-left hover:text-red-500 cursor-pointer"
              >
                Season
              </button>
              <div className={`${seasonToggle ? "flex" : "hidden"}`}>
                <div className="flex flex-col w-[188px] pl-2 space-y-1 bg-white rounded font-normal">
                  <button
                    value={"spring"}
                    onClick={(e) => setSeason(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    Spring
                    {console.log(season)}
                  </button>
                  <button
                    value={"winter"}
                    onClick={(e) => setSeason(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    Winter
                    {console.log(season)}
                  </button>
                  <button
                    value={"summer"}
                    onClick={(e) => setSeason(e.target.value)}
                    className="px-4 py-2 text-left text-gray-500 text-md hover:text-red-500 cursor-pointer "
                  >
                    Summer
                    {console.log(season)}
                  </button>
                  <button
                    value={"fall"}
                    onClick={(e) => setSeason(e.target.value)}
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
          <div className="absolute right-32 pt-8">
            <Anime animeList={animeList} />
            {console.log(animeList)}
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

export default Seasons;
