import { useState, useEffect, useRef, useCallback } from "react";
import { useAuth } from "../AuthContext";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, Links, NavLink, useNavigate } from "react-router-dom";
import productList from "../ProductList/ProductList";
import { useCart } from "../ContextCard/contexts/CartProvider";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const { suggestFun, state } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const likedCount = state.likedItems.length;
  const cartQuantityCount = state.cart.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = productList.filter((item) => {
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
      });

      suggestFun(filtered);
      if (filtered.length > 0 && query.trim() !== "") {
        navigate("/suggestion"); // ✔ now allowed
      } else {
        navigate("/");
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const toggler = useCallback(() => setToggle(!toggle), [toggle]);
  useEffect(() => {
    const handleScr = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScr);
    return () => window.removeEventListener("scroll", handleScr);
  }, []);

  return (
    <header
      className={`bg-white fixed z-50 top-0 left-0 right-0 xl:px-20 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="flex  justify-between md:px-5 lg:px-10   h-[14vh] items-center mx-auto sm:px-8 px-4">
        <a className="xl:text-5xl  text-2xl lg:text-3xl  font-bold" href="">
          {" "}
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        <ul className=" hidden md:flex  items-center md:gap-x-3  lg:gap-x-4 xl:gap-x-7 h-full ">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#ea580c" : "#27272a",
              })}
              className="font-semibold lg:text-lg md:text-[13px] tracking-wider text-orange-500 hover:text-orange-500 "
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/aboutUs"}
              style={({ isActive }) => ({
                color: isActive ? "#ea580c" : "#27272a",
              })}
              className="font-semibold lg:text-lg md:text-[13px]  tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Proces"}
              style={({ isActive }) => ({
                color: isActive ? "#ea580c" : "#27272a",
              })}
              className="font-semibold lg:text-lg md:text-[13px]  tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              style={({ isActive }) => ({
                color: isActive ? "#ea580c" : "#27272a",
              })}
              className="font-semibold lg:text-lg md:text-[1rem]    tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        {currentUser && (
          <div className="flex basis-[80%] md:basis-[30%]    items-center justify-end gap-x-3 xl:gap-x-5 lg:gap-x-3 md:gap-x-2">
            <div className="hidden w-[54%]  md:flex p-1 relative border-2 border-orange-500  rounded-full">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className="  px-2 xl:h-[4vh] focus:outline-none"
                type="text"
                id="text"
                placeholder="Search..."
                autoComplete="off"
              />
              <button className="text-white right-1 top-1  absolute flex items-center lg:text-md  justify-center rounded-full bg-gradient-to-b from-orange-300 to-orange-500 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-8 xl:h-8">
                <FaSearch />
              </button>
            </div>
            <Link
              to="/Favourites"
              className=" cursor-pointer relative   text-zinc-800 lg:text-2xl text-[21px] md:text-[19px]"
            >
              <FaHeart />
              <span className="absolute bg-red-600 lg:text-[14px] text-[11px] -right-[20%] text-white -top-[100%]  w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] rounded-full flex items-center justify-center p-2">
                {likedCount}
              </span>
            </Link>
            <Link
              to="/Cart"
              className="text-zinc-800 text-[21px] relative lg:text-2xl md:text-[19px]"
            >
              {" "}
              <FaShoppingBasket />
              <span className="absolute bg-red-600 lg:text-[14px] text-[11px] -right-[20%] text-white -top-[100%]  w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] rounded-full flex items-center justify-center p-2">
                {cartQuantityCount}
              </span>
            </Link>
            <button
              onClick={toggler}
              className="text-zinc-800 text-[21px] md:hidden"
            >
              {toggle ? <FaBarsStaggered /> : <FaBars />}
            </button>
            <button
              className="text-white text-sm px-1 cursor-pointer py-1 bg-orange-500/80 rounded-xl"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Log out
            </button>
          </div>
        )}
        {!currentUser && (
          <div className="flex gap-3 sm:gap-7">
            <button
              className="text-white text-sm sm:text-md px-2 py-1 cursor-pointer bg-orange-500/80 rounded-xl"
              onClick={() => navigate("/signup")}
            >
              Sign Up{" "}
            </button>
            <button
              className="text-white text-sm sm:text-md px-2 cursor-pointer py-1 bg-orange-500/80 rounded-xl"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
            <button
              onClick={toggler}
              className="text-zinc-800 text-[21px] md:hidden"
            >
              {toggle ? <FaBarsStaggered /> : <FaBars />}
            </button>
          </div>
        )}
        {/* mobile version */}
        <ul
          className={`md:hidden bg-orange-500/15 backdrop-blur-xl rounded-xl absolute top-24 flex flex-col p-8 gap-y-7 items-center w-[80%] transition-all duration-500 ${
            toggle
              ? "left-1/2 -translate-x-1/2 opacity-100"
              : "-left-full opacity-0"
          }`}
        >
          <li>
            <a
              href="/"
              className="font-semibold lg:text-xl md:text-[13px] tracking-wider text-zinc-500 hover:text-orange-500 "
            >
              Home
            </a>
          </li>
          <li>
            <Link
              to={"/aboutUs"}
              className="font-semibold lg:text-xl md:text-[13px]  tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us{" "}
            </Link>
          </li>
          <li>
            <Link
              to={"/Proces"}
              className="font-semibold lg:text-xl md:text-[13px]  tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="font-semibold lg:text-xl md:text-[13px]    tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </Link>
          </li>
          <li className="flex p-1 relative border-2 border-orange-500  rounded-full">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className="xl:flex-1  px-2 xl:h-[4vh] focus:outline-none"
              type="text"
              id="txt"
              placeholder="Search..."
              autoComplete="off"
            />
            <button className="text-white right-1 top-1/2 -translate-y-1/2 absolute flex items-center   justify-center rounded-full bg-gradient-to-b from-orange-400 to-orange-500   w-7 h-7 ">
              <FaSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Navbar);
