import React, { useState, useEffect } from "react";
import App from "../App";
import Bg from "../assets/images/unpad.png";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import "../App.css";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Dropdown from "./layout/Dropdown";

const Landing = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const [loading, setLoading] = useState(false);
  // const [GalleryData, setGalleryData] = useState([]);
  // const [ImageData, setImageData] = useState([]);
  const [BeritaData, SetBeritaData] = useState([]);
  const [TotalAnggota, SetTotalAnggota] = useState([]);
  const [TotalEvent, SetTotalEvent] = useState([]);

  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  useEffect(() => {
    setLoading(true);
    axios.get("https://unpad.sarafdesign.com/berita").then((res) => {
      SetBeritaData(res.data);
      axios.get("https://unpad.sarafdesign.com/verified").then((res2) => {
        SetTotalAnggota(res2.data);
        axios.get("https://unpad.sarafdesign.com/event").then((res3) => {
          SetTotalEvent(res3.data);
        });
      });
    });
    setLoading(false);
  }, []);
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <div className="overflow-hidden">
        <div
          className="jumbotron relative mb-48"
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <div>
            <div className="flex justify-center items-center">
              <h1
                data-aos="fade-up"
                className="md:text-4xl font-bold text-lg text-white mt-48 tracking-wider text-center"
              >
                Selamat Datang di Website ILUNI KMB
              </h1>
            </div>
            <div className="flex justify-center items-center mt-2">
              <p
                data-aos="fade-up"
                className="text-white text-lg tracking-wide"
              >
                Ikatan Alumni Dharmavira
              </p>
            </div>
          </div>
          <div className="flex-none md:flex absolute text-center justify-center -bottom-84   md:-bottom-20 pt-20 mx-auto left-0 right-0 text-gray-700">
            <div data-aos="fade-up" className="inline-block mr-3">
              <div className=" px-8 py-8 bg-white w-96 h-48 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <i
                  style={{ color: "orange" }}
                  className="fas fa-users fa-fw text-4xl"
                ></i>
                <h3 className="py-2 text-4xl font-bold font-mono">
                  {TotalAnggota.length}
                </h3>
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
                <h3 className="py-2 text-4xl font-bold font-mono">
                  {" "}
                  {TotalEvent.length}
                </h3>
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
                <h3 className="py-2 text-4xl font-bold font-mono">
                  {" "}
                  {BeritaData.length}
                </h3>
                <div className="text-center mt-2 leading-none flex justify-center w-full">
                  <span className=" inline-flex items-center leading-none text-sm">
                    Artikel Terunggah
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-auto text-gray-700">
          <div className="flex  items-center justify-center md:mt-20 mt-96 pt-72">
            <div className="text-2xl md:text-4xl font-semibold tracking-wide">
              Berita
            </div>
          </div>

          <div className="bg-gray-50">
            <div className="flex-none md:flex md:flex-wrap justify-center items-center mb-32">
              {BeritaData.slice(0, 6).map((x) => (
                <Link to={`/detail-berita/${x.slug_title}`}>
                  <div
                    className="bg-gray-100 m-auto w-96 h-64 mt-5 md:ml-3 "
                    style={{
                      backgroundImage: `url(https://unpad.sarafdesign.com/uploads/${x.thumbnail})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="flex flex-row items-end h-full w-full">
                      <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                        <h3 className="text-base font-bold leading-5 ">
                          {x.title}
                        </h3>
                        <div className="inline-flex items-center">
                          <span className="capitalize font-base text-xs my-1 mr-1">
                            Di Posting Oleh Admin
                          </span>
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-row">
                            <div className="w-max inline-flex items-center">
                              <svg
                                className="w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-xs ml-1 antialiased">
                                <span>Di Upload &nbsp;</span>
                                <b>
                                  <Moment fromNow>{x.created_at}</Moment>
                                </b>
                              </span>
                            </div>
                          </div>
                          <div className="w-max">
                            <svg
                              className="w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/berita"
            className="flex  items-center justify-center mt-10 "
          >
            <button class="bg-yellow-500 transition duration-500 hover:bg-yellow-700 text-white  py-1 px-5 rounded-full ">
              Lebih Banyak
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
