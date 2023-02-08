import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link } from "react-router-dom";
const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  const logOut = async () => {
    await signOut(auth);
    window.localStorage.clear();
  };
  return (
    <div className="flex flex-row space-x-10">
      <div className="flex flex-row justify-center items-center">
        <h1 className="hover:text-red-400">
          {user ? (
            localStorage.getItem("name") || user.email?.split("@")[0]
          ) : (
            <Link to="/login" className="text-white ">
              Login
            </Link>
          )}
        </h1>
      </div>
      <div>
        <button
          onClick={logOut}
          className={`${!user ? "hidden" : "flex hover:text-red-400"}`}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
