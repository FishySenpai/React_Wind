import { useState } from "react";
import { img1, menu, close } from "../assets";
import { Link, useNavigate} from "react-router-dom";
import {navLinks} from "../constants/index"
import Search from "./Search";
import styles from "../styles";
import Getgenre from "./Getgenre";

const Navbar = (props) => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(0);
    };
    return (
      <div>
        <div className="bg-gray-700 w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <nav className="w-full flex py-6 justify-between items-center overflow-hidden">
                <button onClick={handleClick}>
                  <Link to="/">
                    <img
                      className="w-[100px] h-[80px] sm:ml-10"
                      src={img1}
                      alt="logo"
                    />
                  </Link>
                </button>
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                  <button
                    onClick={handleClick}
                    className="font-mono cursor-pointer text-[16px] text-white hover:text-red-400 mr-10"
                  >
                    <Link to="/topanime"> Top Anime</Link>
                  </button>
                  <button
                    onClick={handleClick}
                    className="font-mono cursor-pointer text-[16px] text-white hover:text-red-400 mr-10"
                  >
                    <Link to="/previous">Previous Season</Link>
                  </button>
                  <button
                    onClick={handleClick}
                    className="font-mono cursor-pointer text-[16px] text-white hover:text-red-400 mr-10"
                  >
                    <Link to="/login">Login</Link>
                  </button>
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                  <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] mr-4 object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                  />
                </div>
                <div
                  className={`${
                    toggle ? "flex" : "hidden"
                  } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] bg-gray-gradient rounded-xl sidebar `}
                >
                  <ul className="list-none flex-col justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`font-mono cursor-pointer text-[16px] text-white hover:text-red-400 ${
                          index === navLinks.length - 1 ? "mr-0" : "mb-4"
                        }`}
                      >
                        <a>{nav.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );   
}

export default Navbar