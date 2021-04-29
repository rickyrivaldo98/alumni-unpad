import React from "react";
import App from "../App";
import Bg from "../assets/images/bg-unpad.jpg";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import "../App.css";
const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="jumbotron" style={{ backgroundImage: `url(${Bg})` }}>
          <div className="flex text-center justify-center mb-20 pt-20">
            <div className="flex pb-10 hide-scroll-bar">
              <div className="flex flex-nowrap ml-10">
                <div className="inline-block mr-3">
                  <div className=" px-8 py-8 bg-white w-96 h-48 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <h3 className="py-2 text-4xl font-bold font-mono">159</h3>
                    <div className="text-center mt-2 leading-none flex justify-center w-full">
                      <span className=" inline-flex items-center leading-none text-sm">
                        View number
                      </span>
                    </div>
                  </div>
                </div>
                <div className="inline-block mr-3">
                  <div className=" px-8 py-8 bg-white w-96 h-48 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <h3 className="py-2 text-4xl font-bold font-mono">159</h3>
                    <div className="text-center mt-2 leading-none flex justify-center w-full">
                      <span className=" inline-flex items-center leading-none text-sm">
                        View number
                      </span>
                    </div>
                  </div>
                </div>
                <div className="inline-block mr-3">
                  <div className=" px-8 py-8 bg-white w-96 h-48 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <h3 className="py-2 text-4xl font-bold font-mono">159</h3>
                    <div className="text-center mt-2 leading-none flex justify-center w-full">
                      <span className=" inline-flex items-center leading-none text-sm">
                        View number
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-auto">
          <div className="flex  items-center justify-center mt-20">
            <div className="text-4xl font-semibold">Berita</div>
          </div>
          <div className="flex-none md:flex items-center justify-center">
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
          <div className="flex-none md:flex items-center justify-center">
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
