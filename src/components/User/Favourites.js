import React, { useState, useContext, useEffect } from "react";
import { UserProfile } from "../Contexts/UserProfile";
import { db } from "../../firebaseConfig";
import { doc, collection, getDocs } from "firebase/firestore";

const Favourites = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "fav"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push(doc.data());
        })
        setData(list);
      } catch(err){
        console.log(err)
      }
    };
    fetchData();
  }, []);
  return <div className="text-black">{console.log(data)}</div>;
};

export default Favourites;
