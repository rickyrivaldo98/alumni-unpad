import React, { useEffect, useState } from "react";
import Gambar from "../assets/images/image.jpg";
import "../berita.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment";
import Loader from "react-loader-spinner";
import Dropdown from "./layout/Dropdown";
import parse from "html-react-parser";
import UsePreloader from "./components/UsePreloader";

const DetailBerita = () => {
  let { slugberita, idCat } = useParams();
  const [loading, setLoading] = useState(false);
  const [DetailBeritaData, SetDetailBeritaData] = useState([]);
  const [data, setData] = useState([]);
  const [dataTerkait, setDataTerkait] = useState([]);
  const [loader, showLoader, hideLoader] = UsePreloader();

  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  useEffect(() => {
    showLoader();
    axios
      .get(`https://unpad.sarafdesign.com/berita/${slugberita}`)
      .then((res) => {
        SetDetailBeritaData(res.data);
        setData(res.data[0]);
        axios
          .get(
            `https://unpad.sarafdesign.com/berita/category/${res.data[0].category_id}`
          )
          .then((res2) => {
            setDataTerkait(res2.data);
            setLoading(false);
          });
        hideLoader();
      });
  }, []);

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {DetailBeritaData.map((x) => (
        <>
          <div
            className="bg-detailBerita relative z-10"
            // menampilkan gambar ketika di klik
            style={{
              backgroundImage: `url(https://unpad.sarafdesign.com/uploads/${x.thumbnail})`,
            }}
          >
            <div className="bg-detailBeritaOverlay"></div>
            <div className="container p-3 mx-auto">
              <div className=" xl:mt-96 mt-48 lg:mt-24 md:ml-32">
                <div className="z-10 md:w-1/3 text-highlight text-xl md:text-3xl text-white font-semibold tracking-wide">
                  {x.title}
                </div>
              </div>
            </div>
          </div>
          <div className="content-detail">
            <div className="flex justify-center items-center text-gray-600 mb-20 mt-5">
              <p className="">
                Diposting Oleh <b>Admin</b>
              </p>
              <p className="capitalize text-gray-500 ml-5">
                <i className=" fas fa-calendar fa-fw text-xl"></i>
                {moment(x.date).format("LL")}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full p-10 md:w-4/6">
                {parse(`${x.content}`)}
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="flex  justify-center items-center m-auto">
        <h2 className="border-t-4  border-red-600  p-10 text-2xl font-bold mt-32">
          Berita Terkait
        </h2>
      </div>
      <div className="flex-none md:flex md:flex-wrap justify-center items-center">
        {dataTerkait.map((x) => (
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
                  <h3 className="text-base font-bold leading-5 ">{x.title}</h3>
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

      <Footer />
      {loader}
    </>
  );
};

export default DetailBerita;
