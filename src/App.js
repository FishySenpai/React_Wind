import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Summer2022, Anime, TopAnime, TopAnimeInfo, Spring2022, Search, ShowGenre, Login, Registration, Getseasonslist} from "./components";

const App = () => {
  return (
    <div className="bg-main">
      <Navbar />
      <Getseasonslist/>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search />
                <Summer2022 />
                <Spring2022 />
              </>
            }
          />
          <Route path="/topanime/:mal_id" element={<TopAnimeInfo />} />
          <Route
            path="/topanime"
            element={
              <>
                <Search />
                <TopAnime />
              </>
            }
          />
          <Route path="/spring" element={<Spring2022 />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/search/anime/:year/:season"
            element={
              <>
                <Search />
                <Anime />
              </>
            }
          />
          <Route
            path="/search/:anime"
            element={
              <>
                <Search />
                <Anime />
              </>
            }
          />
          <Route
            path="/search/anime/genre/:id"
            element={
              <>
                <Search />
                <ShowGenre />
              </>
            }
          />
          <Route
            path="/previous"
            element={
              <>
                <Search />
                <Spring2022 />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
 