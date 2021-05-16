import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
const UsePreloader = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ? <Preloader /> : null,
    () => setLoading(true), //Show loader
    () => setLoading(false), //Hide Loader
  ];
};

export default UsePreloader;
