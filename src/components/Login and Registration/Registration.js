import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Registration = () => {
  const [emailReg, setEmailReg] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      username: username,
      password: password,
    });
  };


  return (
    <div className="relative flex flex-col justify-center min-h-screen ">
      <div className="w-full p-6 m-auto mt-36 bg-gray-500 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-mono cursor-pointer text-white underline">
          Sign Up
        </h1>
          <div className="mb-2">
            <label className="font-mono text-[16px] text-white">
              Username
            </label>
            <input
              type="username"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label for="password" className="font-mono text-[16px] text-white">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide font-mono cursor-pointer text-[16px] text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900"
            onClick={createUser}>
              Sign Up
            </button>
          </div>
        

        <p className="mt-8 font-mono cursor-pointer text-[12px] text-white">
          {" "}
          Already have an account?{" "}
          <a
            href="/login"
            className="font-mono cursor-pointer text-[16px] text-white hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
