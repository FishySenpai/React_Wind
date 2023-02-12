import React, { useState, useContext, useEffect } from "react";
import { UserProfile } from "../Contexts/UserProfile";
import { db } from "../../firebaseConfig";
import { useFetch } from "../Getdata";
import { doc, getDocs, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const Favourites = () => {
  const docRef = collection(db, "fav");
  const [currentMal, setCurrentMal] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate(0);
  }
  useEffect(() => {
    const docSnap = async () => {
      const favs = await getDocs(docRef);
      setData(favs.docs.map((doc) => ({ ...doc.data() })));
    };
    docSnap();
  }, []);
  return (
    <div className="px-6 items-center mx-auto container justify-between">
      <div className="sm:p-6 pt-12 items-center container justify-between">
        <ul className="flex flex-wrap">
          {data.map((top, index) => (
            <li className="mr-4 md:mr-8 pb-6" key={top.topAnime.mal_id}>
              <a href={`/topanime/${top.topAnime.mal_id}`}>
                <img
                  className="w-[140px] h-[220px] md:w-[188px] md:h-[264px] rounded hover:shadow-lg cursor-pointer hover:scale-105"
                  src={top.topAnime.images?.jpg.large_image_url}
                  alt="img"
                />
              </a>
              <div className="w-36 md:w-48 text-gray-500 text-lg hover:text-red-500 cursor-pointer">
                <button onClick={handleClick}>
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
  );
};

export default Favourites;
