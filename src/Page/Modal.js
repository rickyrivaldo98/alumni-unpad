import React, { useEffect } from "react";
import ReactDOM from "react-dom";
const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);
  return (
    <>
      <div
        className={`modal ${props.show ? "show" : ""}`}
        onClick={props.onClose}
      >
        <div
          className="flex justify-center  items-center "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
            <form action="#">
              <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                <h1 className="font-bold text-xl text-center">
                  Pendaftaran Anggota Iluni KMB
                </h1>
                <div className="flex flex-col space-y-1">
                  <label className="text-gray-700">Nama Lengkap *</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Masukkan Nama Lengkap Anda"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-gray-700">No Handphone *</label>
                  <input
                    type="text"
                    name="hp"
                    id="hp"
                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Masukkan No Hp Anda"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-gray-700">Alamat Tinggal *</label>
                  <input
                    type="text"
                    name="alamat"
                    id="alamat"
                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Masukkan alamat tinggal Anda"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-gray-700">Angkatan *</label>
                  <input
                    type="text"
                    name="angkatan"
                    id="angkatan"
                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Masukkan tahun angkatan Anda"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-gray-700">Provinsi *</label>
                  <input
                    type="text"
                    name="provinsi"
                    id="provinsi"
                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Masukkan Provinsi Anda"
                  />
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end items-center">
                  <p
                    onClick={props.onClose}
                    className="cursor-pointer bg-gray-500 text-white font-nromal px-5 py-2 rounded focus:outline-none shadow hover:bg-gray-700 transition-colors mr-2"
                  >
                    Batal
                  </p>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-normal px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center text-gray-500 text-sm">
              <p>©2021. All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
