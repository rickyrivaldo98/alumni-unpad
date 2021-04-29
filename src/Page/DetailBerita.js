import React from "react";
import Gambar from "../assets/images/image.jpg";
import "../berita.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
const DetailBerita = () => {
  return (
    <>
      <Navbar />
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
      <div className="content-detail">
        <div className="flex justify-center items-center text-gray-600 mb-20">
          <p className="">Diposting Oleh</p>
          <p className="ml-10">25-03-2021</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="w-full p-10 md:w-4/6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            sodales sit varius orci, lorem donec. Nibh mi potenti id lacus
            convallis. Mollis lectus faucibus nisl facilisis non, posuere morbi
            odio. Id tortor nisi amet dictum nunc leo tempor, praesent. Pretium
            sit laoreet malesuada vel ullamcorper blandit molestie est. Eleifend
            in urna sit mi eu nam eget. Id lacus ultrices placerat et ac mi,
            mattis amet. Augue imperdiet ridiculus tempus in a amet
            pellentesque. Faucibus varius ipsum augue nulla sed. Volutpat,
            facilisis eget sapien mauris. Vitae, bibendum est purus nec tempor.
            Ipsum nunc laoreet odio orci, tempus consequat sed est amet. Vel dui
            placerat consectetur porttitor proin faucibus ipsum tortor. Pharetra
            nunc ullamcorper ut ultrices faucibus porta. Eget nullam in ac
            adipiscing nec aliquam sed duis. Urna, viverra gravida aliquam
            varius volutpat egestas. Odio fames est pharetra, eu purus. Non ac
            velit, adipiscing amet proin senectus morbi. Vitae nam aliquet
            interdum suspendisse lorem faucibus. Pulvinar convallis volutpat
            fermentum lectus. Posuere posuere posuere a, nulla est posuere
            felis, velit et. Fringilla vitae semper vel fringilla et at faucibus
            massa. Eget pulvinar et mi a, integer non suspendisse at volutpat.
            Etiam dui, mattis ipsum, nulla id. Tempus morbi quis ut purus
            ullamcorper praesent nulla. Mi donec vel, in feugiat fusce sagittis,
            nunc pellentesque. Mi ac felis tellus et, fames. Adipiscing ut
            volutpat urna ac suspendisse. Ultrices est est vel lacus, ridiculus
            ullamcorper dapibus at aliquam. Sed libero duis morbi tortor turpis
            auctor enim sit aliquam. Egestas amet senectus sed imperdiet sit
            nunc, pellentesque imperdiet. Feugiat placerat est odio molestie
            rhoncus nunc, tincidunt. Maecenas feugiat sem sapien lacus. Eleifend
            ac est senectus diam. Cursus in in eget vel. Nec, phasellus nibh
            eget ut aenean. Posuere semper leo diam id sed elit et lacus sit.
            Tempus adipiscing aenean in augue sed adipiscing rhoncus. Nullam
            aliquet quis eu gravida netus pretium id ut. Consequat sit nulla
            feugiat arcu. Egestas integer ultrices tincidunt volutpat, sagittis
            scelerisque. Tempus gravida diam aenean molestie in. Massa elementum
            tincidunt urna interdum leo at tincidunt euismod. Id dolor enim,
            interdum gravida odio orci quis dolor. Amet, interdum tellus ornare
            sed enim. Vitae sem et vestibulum dolor, eu id egestas varius. Nisi,
            praesent ut vulputate sit cras faucibus vel tellus vitae. Lorem amet
            integer neque, tristique vel sollicitudin nisl. Integer pellentesque
            placerat massa volutpat sem sollicitudin tempus. Enim in lectus vel
            habitant quisque consequat, id odio mattis. Malesuada pellentesque
            non fringilla quam nunc amet, lorem neque sed. Et amet gravida velit
            morbi netus sagittis libero. Lectus semper sit sit.
          </p>
        </div>
        <div className="flex  justify-center items-center m-auto">
          <h2 className="border-t-4  border-red-600  p-10 text-2xl font-bold mt-32">
            Berita Terkait
          </h2>
        </div>
        <div className="flex-none md:flex container  m-auto">
          <div className="px-4 py-8 max-w-2xl">
            <div className="bg-white shadow-2xl">
              <div>
                <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
              </div>
              <div className="px-4 py-2 mt-2 bg-white">
                <h2 className="font-bold text-2xl text-gray-800">
                  IKA Unpad Adalah
                </h2>
                <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora reiciendis ad architecto at aut placeat quia, minus
                  dolor praesentium officia maxime deserunt porro amet ab
                  debitis deleniti modi soluta similique...
                </p>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Selengkapnya
                </button>
                <div className="user flex items-center -ml-3 mt-8 mb-4">
                  <div className="user-logo">
                    <img
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow"
                      src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                      alt="avatar"
                    />
                  </div>
                  <a
                    href="https://twitter.com/GressierCosme1"
                    target="_blank"
                    className="text-gray-500"
                  >
                    @GressierCosme1
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-8 max-w-2xl">
            <div className="bg-white shadow-2xl">
              <div>
                <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
              </div>
              <div className="px-4 py-2 mt-2 bg-white">
                <h2 className="font-bold text-2xl text-gray-800">
                  IKA Unpad Adalah
                </h2>
                <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora reiciendis ad architecto at aut placeat quia, minus
                  dolor praesentium officia maxime deserunt porro amet ab
                  debitis deleniti modi soluta similique...
                </p>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Selengkapnya
                </button>
                <div className="user flex items-center -ml-3 mt-8 mb-4">
                  <div className="user-logo">
                    <img
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow"
                      src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                      alt="avatar"
                    />
                  </div>
                  <a
                    href="https://twitter.com/GressierCosme1"
                    target="_blank"
                    className="text-gray-500"
                  >
                    @GressierCosme1
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-8 max-w-2xl">
            <div className="bg-white shadow-2xl">
              <div>
                <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
              </div>
              <div className="px-4 py-2 mt-2 bg-white">
                <h2 className="font-bold text-2xl text-gray-800">
                  IKA Unpad Adalah
                </h2>
                <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora reiciendis ad architecto at aut placeat quia, minus
                  dolor praesentium officia maxime deserunt porro amet ab
                  debitis deleniti modi soluta similique...
                </p>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Selengkapnya
                </button>
                <div className="user flex items-center -ml-3 mt-8 mb-4">
                  <div className="user-logo">
                    <img
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow"
                      src="https://images.unsplash.com/photo-1607789382281-1152591ec0da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                      alt="avatar"
                    />
                  </div>
                  <a
                    href="https://twitter.com/GressierCosme1"
                    target="_blank"
                    className="text-gray-500"
                  >
                    @GressierCosme1
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailBerita;
