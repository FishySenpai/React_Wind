import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Summer2022, Anime, TopAnime, TopAnimeInfo, Spring2022, Search, Seasons, SearchAnime, Getgenre, ShowGenre, Login } from "./components";
import Searchbar from "./components/Searchbar";

const App = () => {
  return (
    <div className="bg-main">
      <Navbar />
      <Search />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Summer2022 />
                <Spring2022 />
              </>
            }
          />
          <Route path="/topanime/:mal_id" element={<TopAnimeInfo />} />
          <Route path="/topanime" element={<TopAnime />} />
          <Route path="/spring" element={<Spring2022 />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/anime/:year/:season" element={<Anime />} />
          <Route path="/search/:anime" element={<Anime />} />
          <Route path="/search/anime/genre/:id" element={<ShowGenre />} />
          <Route path="/previous" element={<Spring2022 />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
 