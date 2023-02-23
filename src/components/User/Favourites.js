import React, { useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../../firebaseConfig";
import { auth } from "../../firebaseConfig";
import { doc, getDocs, collection, where } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const Favourites = () => {
  const [data, setData] = useState([]); //data is returned back in [] 
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);
  useEffect(() => {
    if (user?.uid) {
      try {
        const docRef = collection(db, "users", user.uid, "favs");

        const docSnap = async () => {
          const fav = await getDocs(docRef);
          setData(fav.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          console.log(data);
        };
        docSnap();
      } catch (err) {
        console.log(err);
      }
    }
  }, [user?.uid]); //use dependency list so useEffect only runs when there is change to useState
  
if (user) {
  return (
    <div className="px-6 items-center mx-auto container justify-between">
      <div className="sm:p-6 pt-12 items-center container justify-between">
        <div className="text-gray-500 text-2xl py-4">
          {localStorage.getItem("name") || user.email?.split("@")[0]}'s
          Favourites
        </div>
        <ul className="flex flex-wrap">
          {data.map((top) => (
            <li className="mr-4 md:mr-8 pb-6" key={top.topAnime.mal_id}>
              <a href={`/topanime/${top.topAnime.mal_id}`}>
                <img
                  className="w-[140px] h-[220px] md:w-[188px] md:h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                  src={top.topAnime.images?.jpg.large_image_url}
                  alt="img"
                />
              </a>
              <div className="w-36 md:w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                <button>
                  <Link
                    className="text"
                    to={`/topanime/${top.topAnime.mal_id}`}
                  >
                    {top.topAnime.title}
                  </Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} else {
  navigate("/")
}
}


export default Favourites;
