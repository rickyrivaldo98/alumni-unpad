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
  const [Content, setContent] = useState("");
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

  const handleTitle = (e) => setTitle(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleImage = (e) => setImage(e.target.files[0]);

  const handleBerita = (e) => {
    e.preventDefault();
    const berita = {
      category_id: Category,
      title: Title,
      slug_title: slugify(Title),
      content: Content,
      file: Image,
    };
    axios
      .post("https://unpad.sarafdesign.com/berita", berita)
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
                  Add Berita
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleBerita}>
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
                        onChange={handleCategory}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="Category"
                        // {...register("Category", { required: true })}
                      >
                        <option value="" selected>
                          Choose Category
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
                        onChange={handleTitle}
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
                        // editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        // onEditorStateChange={setEditorState}
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

export default AddBerita;
