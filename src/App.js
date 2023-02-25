import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Summer2022, Anime, TopAnime, TopAnimeInfo, Spring2022, Search, ShowGenre, Login, Registration, UserContext, Profile, Upcoming, Top, Previous, Favourites, Footer} from "./components";
import { UserProfile } from "./components/Contexts/UserProfile";


const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [yearToggle, setYearToggle] = useState(false);
  const [seasonToggle, setSeasonToggle] = useState(false);
  const [profile, setProfile] = useState('Login');
  const [fav, setFav] = useState()
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
                    <Summer2022 />
                    <Upcoming />
                    <Top />
                    <Footer/>
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
                    <Previous />
                  </>
                }
              />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/user" element={<Profile />} />
              <Route path="/fav" element={<Favourites/>}/>
            </Routes>
          </div>
          
        </div>
      </UserProfile.Provider>
    </UserContext.Provider>
  );
};

export default App;
 