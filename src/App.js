import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Summer2022,
  Anime,
  TopAnime,
  TopAnimeInfo,
  Search,
  ShowGenre,
  Login,
  Registration,
  UserContext,
  Profile,
  Upcoming,
  Top,
  Previous,
  Favourites,
  Footer,
  Trending,
} from "./components";
import { UserProfile } from "./components/Contexts/UserProfile";
import { FetchCacheProvider } from "./components/Getdata";

const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [yearToggle, setYearToggle] = useState(false);
  const [seasonToggle, setSeasonToggle] = useState(false);
  const [profile, setProfile] = useState("Login");
  const [fav, setFav] = useState();
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
      <UserProfile.Provider value={{ fav, setFav }}>
        <div className="bg-main">
          <Navbar />
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Search />

                    <Trending />
                    <Upcoming />
                    <Top />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/topanime/:mal_id"
                element={
                  <>
                    <TopAnimeInfo /> 
                  </>
                }
              />
              <Route
                path="/topanime"
                element={
                  <>
                    <Search />
                    <TopAnime />
                    <Footer />
                  </>
                }
              />
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
                    <Previous />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/login"
                element={
                  <>
                    <Login /> <Footer />
                  </>
                }
              />
              <Route
                path="/register"
                element={
                  <>
                    <Registration /> <Footer />
                  </>
                }
              />
              <Route path="/user" element={<Profile />} />
              <Route path="/fav" element={<Favourites />} />
            </Routes>
          </div>
        </div>
      </UserProfile.Provider>
    </UserContext.Provider>
  );
};

export default App;
