import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { css } from "@emotion/core";
import Loader from "react-loader-spinner";
// components
import { useAlert } from "react-alert";

export default function DataUnverified({ color }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");

  let [colorLoading, setColorLoading] = useState("#ffffff");
  const alert = useAlert();
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://ika.sarafdesign.com/unverified")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setData([]);
        setEmpty(true);
      });
    setLoading(false);
  }, []);

  let handleVerification = (e) => {
    if (window.confirm("Apakah anda yakin ingin memverifikasi?")) {
      setLoading(true);
      axios
        .put(`https://ika.sarafdesign.com/anggota/confirm/${e}`)
        .then((res) => {
          alert.show("Terverifikasi");
          window.location.reload();
        });
      setLoading(false);
    } else {
    }
  };
  let handleDelete = (e) => {
    if (window.confirm("Apakah anda yakin ingin menghapus?")) {
      setLoading(true);
      axios.delete(`https://ika.sarafdesign.com/anggota/${e}`).then((res) => {
        alert.show("Kehapus");
        window.location.reload();
      });
      setLoading(false);
    } else {
    }
  };
  const PrimaryKey = ["id"];

  useEffect(() => {
    const lowercasedValue = search.toLowerCase();
    const filteredData = data.filter((item) => {
      return Object.keys(item).some((key) =>
        PrimaryKey.includes(key)
          ? false
          : item[key].toString().toLowerCase().includes(lowercasedValue)
      );
    });
    setFilterData(filteredData);
  }, [search, data]);

  let i = 1;

  return (
    <>
      <div className="relative flex w-1/2 flex-wrap items-stretch mb-3 text-gray-500">
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <i className="fas fa-search" />
        </span>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Anggota"
          className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
        />
      </div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Verifikasi Alumni
                <Link to={`/admin/addanggota`}>
                  <button
                    className="bg-green-500 text-white  font-bold float-right text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Add Anggota
                  </button>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  No
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Nama
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Alamat
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Angkatan
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Jurusan
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Provinsi
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {empty ? (
                <div className="w-full justify-center items-center flex flex-col p-6">
                  Data Kosong
                </div>
              ) : (
                <>
                  {loading && (
                    <div>
                      <Loader
                        className="flex items-center justify-center mx-auto text-center mt-10 mb-10"
                        type="Oval"
                        color="#00BFFF"
                        height={80}
                        width={80}
                      />
                    </div>
                  )}
                  {!loading &&
                    filterData.map((x) => (
                      <tr>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                          {i++}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                          {x.name}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                          {x.alamat}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                          {x.angkatan}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                          {x.jurusan}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold">
                          {x.provinsi}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                          <div className="flex">
                            <button
                              className="bg-blue-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => handleVerification(x.id)}
                            >
                              Verifikasi
                            </button>
                            <button
                              className="bg-red-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => handleDelete(x.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  {filterData.length === 0 && (
                    <>
                      <div className="flex justify-center items-center text-center my-8">
                        <span>Judul tidak ditemukan</span>
                      </div>
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

DataUnverified.defaultProps = {
  color: "light",
};

DataUnverified.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
