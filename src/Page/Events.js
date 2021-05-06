import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const Events = () => {
  const [upComing, setUpcoming] = useState([]);
  const [month, setMonth] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://unpad.sarafdesign.com/event`).then((res) => {
      setUpcoming(
        res.data.map((x) => ({
          title: x.title,
          date: x.date.substr(0, 10),
        }))
      );

      setLoading(false);
    });
  }, []);
  // console.log(upComing);

  let checkComingMonth = upComing.filter((x) => x.date.substr(5, 2) == month);
  checkComingMonth.sort((a, b) => {
    if (a.date < b.date) return -1;
    return a.date > b.date ? 1 : 0;
  });
  // console.log(checkComingMonth);

  return (
    <>
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <Navbar />
          <div className="flex items-center justify-center mt-20">
            <div className="h-screen w-3/4">
              <FullCalendar
                datesSet={(arg) => {
                  setMonth(arg.view.currentEnd.toISOString().substr(5, 2));
                }}
                events={upComing}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                height="100%"
              />
            </div>
          </div>
          {checkComingMonth === undefined || checkComingMonth.length == 0 ? (
            <div className="text-center text-5xl ">
              Tidak Ada Events Bulan Ini
            </div>
          ) : (
            <>
              <div className="mt-20 text-center text-5xl ">Bulan {month}</div>
              {checkComingMonth.map((x) => (
                <div className="mt-10">
                  <div className="flex text-center items-center justify-center mt-5">
                    <div className="flex items-center justify-between w-2/4 h-20 rounded-lg bg-yellow-600 text-white text-3xl p-2">
                      <div>{x.title}</div>
                      <div>Tanggal {x.date.substr(8, 2)}</div>
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
  );
};

export default Events;
