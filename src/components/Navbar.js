import { useState, useContext } from "react";
import { img1, menu, close } from "../assets";
import { Link, useNavigate} from "react-router-dom";
import {navLinks} from "../constants/index"
import styles from "../styles";
import { UserContext } from "./Contexts/UserContext";
import Profile from "./Login and Registration/Profile";
import Login from "./Login and Registration/Login";


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

                  <button className="font-mono cursor-pointer text-[16px] text-white  mr-10">
                    <Profile />
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
                    toggle
                      ? "flex p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] bg-gray-gradient rounded-xl sidebar z-10"
                      : "hidden"
                  }`}
                >
                  <ul className="list-none flex flex-col justify-end items-center">
                    <div className="flex flex-col space-y-2 pb-5">
                      <button
                        onClick={handleClick}
                        className="font-mono cursor-pointer text-[16px] text-left text-white hover:text-red-400 "
                      >
                        <Link to="/topanime"> Top Anime</Link>
                      </button>
                      <button
                        onClick={handleClick}
                        className="font-mono cursor-pointer text-[16px] text-white hover:text-red-400 "
                      >
                        <Link to="/previous">Previous Season</Link>
                      </button>
                      <button className="font-mono cursor-pointer text-[16px] text-white   ">
                        <Profile />
                      </button>
                    </div>
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