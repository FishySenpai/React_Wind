import React from "react";
import Getgenre from "./Getgenre";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import Seasons from "./Seasons";

const Searchbar = () => {
  return (
    <div className="">
      <Search />
      <Seasons/>
    </div>
  );
};

export default Searchbar;
