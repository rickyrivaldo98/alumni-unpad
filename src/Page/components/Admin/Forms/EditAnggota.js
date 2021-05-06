import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import { FaWindows } from "react-icons/fa";
const EditAnggota = () => {
  let { id } = useParams();
  const alert = useAlert();
  let history = useHistory();

  const [Name, setName] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [Angkatan, setAngkatan] = useState("");
  const [Jurusan, setJurusan] = useState("");
  const [Provinsi, setProvinsi] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  //   console.log(CategoryName);

  const handleName = (e) => setName(e.target.value);
  const handleAlamat = (e) => setAlamat(e.target.value);
  const handleAngkatan = (e) => setAngkatan(e.target.value);
  const handleJurusan = (e) => setJurusan(e.target.value);
  const handleProvinsi = (e) => setProvinsi(e.target.value);
  
  useEffect(() => {
    setLoading(true);
    axios.get(`https://unpad.sarafdesign.com/anggota/${id}`).then((res) => {
      setData(res.data[0]);
      setName(res.data[0].name);
      setAlamat(res.data[0].alamat);
      setAngkatan(res.data[0].angkatan);
      setJurusan(res.data[0].jurusan);
      setProvinsi(res.data[0].provinsi);
      console.log(res.data);
    });
    setLoading(false);
  }, []);

  let edit = (e) => {
    e.preventDefault();
    if (window.confirm("Apakah anda yakin ingin mengedit?")) {
      const anggota = {
        name: Name,
        alamat: Alamat,
        angkatan: Angkatan,
        jurusan: Jurusan,
        provinsi: Provinsi,
      };
      axios
        .put(`https://unpad.sarafdesign.com/anggota/${id}`, anggota)
        .then((res) => {
          alert("Teredit");
          setTimeout(() => {
            history.push(`/admin/anggota`);
          }, 2000);
        })

        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-10/12 mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-start">
                <button
                  className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => window.history.back()}
                >
                  Back
                </button>
                <h6 className="m-2 text-blueGray-700 text-xl font-bold">
                  Add Category
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={(e) => edit(e)}>
                <div className="flex flex-col flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        name="Category"
                        placeholder="Insert Nama"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={Name}
                        onChange={(e) => {
                          handleName(e);
                        }}
                        // ref={register}
                      />
                      {/* <p style={{ color: "red" }}>
                        {errors.categoryName?.message}
                      </p> */}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Alamat
                      </label>
                      <input
                        type="text"
                        name="Category"
                        placeholder="Insert Alamat"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={Alamat}
                        onChange={(e) => {
                          handleAlamat(e);
                        }}
                        // ref={register}
                      />
                      {/* <p style={{ color: "red" }}>
                        {errors.categoryName?.message}
                      </p> */}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Angkatan
                      </label>
                      <input
                        type="text"
                        name="Category"
                        placeholder="Insert Angkatan"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={Angkatan}
                        onChange={(e) => {
                          handleAngkatan(e);
                        }}
                        // ref={register}
                      />
                      {/* <p style={{ color: "red" }}>
                        {errors.categoryName?.message}
                      </p> */}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Jurusan
                      </label>
                      <input
                        type="text"
                        name="Category"
                        placeholder="Insert Jurusan"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={Jurusan}
                        onChange={(e) => {
                          handleJurusan(e);
                        }}
                        // ref={register}
                      />
                      {/* <p style={{ color: "red" }}>
                        {errors.categoryName?.message}
                      </p> */}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Provinsi
                      </label>
                      <input
                        type="text"
                        name="Category"
                        placeholder="Insert Provinsi"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={Provinsi}
                        onChange={(e) => {
                          handleProvinsi(e);
                        }}
                        // ref={register}
                      />
                      {/* <p style={{ color: "red" }}>
                        {errors.categoryName?.message}
                      </p> */}
                    </div>
                    <button
                      className="bg-green-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAnggota;
