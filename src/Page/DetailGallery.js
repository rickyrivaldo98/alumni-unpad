import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { SRLWrapper } from "simple-react-lightbox";

const GalleryPhoto = () => {
  let { galleryname } = useParams();
  const [loading, setLoading] = useState(false);
  const [ImageData, setImageData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://unpad.sarafdesign.com/images/gallery/${galleryname}`)
      .then((res) => {
        setImageData(res.data);
      });
    setLoading(false);
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-center my-32 text-2xl font-bold">Gallery</div>
      <SRLWrapper>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center ">
            {loading && <div>loading...</div>}
            {!loading &&
              ImageData.map((x) => (
                <>
                  <div className="w-full image-container image md:ml-5 mb-5">
                    <img
                      className="w-full image-container image"
                      alt={x.name}
                      src={`https://unpad.sarafdesign.com/uploads/${x.file}`}
                    />
                  </div>
                </>
              ))}
          </div>
        </div>
      </SRLWrapper>
      <Footer />
    </>
  );
};

export default GalleryPhoto;
