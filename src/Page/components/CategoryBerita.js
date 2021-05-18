import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import axios from "axios";

const CategoryBerita = () => {
  const [loading, setLoading] = useState(false);
  // const [GalleryData, setGalleryData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://ika.sarafdesign.com/category").then((res) => {
      setCategoryData(res.data);
    });
    setLoading(false);
  }, []);
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return <></>;
};

export default CategoryBerita;
