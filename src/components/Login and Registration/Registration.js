import React, { useState } from "react";
import Axios from "axios";

const Registration = () => {
  const [emailReg, setEmailReg] = useState();
  const [usernameReg, setUsernameReg] = useState();
  const [passwordReg, setPasswordReg] = useState();
  
  const register = ()=>{
    Axios.post("http://localhost:5000/register", {
      email: emailReg,
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  }


  return (
    <div className="relative flex flex-col justify-center min-h-screen ">
      <div className="w-full p-6 m-auto mt-36 bg-gray-500 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-mono cursor-pointer text-white underline">
          Sign Up
        </h1>
        
          <div className="mb-2">
            <label for="email" className="font-mono text-[16px] text-white">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 font-mono text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label className="font-mono text-[16px] text-white">
              Username
            </label>
            <input
              type="username"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => {
                setUsernameReg(e.target.value);
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
                setPasswordReg(e.target.value);
              }}
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide font-mono cursor-pointer text-[16px] text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900"
            onClick={register}>
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
