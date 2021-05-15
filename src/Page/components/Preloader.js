import React from "react";
import Loader from "react-loader-spinner";
import "../../App.css";
const Preloader = () => {
  return (
    <>
      {/* <div className="preload">
        <Loader
          className="flex items-center justify-center mx-auto text-center mt-10 mb-10"
          type="Oval"
          color="#00BFFF"
          height={80}
          width={80}
        />
      </div> */}
      <div id="overlay" className="fp-container">
        {/* <img src={Spinner} className="fp-loader" alt="loading" />
         */}
        <Loader
          className="fp-loader"
          type="Oval"
          color="#00BFFF"
          height={80}
          width={80}
        />
      </div>
    </>
  );
};

export default Preloader;
