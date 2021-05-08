import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";
import { useAlert } from "react-alert";
import { EditorState, convertFromRaw } from "draft-js";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import slugify from "react-slugify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import { FaWindows } from "react-icons/fa";
const EditBerita = () => {
  const alert = useAlert();
  let { id } = useParams();

  let history = useHistory();

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Category, setCategory] = useState("");
  const [Content, setContent] = useState(() => EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

  const handleTitle = (e) => setTitle(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleContent = (e) => {
    setContent(e);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(Content.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const handleImage = (e) => setImage(e.target.files[0]);

  let editBerita = (e) => {
    e.preventDefault();
    let berita = new FormData();
    // berita.set("category_id", Category);
    // berita.set("title", Title);
    // berita.set("slug_title", slugify(Title));
    // berita.set("content", convertedContent);
    // berita.set("file", Image);
    if (Category === "") {
      berita.set("category_id", data.category_id);
    } else {
      berita.set("category_id", Category);
    }
    if (Title === "") {
      berita.set("title", data.title);
    } else {
      berita.set("title", Title);
    }
    if (Title === "") {
      berita.set("slug_title", slugify(data.title));
    } else {
      berita.set("slug_title", slugify(Title));
    }
    if (Content === "") {
      berita.set("content", data.content);
    } else {
      berita.set("content", convertedContent);
    }
    if (Image === "") {
      berita.set("file", data.thumbnail);
    } else {
      berita.set("file", Image);
    }
    const config = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "content-type": `multipart/form-data;boundary=${berita._boundary}`,
      },
    };
    axios
      .put(`https://unpad.sarafdesign.com/berita/${data.id}/${data.thumbnail}`, berita, config)
      .then((res) => {
        alert.show("Berita Succesfully Added!");
        setTimeout(() => {
          history.push("/admin/berita");
        }, 3000);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`https://unpad.sarafdesign.com/category`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setData([]);
      });
  });

  useEffect(() => {
    axios
      .get(`https://unpad.sarafdesign.com/berita/id/${id}`)
      .then((res) => {
        setData2(res.data);
        setTitle(res.data.name);
        setContent(res.data.content);
        setCategory(res.data.category_id);
        setImage(res.data.thumbnail);
      })
      .catch((error) => {
        setData([]);
      });
  });

  //validation form
  // const schema = yup.object().shape({
  //   Title: yup.string().required(),
  // });
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });
  // console.log(Category);

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
                  Edit Berita
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={(e) => editBerita(e)}>
                <div className="flex flex-col flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Category
                      </label>
                      <select
                        name="Category"
                        value={Category}
                        onChange={(e) => {
                          handleCategory(e);
                        }}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="Category"
                        // {...register("Category", { required: true })}
                      >
                        <option value={Category} selected>
                          {Category}
                        </option>

                        {data.map((x) => (
                          <option value={x.id}>{x.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Insert Title"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={Title}
                        onChange={(e) => {
                          handleTitle(e);
                        }}
                        // {...register("title", { required: true })}
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
                        Content
                      </label>
                      <Editor
                        editorState={Content}
                        // onChange={setContent}
                        // initialContentState={Content}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        // onContentStateChange={setContent}
                        onEditorStateChange={handleContent}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block  text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Image
                      </label>
                      <img
                        src={`https://unpad.sarafdesign.com/uploads/${data2.thumbnail}`}
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

export default EditBerita;
