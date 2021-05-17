import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Moment from "react-moment";
import moment from "moment";
import { Link } from "react-router-dom";
import Dropdown from "./layout/Dropdown";
import Aos from "aos";

const Gallery = () => {
  const [loading, setLoading] = useState(false);
  const [GalleryData, setGalleryData] = useState([]);
  const [ImageData, setImageData] = useState([]);

  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  useEffect(() => {
    setLoading(true);
    axios.get("https://unpad.sarafdesign.com/gallery").then((res) => {
      setGalleryData(res.data);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <div className="container mx-auto mt-20">
        <div
          data-aos="fade-down"
          style={{ color: "#4b5563" }}
          className="text-center my-32 text-2xl font-bold"
        >
          Gallery Iluni KMB
        </div>

        <div className="flex flex-wrap justify-center items-center ">
          {GalleryData.length === 0 ? (
            <div
              data-aos="fade-up"
              className="cursor-default bg-yellow-500 transition duration-500 hover:bg-yellow-700 text-white py-1 px-5 rounded-full text-center"
            >
              Maaf Gallery Belum Tersedia
            </div>
          ) : (
            <>
              {GalleryData.map((x) => (
                <>
                  <Link
                    data-aos="fade-left"
                    to={`/detail-gallery/${x.slug_gallery}`}
                    key={x.slug_gallery}
                  >
                    <div
                      style={{
                        backgroundImage: `url(https://unpad.sarafdesign.com/uploads/${x.thumbnail})`,
                      }}
                      className="container-gallery gambar-gallery  shadow-lg ml-2 mb-4"
                    >
                      <div className="overlay">
                        <div className="flex flex-col justify-center items-center text-white mt-20">
                          <div className="text-2xl font-bold text-center tracking-wide">
                            {x.name}
                          </div>
                          <div>{x.description}</div>
                          <div>
                            <p className="mt-16">
                              dibuat {moment(x.created_at).format("LL")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
