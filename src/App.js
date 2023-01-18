import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Summer2022, Anime, TopAnime, TopAnimeInfo, Spring2022, Search, ShowGenre, Login, Registration, UserContext, Profile, Upcoming, Top} from "./components";
import Recommendations from "./components/Recommendations";

const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [yearToggle, setYearToggle] = useState(false);
  const [seasonToggle, setSeasonToggle] = useState(false);
  const [profile, setProfile] = useState('Login');
  return (
    <UserContext.Provider
      value={{
        profile,
        setProfile,
        showProfile,
        setShowProfile,
        showGenre,
        setShowGenre,
        yearToggle,
        setYearToggle,
        seasonToggle,
        setSeasonToggle,
      }}
    >
      <div className="bg-main">
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Search />
                  <Summer2022 />
                  <Spring2022 />
                  <Upcoming/>
                  <Top/>
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
            <Route path="/user" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default App;
 