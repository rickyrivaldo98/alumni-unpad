import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-yellow-500 text-white relative pt-10 pb-10 ">
        <Link to="/" className="2xl:pl-72 xl:pl-64 lg:pl-28 md:pl-20 pl-10">
          {/* <img src={Logo} alt="" /> */}
          <div className="text-2xl font-extrabold">ILUNI KMB</div>
        </Link>
        <div className="px-10 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-10 hidden md:block 2xl:pr-72 xl:pr-64 lg:pr-28">
          <Link
            className=" text-base lg:text-normal font-medium 
          2xl:mr-10 xl:mr-5 lg:mr-3"
            to="/"
          >
            <button
              className="py-6 px-4 transition duration-500 bg-transparent hover:bg-yellow-700 "
              to="/"
            >
              Home
            </button>
          </Link>
          <Link
            className=" text-base lg:text-normal 2xl:mr-10 xl:mr-5 lg:mr-3"
            to="/berita"
          >
            <button className="py-6 px-4 transition duration-500 bg-transparent hover:bg-yellow-700 ">
              Berita
            </button>
          </Link>
          <Link
            className=" text-base lg:text-normal 2xl:mr-10 xl:mr-5 lg:mr-3"
            to="/events"
          >
            <button className="py-6 px-4 transition duration-500 bg-transparent hover:bg-yellow-700 ">
              Events
            </button>
          </Link>
          <Link
            className=" text-base lg:text-normal 2xl:mr-10 xl:mr-5 lg:mr-3"
            to="/gallery"
          >
            <button className="py-6 px-4 transition duration-500 bg-transparent hover:bg-yellow-700 ">
              Gallery
            </button>
          </Link>
          <Link
            className=" text-base lg:text-normal 2xl:mr-10 xl:mr-5 lg:mr-3 "
            to="/anggota"
          >
            <button className="py-6 px-4 transition duration-500 bg-transparent hover:bg-yellow-700 ">
              Anggota
            </button>
          </Link>
          <Link className=" text-base lg:text-normal " to="/about">
            <button className="py-6 px-4 transition duration-500 bg-transparent hover:bg-yellow-700 ">
              About
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
