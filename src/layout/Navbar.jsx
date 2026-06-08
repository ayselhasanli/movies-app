import React from 'react'
import logo from  "../assets/images/logo.png"
import searchIcon from "../assets/icons/search.svg"
import notificationIcon from "../assets/icons/notification.svg";

const Navbar = () => {
  return (
    <section className="fixed top-0 left-0 right-0 z-50  bg-transparent transition-all duration-300 flex items-center py-7.5  h-[70px] bg-black/50 backdrop-blur-sm">
      <div className="container flex justify-between items-center">
        <div id="logo">
          <img src={logo} className="cursor-pointer" alt="" />
        </div>
        <div id="navMenu">
          <ul className="flex gap-[30px]">
            <li className="text-white">
              <button className="cursor-pointer">Home</button>
            </li>
            <li className="text-white">
              <button className="cursor-pointer">Movies & Shows</button>
            </li>
            <li className="text-white">
              <button className="cursor-pointer">Subscriptions</button>
            </li>
            <li className="text-white">
              <button className="cursor-pointer">Support</button>
            </li>
          </ul>
        </div>
        <div id="navigation">
          <ul className="flex gap-[30px]">
            <li>
              <button className="cursor-pointer">
                <img src={searchIcon} alt="" />
              </button>
            </li>
            <li>
              <button className="cursor-pointer">
                <img src={notificationIcon} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar
