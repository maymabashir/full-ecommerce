import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px]">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* navigation links */}
        <nav className="flex space-x-4 items-center">
          <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition">
            <FaInfoCircle />
            <span>About Us</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition">
            <FaEnvelope />
            <span>Contact Us</span>
          </Link>
        </nav>

        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
