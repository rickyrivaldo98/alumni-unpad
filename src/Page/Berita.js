import React, { useEffect, useState } from "react";
import Gambar from "../assets/images/image.jpg";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dropdown from "./layout/Dropdown";
const Berita = () => {
  const [loading, setLoading] = useState(false);
  // const [GalleryData, setGalleryData] = useState([]);
  // const [ImageData, setImageData] = useState([]);
  const [BeritaData, SetBeritaData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://unpad.sarafdesign.com/berita").then((res) => {
      SetBeritaData(res.data);
    });
    setLoading(false);
  }, []);

  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <div className="flex justify-center items-center">
        <div className="mt-32 mb-20">
          <div class="cursor-default bg-yellow-500 transition duration-500 hover:bg-yellow-700 text-white font-bold py-1 px-5 rounded-full">
            Berita Terbaru
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Carousel
          infinite={true}
          swipeable={true}
          autoPlaySpeed={1000}
          containerClass="carousel-container"
          draggable={false}
          showDots={true}
          responsive={responsive}
          dotListClass="custom-dot-list-style"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {loading && <div>loading...</div>}
          {!loading &&
            BeritaData.slice(-3).map((x) => (
              <>
                <div className="bg-white lg:mx-8 lg:flex  lg:shadow-lg lg:rounded-lg ">
                  <div className="lg:w-1/2">
                    <div
                      className="h-64 bg-cover lg:rounded-lg lg:h-96"
                      style={{
                        backgroundImage: `url(https://unpad.sarafdesign.com/uploads/${x.thumbnail})`,
                      }}
                    />
                  </div>
                  <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <h2 className="text-xl md:text-3xl text-gray-800 font-bold">
                      {x.title}
                    </h2>
                    <p className="mt-4 text-gray-600">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem modi reprehenderit vitae exercitationem aliquid
                      dolores ullam temporibus enim expedita aperiam mollitia
                      iure consectetur dicta tenetur, porro consequuntur saepe
                      accusantium consequatur.
                    </p>
                    <div className="mt-8">
                      <Link
                        to={`/detail-berita/${x.slug_title}`}
                        className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded-md"
                      >
                        Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </Carousel>
      </div>

      <hr className="container mx-auto mt-10" />

      <div className="flex  justify-center items-center m-auto">
        <h2 className="border-t-4  border-red-600  p-10 text-2xl font-bold mt-32">
          Baca Berita
        </h2>
      </div>
      <div className="bg-gray-50">
        <div className="flex-none md:flex md:flex-wrap justify-center items-center mb-32">
          {BeritaData.map((x) => (
            <Link to={`/detail-berita/${x.slug_title}`}>
              <div
                className="bg-gray-100 m-auto w-96 h-64 mt-5 ml-3"
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
                      {x.title.length < 51 ? (
                        <>{x.title}</>
                      ) : (
                        <>{x.title.substring(0, 51)} ...</>
                      )}
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

      <Footer />
    </>
  );
};

export default Berita;
