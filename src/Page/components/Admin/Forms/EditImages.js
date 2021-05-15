import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";
import slugify from "react-slugify";
import { useAlert } from "react-alert";

const EditImages = () => {
  let { id } = useParams();
  let history = useHistory();
  const alert = useAlert();

  const [Gallery, setGallery] = useState("");
  // const [Category, setCategory] = useState("");
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTitle = (e) => setTitle(e.target.value);
  // const handleCategory = (e) => setCategory(e.target.value);
  const handleGallery = (e) => setGallery(e.target.value);
  const handleImage = (e) => setImage(e.target.files[0]);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://unpad.sarafdesign.com/images/${id}`).then((res) => {
      setData(res.data[0]);
      setTitle(res.data[0].name);
      // setCategory(res.data[0].category);
      setGallery(res.data[0].gallery_id);
      setImage(res.data[0].file);
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    axios
      .get(`https://unpad.sarafdesign.com/gallery`)
      .then((res) => {
        setData2(res.data);
      })
      .catch((error) => {
        setData2([]);
      });
  }, [data2]);

  let edit = (e) => {
    e.preventDefault();
    let images = new FormData();

    if (Title === "") {
      images.set("name", data.nama);
    } else {
      images.set("name", Title);
    }
    // if (Category === "") {
    //   images.set("category", data.category);
    // } else {
    //   images.set("category", Category);
    // }
    if (Gallery === "") {
      images.set("gallery_id", data.gallery);
    } else {
      images.set("gallery_id", Gallery);
    }
    if (Image === "") {
      images.set("file", data.thumbnail);
    } else {
      images.set("file", Image);
    }

    for (var pair of images.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    const config = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "content-type": `multipart/form-data;boundary=${images._boundary}`,
      },
    };

    axios
      .put(
        `https://unpad.sarafdesign.com/images/${data.id}/${data.thumbnail}`,
        images,
        config
      )
      .then((res) => {
        console.log(res.data + "this is data after api call");
        alert.show("Images Successfully Edited ! ");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        history.push(`/admin/images`);
        // console.log(res);
      })

      .catch((error) => {
        console.log(error);
        // console.log(images);
      });
  };

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-10/12 mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-start">
                <button
                  className="bg-blue-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => window.history.back()}
                >
                  Back
                </button>
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Edit Images
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={(e) => edit(e)}>
                <div className="flex flex-col flex-wrap">
                  {loading && <div>loading...</div>}
                  {!loading && (
                    <>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block  text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Images Name
                          </label>
                          <input
                            value={Title}
                            onChange={(e) => {
                              handleTitle(e);
                            }}
                            type="text"
                            // placeholder={data.name}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                        {/* <div className="relative w-full mb-3">
                          <label
                            className="block text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Category Image
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Insert Category"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            onChange={(e) => {
                              handleCategory(e);
                            }}
                            value={Category}
                          />
                        </div> */}
                        <div className="relative w-full mb-3">
                          <label
                            className="block text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Gallery
                          </label>
                          <select
                            name="Gallery"
                            onChange={(e) => {
                              handleGallery(e);
                            }}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="Gallery"
                          >
                            <option value={Gallery} selected>
                              {Gallery}
                            </option>
                            {data2.map((x) => (
                              <option value={x.id}>{x.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block  text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Image
                          </label>
                          <img
                            src={`https://unpad.sarafdesign.com/uploads/${data.file}`}
                            alt=""
                          />
                          <input
                            onChange={handleImage}
                            type="file"
                            placeholder="input file image"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>

                        <button
                          className="bg-green-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                          type="submit"
                        >
                          Edit
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditImages;
