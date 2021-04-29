import React, { useState, useEffect } from "react";
import axios from "axios";
import CardStats from "./CardStats";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios.get("https://api.sarafdesign.com/contact").then((res) => {
      setData(res.data);
      axios.get("https://api.sarafdesign.com/images/gallery").then((res2) => {
        setData2(res2.data);
      });
    });
  }, []);
  console.log(data.length);
  return (
    <>
      {/* Header */}
      <div className="relative bg-admin md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-5/12 px-4">
                <CardStats
                  statSubtitle="Total Berita"
                  statTitle={data.length}
                  // statArrow="up"
                  // statPercent="3.48"
                  // statPercentColor="text-emerald-500"
                  // statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>

              <div className="w-full lg:w-6/12 xl:w-5/12 px-4">
                <CardStats
                  statSubtitle="Total Alumni"
                  statTitle={data2.length}
                  // statArrow="down"
                  // statPercent="1.10"
                  // statPercentColor="text-orange-500"
                  // statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
