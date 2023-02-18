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
    if (user.uid) {
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
  }, [user.uid]); //use dependency list so useEffect only runs when there is change to useState
  return (
    <div className="px-6 items-center mx-auto container justify-between">
      <div className="sm:p-6 pt-12 items-center container justify-between">
        {data.map((top) => top.topAnime?.title)}
      </div>
    </div>
  );
};

export default Favourites;
