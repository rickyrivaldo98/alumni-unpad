import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-yellow-500 text-white relative mt-10 md:pt-28 md:pb-28 pt-10 pb-10 ">
        <div className="container m-auto">
          <div className="w-full flex-none md:flex justify-between items-center text-left ">
            <div className="w-full md:w-2/6 mr-20 p-3">
              <div className="text-normal md:text-4xl font-bold mb-5 tracking-wider text-center md:text-left">
                ILUNI KMB
              </div>
              <div className="w-full md:w-3/4 text-xs md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                quis facilisi tellus sed nisl suspendisse ornare pulvinar
                feugiat.
              </div>
            </div>
            <div className="w-full md:w-2/6 p-3">
              <div className="text-normal md:text-4xl font-bold mb-5 tracking-wider  text-center md:text-left">
                Contact Person
              </div>
              <div className="w-full md:w-3/4 text-xs md:text-lg">
                0821664555
              </div>
              <div className="w-full md:w-3/4 text-xs md:text-lg">
                Admin@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
