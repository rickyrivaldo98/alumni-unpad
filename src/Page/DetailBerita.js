import React from "react";
import Gambar from "../assets/images/image.jpg";
import "../berita.css";
const DetailBerita = () => {
  return (
    <>
      <div
        className="bg-detailBerita relative z-10"
        // menampilkan gambar ketika di klik
        style={{
          backgroundImage: `url(${Gambar})`,
        }}
      >
        <div className="bg-detailBeritaOverlay"></div>
        <div className="container p-3 mx-auto">
          <div className=" xl:mt-96 lg:mt-24 ml-32">
            <div className="z-10 w-1/3 text-highlight text-3xl text-white font-semibold">
              IKA Unpad Gelar Sosialisasi dan Pelatihan Terkait UU Cipta Kerja
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBerita;
