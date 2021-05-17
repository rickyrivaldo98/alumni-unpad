import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import Bg from "../assets/images/bg-card.jpg";
import { Link } from "react-router-dom";
import Preloader from "./components/Preloader";
import Dropdown from "./layout/Dropdown";
import Aos from "aos";

const Events = () => {
  const [upComing, setUpcoming] = useState([]);
  const [month, setMonth] = useState("");
  const [namaMonth, setnamaMonth] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://unpad.sarafdesign.com/event`).then((res) => {
      setUpcoming(
        res.data.map((x) => ({
          id: x.id,
          title: x.title,
          date: x.date.substr(0, 10),
          thumbnail: x.thumbnail,
        }))
      );

      setLoading(false);
    });
  }, []);

  let checkComingMonth = upComing.filter((x) => x.date.substr(5, 2) == month);
  checkComingMonth.sort((a, b) => {
    if (a.date < b.date) return -1;
    return a.date > b.date ? 1 : 0;
  });
  console.log(checkComingMonth);

  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      {upComing.length === 0 ? (
        <>
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <div className="flex items-center justify-center mt-20">
            <div className="h-screen w-3/4">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                height="100%"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {loading && <Preloader />}
          {!loading && (
            <>
              <Navbar toggle={toggle} />
              <Dropdown isOpen={isOpen} toggle={toggle} />
              <div className="flex items-center justify-center mt-20">
                <div className="h-screen w-3/4">
                  <FullCalendar
                    datesSet={(arg) => {
                      setnamaMonth(arg.view.title.substr(0, 3));
                      console.log(arg.view.title.substr(0, 3));
                      setMonth(arg.view.currentEnd.toISOString().substr(5, 2));
                    }}
                    events={upComing}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    height="100%"
                  />
                </div>
              </div>
              {checkComingMonth === undefined ||
              checkComingMonth.length == 0 ? (
                <div
                  data-aos="fade-down"
                  className="text-center text-3xl mt-10"
                >
                  Tidak Ada Events Bulan Ini
                </div>
              ) : (
                <>
                  <div className="mt-20 text-center text-3xl ">
                    Kegiatan di Bulan {namaMonth}
                  </div>
                  {checkComingMonth.map((x) => (
                    <div className="mt-10 flex flex-col justify-center items-center">
                      <div
                        data-aos="fade-right"
                        className="sm:grid grid-cols-5 bg-white shadow-sm p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20 shadow-lg"
                      >
                        <img
                          src={`https://unpad.sarafdesign.com/uploads/${x.thumbnail}`}
                          alt="gambar "
                          className="w-full rounded-lg"
                        />
                        <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
                          <h2 className="text-gray-700 capitalize text-xl font-bold">
                            {x.title}
                          </h2>

                          <p className="capitalize text-gray-500  pt-2">
                            <i className=" fas fa-calendar fa-fw text-xl"></i>
                            {moment(x.date).format("LL")}
                          </p>
                          <div className="mt-8">
                            <Link
                              to={`/detail-events/${x.id}`}
                              key={x.id}
                              className="bg-blue-600 text-gray-100 px-3 py-2  rounded-lg"
                            >
                              Info Lanjut
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
              <Footer />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Events;
