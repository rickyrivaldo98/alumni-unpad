import React from "react";
import Gambar from "../assets/images/image.jpg";
import { Link, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
const Berita = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="mt-32 mb-20">
          <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-5 rounded-full">
            Berita Terbaru
          </button>
        </div>
      </div>
      <div className=" lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:rounded-lg lg:h-full"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80")',
              }}
            />
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">
              IKA Unpad Gelar Sosialisasi dan Pelatihan Terkait UU Cipta Kerja
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded-md"
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="flex-none md:flex justify-center items-center ">
          <div className="m-auto px-4 py-8 max-w-2xl">
            <div className="bg-white shadow-2xl">
              <div>
                <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
              </div>
              <div className="px-4 py-2 mt-2 bg-white">
                <h2 className="font-bold text-2xl text-gray-800">
                  IKA Unpad Adalah
                </h2>
                <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora reiciendis ad architecto at aut placeat quia, minus
                  dolor praesentium officia maxime deserunt porro amet ab
                  debitis deleniti modi soluta similique...
                </p>
                <div className="user flex items-center -ml-3 mt-8 mb-4">
                  <div className="user-logo">
                    <img
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow"
                      src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                      alt="avatar"
                    />
                  </div>
                  <a
                    href="https://twitter.com/GressierCosme1"
                    target="_blank"
                    className="text-gray-500"
                  >
                    @GressierCosme1
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/6 xs:flex md:flex-none mt-10">
            <div className="flex justify-center items-center">
              <div className="max-w-2xl bg-white  p-5 rounded-lg tracking-wide shadow-lg mb-3">
                <div id="header" className="flex">
                  <img
                    alt="mountain"
                    className="w-45 rounded-md border-2 border-gray-300"
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div id="body" className="flex flex-col ml-5">
                    <h4 id="name" className="text-xl font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p id="job" className="text-gray-800 mt-2">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex mt-5">
                      <img
                        alt="avatar"
                        className="w-6 rounded-full border-2 border-gray-300"
                        src="https://picsum.photos/seed/picsum/200"
                      />
                      <p className="ml-3">John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex justify-center items-center">
              <div className="max-w-2xl bg-white  p-5 rounded-lg tracking-wide shadow-lg mb-3">
                <div id="header" className="flex">
                  <img
                    alt="mountain"
                    className="w-45 rounded-md border-2 border-gray-300"
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div id="body" className="flex flex-col ml-5">
                    <h4 id="name" className="text-xl font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p id="job" className="text-gray-800 mt-2">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex mt-5">
                      <img
                        alt="avatar"
                        className="w-6 rounded-full border-2 border-gray-300"
                        src="https://picsum.photos/seed/picsum/200"
                      />
                      <p className="ml-3">John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="max-w-2xl bg-white  p-5 rounded-lg tracking-wide shadow-lg mb-3">
                <div id="header" className="flex">
                  <img
                    alt="mountain"
                    className="w-45 rounded-md border-2 border-gray-300"
                    src="https://picsum.photos/seed/picsum/200"
                  />
                  <div id="body" className="flex flex-col ml-5">
                    <h4 id="name" className="text-xl font-semibold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p id="job" className="text-gray-800 mt-2">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex mt-5">
                      <img
                        alt="avatar"
                        className="w-6 rounded-full border-2 border-gray-300"
                        src="https://picsum.photos/seed/picsum/200"
                      />
                      <p className="ml-3">John Doe</p>
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

export default Berita;
