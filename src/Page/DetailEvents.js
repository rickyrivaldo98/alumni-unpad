import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Bg from "../assets/images/bg-card.jpg";

import Moment from "react-moment";
import moment from "moment";
import Dropdown from "./layout/Dropdown";
const DetailEvents = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://ika.sarafdesign.com/event/${id}`).then((res) => {
      setData(res.data);
    });
    setLoading(false);
  }, []);

  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {loading && <div>loading...</div>}
      {!loading &&
        Data.map((x) => (
          <>
            <div className="mt-10 flex flex-col justify-center items-center">
              <div className=" bg-white shadow-sm p-7  lg:max-w-2xl sm:p-4 rounded-lg  lg:ml-20 shadow-lg">
                <img src={Bg} alt="gambar " className="w-full rounded-lg" />
                <div className="pt-5 self-center">
                  <h2 className="text-gray-700 capitalize text-xl font-bold">
                    {x.title}
                  </h2>

                  <p className="capitalize text-gray-500  pt-2">
                    <i className="fas fa-calendar fa-fw text-xl"></i>
                    {moment(x.date).format("LL")}
                  </p>
                  <p className="pt-10 text-gray-500">{x.content}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      <Footer />
    </>
  );
};

export default DetailEvents;
