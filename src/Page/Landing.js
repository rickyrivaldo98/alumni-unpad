import React, { useState, useEffect } from "react";
import App from "../App";
import Bg from "../assets/images/unpad.png";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="">
        <div
          className="jumbotron relative mb-48"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div>
            <div className="flex justify-center items-center">
              <h1
                data-aos="fade-up"
                className="md:text-4xl font-bold text-lg text-white mt-48"
              >
                Selamat Datang di Website ILUNI KMB
              </h1>
            </div>
            <div className="flex justify-center items-center mt-2">
              <p data-aos="fade-up" className="text-white text-lg">
                Ikatan Alumni Dharmavira
              </p>
            </div>
          </div>
          <div className="flex-none md:flex absolute text-center justify-center -bottom-10  md:-bottom-20 pt-20 mx-auto left-0 right-0 ">
            <div data-aos="fade-up" className="inline-block mr-3">
              <div className=" px-8 py-8 bg-white w-96 h-48 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <i
                  style={{ color: "orange" }}
                  className="fas fa-users fa-fw text-4xl"
                ></i>
                <h3 className="py-2 text-4xl font-bold font-mono">159</h3>
                <div className="text-center mt-2 leading-none flex justify-center w-full">
                  <span className=" inline-flex items-center leading-none text-sm">
                    Alumni Terdaftar
                  </span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="inline-block mr-3">
              <div className=" px-8 py-8 bg-white w-96 h-48 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <i
                  style={{ color: "orange" }}
                  className="fas fa-calendar fa-fw text-4xl"
                ></i>
                <h3 className="py-2 text-4xl font-bold font-mono">159</h3>
                <div className="text-center mt-2 leading-none flex justify-center w-full">
                  <span className=" inline-flex items-center leading-none text-sm">
                    Events Terlaksana
                  </span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="inline-block mr-3">
              <div className=" px-8 py-8 bg-white w-96 h-48 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <i
                  style={{ color: "orange" }}
                  className="fas fa-book fa-fw text-4xl"
                ></i>
                <h3 className="py-2 text-4xl font-bold font-mono">159</h3>
                <div className="text-center mt-2 leading-none flex justify-center w-full">
                  <span className=" inline-flex items-center leading-none text-sm">
                    Artikel Terunggah
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-auto ">
          <div className="flex  items-center justify-center mt-20">
            <div className="text-4xl font-semibold">Berita</div>
          </div>
          <div className="flex-none lg:flex items-center justify-center">
            <div className="flex text-justify justify-center mr-4">
              <div className="bg-white pb-2 rounded-lg tracking-wide shadow-lg my-3">
                <div id="header" className="pt-5 w-80">
                  <img
                    alt="mountain"
                    className="w-full h-auto rounded-md border-2 border-gray-300 "
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div className="text-sm p-2" id="body">
                    <div id="name" className="font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div id="job" className="text-gray-800 text-xs">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="float-right pt-2">
                      <p>5 April 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-justify justify-center mr-4">
              <div className="bg-white pb-2 rounded-lg tracking-wide shadow-lg my-3">
                <div id="header" className="pt-5 w-80">
                  <img
                    alt="mountain"
                    className="w-full h-auto rounded-md border-2 border-gray-300 "
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div className="text-sm p-2" id="body">
                    <div id="name" className="font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div id="job" className="text-gray-800 text-xs">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="float-right pt-2">
                      <p>5 April 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-justify justify-center mr-4">
              <div className="bg-white pb-2 rounded-lg tracking-wide shadow-lg my-3">
                <div id="header" className="pt-5 w-80">
                  <img
                    alt="mountain"
                    className="w-full h-auto rounded-md border-2 border-gray-300 "
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div className="text-sm p-2" id="body">
                    <div id="name" className="font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div id="job" className="text-gray-800 text-xs">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="float-right pt-2">
                      <p>5 April 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-justify justify-center mr-4">
              <div className="bg-white pb-2 rounded-lg tracking-wide shadow-lg my-3">
                <div id="header" className="pt-5 w-80">
                  <img
                    alt="mountain"
                    className="w-full h-auto rounded-md border-2 border-gray-300 "
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div className="text-sm p-2" id="body">
                    <div id="name" className="font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div id="job" className="text-gray-800 text-xs">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="float-right pt-2">
                      <p>5 April 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto">
          <div className="flex  items-center justify-center mt-20">
            <div className="text-4xl font-semibold">Events</div>
          </div>
          <div className="flex-none lg:flex items-center justify-center">
            <div className="flex text-justify justify-center mr-4">
              <div className="bg-white pb-2 rounded-lg tracking-wide shadow-lg my-3">
                <div id="header" className="pt-5 w-80">
                  <img
                    alt="mountain"
                    className="w-full h-auto rounded-md border-2 border-gray-300 "
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div className="text-sm p-2" id="body">
                    <div id="name" className="font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div id="job" className="text-gray-800 text-xs">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="float-right pt-2">
                      <p>5 April 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-justify justify-center mr-4">
              <div className="bg-white pb-2 rounded-lg tracking-wide shadow-lg my-3">
                <div id="header" className="pt-5 w-80">
                  <img
                    alt="mountain"
                    className="w-full h-auto rounded-md border-2 border-gray-300 "
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div className="text-sm p-2" id="body">
                    <div id="name" className="font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div id="job" className="text-gray-800 text-xs">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="float-right pt-2">
                      <p>5 April 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-justify justify-center mr-4">
              <div className="bg-white pb-2 rounded-lg tracking-wide shadow-lg my-3">
                <div id="header" className="pt-5 w-80">
                  <img
                    alt="mountain"
                    className="w-full h-auto rounded-md border-2 border-gray-300 "
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div className="text-sm p-2" id="body">
                    <div id="name" className="font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div id="job" className="text-gray-800 text-xs">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="float-right pt-2">
                      <p>5 April 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-justify justify-center mr-4">
              <div className="bg-white pb-2 rounded-lg tracking-wide shadow-lg my-3">
                <div id="header" className="pt-5 w-80">
                  <img
                    alt="mountain"
                    className="w-full h-auto rounded-md border-2 border-gray-300 "
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div className="text-sm p-2" id="body">
                    <div id="name" className="font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div id="job" className="text-gray-800 text-xs">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="float-right pt-2">
                      <p>5 April 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
