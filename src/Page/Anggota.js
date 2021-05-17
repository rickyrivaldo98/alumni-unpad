import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./layout/Navbar";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import Footer from "./layout/Footer";
import Modal from "./Modal";
import Loader from "react-loader-spinner";
import "../App.css";
import Dropdown from "./layout/Dropdown";

const Anggota = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://unpad.sarafdesign.com/verified")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setData([]);
        setEmpty(true);
      });
    setLoading(false);
  }, [data]);

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

  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  let i = 1;

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <div className="antialiased font-sans ">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div>
              <h2 className="text-2xl font-semibold leading-tight">
                Anggota Ikatan Alumni Dharmavira
              </h2>
              <button
                onClick={() => setShow(true)}
                class="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Tambah Anggota
              </button>
            </div>
            <div className="my-2 flex sm:flex-row flex-col">
              <div className="flex flex-row mb-1 sm:mb-0">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                </div>
              </div>
              <div className="block relative">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current text-gray-500"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  placeholder="Search"
                  className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        No
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Nama
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Alamat
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Angkatan
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Jurusan
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Provinsi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterData.length === 0 ? (
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
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {i++}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {x.name}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {x.alamat}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {x.angkatan}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {x.jurusan}
                                </p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {x.provinsi}
                                </p>
                              </td>
                              {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        />
                        <span className="relative">Active</span>
                      </span>
                    </td> */}
                            </tr>
                          ))}
                      </>
                    )}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing {filterData.length} of {filterData.length} Entries
                  </span>
                  {/* <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                      Next
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={() => setShow(false)} show={show} />
      <Footer />
    </>
  );
};

export default Anggota;
