import React, { useState, useContext, useEffect } from "react";
import { UserProfile } from "../Contexts/UserProfile";
import { db } from "../../firebaseConfig";

import { doc, getDocs, collection } from "firebase/firestore";
import { async } from "@firebase/util";


const Favourites = () => {
  const docRef = collection(db, "fav");

  const [data, setData] = useState([]);
  
useEffect(()=>{
const docSnap = async () => {
  const favs = await getDocs(docRef);
  setData(favs.docs.map((doc) => ({ ...doc.data()})));
};
docSnap();
}, [])
  return <div className="text-black">
    
    {data.map((fa)=>{
      return (
        <div>
          {fa.mal_id}
          </div>
      )
    })}
    </div>;
};

export default Favourites;
