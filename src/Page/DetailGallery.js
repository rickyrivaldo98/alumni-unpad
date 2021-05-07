import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";
import { data } from "autoprefixer";
import Moment from "react-moment";
import moment from "moment";
import Preloader from "./components/Preloader";

const GalleryPhoto = () => {
  let { galleryname } = useParams();
  const [loading, setLoading] = useState(false);
  const [ImageData, setImageData] = useState([]);
  const [Data, setData] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://unpad.sarafdesign.com/images/gallery/${galleryname}`)
      .then((res) => {
        setImageData(res.data);
        setData(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(ImageData);

  return (
    <>
      <Navbar />
      <div className="text-center my-32 ">
        <h2 className="text-2xl font-bold">Gallery {Data.gallery_name}</h2>
        <p>dibuat {moment(Data.created_at).format("LL")}</p>
        <p className="mt-5">{Data.description}</p>
      </div>

      <SRLWrapper>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center ">
            {ImageData.length === 0 ? (
              <div className="cursor-default bg-yellow-500 transition duration-500 hover:bg-yellow-700 text-white py-1 px-5 rounded-full text-center">
                Maaf Gambar Belum Tersedia
              </div>
            ) : (
              <>
                {loading && <Preloader />}
                {!loading && (
                  <>
                    {ImageData.map((x) => (
                      <div className="w-full image-container image ml-3 md:ml-5  mb-5 cursor-pointer shadow-lg">
                        <img
                          className="w-full image-container image"
                          alt={x.name}
                          src={`https://unpad.sarafdesign.com/uploads/${x.file}`}
                        />
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </SRLWrapper>
      <Footer />
    </>
  );
};

export default GalleryPhoto;
