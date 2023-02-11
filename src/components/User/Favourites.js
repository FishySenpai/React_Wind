import React, { useState, useContext, useEffect } from "react";
import { UserProfile } from "../Contexts/UserProfile";
import { db } from "../../firebaseConfig";
import { useFetch } from "../Getdata";
import { doc, getDocs, collection } from "firebase/firestore";
import { async } from "@firebase/util";


const Favourites = () => {
  const docRef = collection(db, "fav");
  const url = `https://api.jikan.moe/v4/anime/${currentMal}`;
  const { topAnime, loading } = useFetch(url);
  const [data, setData] = useState([]);
  const [currentMal, setCurrentMal] = useState();
useEffect(()=>{
const docSnap = async () => {
  const favs = await getDocs(docRef);
  setData(favs.docs.map((doc) => ({ ...doc.data()})));
  {
    data.map((fa) => {
      return <div>{setCurrentMal(fa.mal_id)}</div>;
    });
  }
};
docSnap();

}, [])
useFetch();
  return <div className="text-black">
    
    
    </div>;
};

export default Favourites;
