import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? "grid grid-rows-5 text-center items-center bg-transparent text-gray-500 pt-5"
            : "hidden"
        }
        onClick={toggle}
      >
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/berita">
          Berita
        </Link>
        <Link className="p-4" to="/events">
          Events
        </Link>
        <Link className="p-4" to="/gallery">
          Gallery
        </Link>
        <Link className="p-4" to="/anggota">
          Anggota
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link>
      </div>
    </>
  );
};

export default Dropdown;
