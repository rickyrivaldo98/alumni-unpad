import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center h-16 bg-yellow-500 text-white relative mt-10 pt-40 pb-40 ">
        <div className="w-full flex text-left">
          <div className="w-1/6"></div>
          <div className="w-2/6 mr-20">
            <div className="text-normal md:text-4xl font-bold mb-5">
              ILUNI KMB
            </div>
            <div className="w-full md:w-3/4 text-xs md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu quis
              facilisi tellus sed nisl suspendisse ornare pulvinar feugiat.
            </div>
          </div>
          <div className="w-2/6">
            <div className="text-normal md:text-4xl font-bold mb-5">
              Contact Person
            </div>
            <div className="w-full md:w-3/4 text-lg">0821664555</div>
            <div className="w-full md:w-3/4 text-lg">Admin@gmail.com</div>
          </div>
          <div className="w-1/6"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
