import React, { useState, useEffect } from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const Events = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <div className="h-screen w-3/4">
          <FullCalendar
            events={[
              { title: "event 1", date: "2021-05-06" },
              { title: "event 2", date: "2020-05-12" },
            ]}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            height="100%"
          />
        </div>
      </div>
      <div className="mt-20">
        <div className="text-center text-5xl ">Bulan May</div>
        <div className="flex text-center items-center justify-center mt-5">
          <div className="flex items-center justify-between w-2/4 h-20 rounded-lg bg-yellow-600 text-white text-3xl p-2">
            <div>Events 1</div>
            <div>Tanggal 6</div>
          </div>
        </div>
        <div className="flex text-center items-center justify-center mt-5">
          <div className="flex items-center justify-between w-2/4 h-20 rounded-lg bg-yellow-600 text-white text-3xl p-2">
            <div>Events 2</div>
            <div>Tanggal 12</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
