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
              <div className="w-full text-xs md:text-lg">
                <a
                  href="https://www.instagram.com/ikadharmavira/"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2"
                >
                  {" "}
                  <i className="fab fa-instagram fa-lg"></i>&nbsp;IKA Dharmavira
                </a>
                <br />
                <a
                  href="https://www.facebook.com/groups/248281155182674/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fab fa-facebook fa-lg"></i>&nbsp;IKATAN ALUMNI DHARMAVIRA
                </a>
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
