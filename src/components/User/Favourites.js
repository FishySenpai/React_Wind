import React, { useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "../../firebaseConfig";
import { auth } from "../../firebaseConfig";
import { doc, getDoc, collection, where } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const Favourites = () => {
  
  const [currentMal, setCurrentMal] = useState([]);
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate(0);
  }
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user)
    });
  });
  useEffect(() => {
    if(user){
const docSnap = async () => {
  const favs = await getDoc(doc(db, "users", user.uid));
  setData(favs);
  console.log(data);
};
docSnap();
    }
    
  }, [user]);
  return (
    <div className="px-6 items-center mx-auto container justify-between">
      <div className="sm:p-6 pt-12 items-center container justify-between">
       
      </div>
    </div>
  );
};

export default Favourites;
