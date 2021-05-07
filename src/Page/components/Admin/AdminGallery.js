import React from "react";
import DataGallery from "./DataGallery";

const AdminGallery = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <DataGallery />
        </div>
      </div>
    </>
  );
};

export default AdminGallery;
