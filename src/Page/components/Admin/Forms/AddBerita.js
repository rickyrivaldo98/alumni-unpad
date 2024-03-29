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
const AddBerita = () => {
  const alert = useAlert();
  let history = useHistory();

  const [data, setData] = useState([]);
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

  const handleBerita = (e) => {
    // e.preventDefault();
    let berita = new FormData();
    berita.set("category_id", Category);
    berita.set("title", Title);
    berita.set("slug_title", slugify(Title));
    berita.set("content", convertedContent);
    berita.set("file", Image);
    const config = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "content-type": `multipart/form-data;boundary=${berita._boundary}`,
      },
    };
    axios
      .post("https://ika.sarafdesign.com/berita", berita, config)
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
      .get(`https://ika.sarafdesign.com/category`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setData([]);
      });
  });

  //validation form

  const schema = yup.object().shape({
    title: yup.string().required(),
    category: yup.string().required(),
    picture: yup
      .mixed()
      .notRequired()
      // .required("You need to provide a file image")
      .test("fileSize", "The file is too large, max 2 mb", (value) => {
        return value && value[0].size <= 4000000;
      })
      .test("type", "We only support jpeg, jpg, or png.", (value) => {
        return (
          value &&
          (value[0].type === "image/jpeg" ||
            value[0].type === "image/jpg" ||
            value[0].type === "image/png")
        );
      }),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    validationSchema: schema,
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
                  Add Berita
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(handleBerita)}>
                <div className="flex flex-col flex-wrap">
                  <div className="w-full lg:w-8/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Title
                      </label>
                      <input
                        {...register("title", {
                          required: true,
                        })}
                        type="text"
                        name="title"
                        placeholder="Insert Title"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleTitle}
                      />
                      <p style={{ color: "red" }}>{errors.title?.message}</p>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Category
                      </label>
                      <select
                        {...register("category", {
                          required: true,
                        })}
                        name="category"
                        onChange={handleCategory}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="Category"
                      >
                        <option value="" selected>
                          Choose Category
                        </option>

                        {data.map((x) => (
                          <option value={x.id}>{x.name}</option>
                        ))}
                      </select>
                      <p style={{ color: "red" }}>{errors.category?.message}</p>
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
                        Thumbnail
                      </label>
                      <input
                        required
                        {...register("picture")}
                        onChange={handleImage}
                        type="file"
                        name="picture"
                        placeholder="input file image"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      {errors.picture && (
                        <p style={{ color: "red" }}>{errors.picture.message}</p>
                      )}
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

export default AddBerita;
