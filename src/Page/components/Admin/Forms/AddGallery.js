import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import { FaWindows } from "react-icons/fa";
const AddGallery = () => {
  const alert = useAlert();
  let history = useHistory();

  const [data, setData] = useState([]);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage(e.target.files[0]);

  const handleGallery = (e) => {
    e.preventDefault();
    let gallery = new FormData();
    gallery.set("name", Title);
    gallery.set("description", Description);
    gallery.set("file", Image);

    const config = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "content-type": `multipart/form-data;boundary=${gallery._boundary}`,
      },
    };

    axios
      .post("https://unpad.sarafdesign.com/gallery", gallery, config)
      .then((res) => {
        alert.show("gallery Succesfully Added!");
        setTimeout(() => {
          history.push("/admin/gallery");
        }, 3000);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  };

  //validation form
  const schema = yup.object().shape({
    Title: yup.string().required(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  let html = "";
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
                <h6 className="m-2 text-blueGray-700 text-xl font-bold">
                  Add Gallery
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleGallery}>
                <div className="flex flex-col flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name Gallery
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Insert Title"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleTitle}
                      />
                      {/* <p style={{ color: "red" }}>
                        {errors.Title?.message}
                      </p> */}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Description
                      </label>
                      <textarea
                        onChange={handleDescription}
                        name="description"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block  text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Thumbnail
                      </label>
                      <input
                        onChange={handleImage}
                        type="file"
                        name="picture"
                        placeholder="input file image"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        // ref={register}
                      />
                      {/* {errors.picture && (
                        <p style={{ color: "red" }}>{errors.picture.message}</p>
                      )} */}
                    </div>
                    <button
                      className="bg-green-500 text-white active:bg-lightBlue-600 font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGallery;
