import React from "react";
import Loader from "react-loader-spinner";

const Preloader = () => {
  return (
    <>
      <div className="preload">
        <Loader
          className="flex items-center justify-center mx-auto text-center mt-10 mb-10"
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
