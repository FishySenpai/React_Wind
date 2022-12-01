import React from "react";

const Registration = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen ">
      <div className="w-full p-6 m-auto mt-36 bg-gray-500 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-mono cursor-pointer text-white underline">
          Sign Up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label for="email" className="font-mono text-[16px] text-white">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 font-mono text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label for="password" className="font-mono text-[16px] text-white">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label for="password" className="font-mono text-[16px] text-white">
              Confirm Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide font-mono cursor-pointer text-[16px] text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900">
              Sign Up
            </button>
          </div>
        </form>

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
