import React from "react";
import DataAnggota from "./DataAnggota";

const AdminAnggota = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <DataAnggota />
        </div>
      </div>
    </>
  );
};

export default AdminAnggota;