import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";
import { useAlert } from "react-alert";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddGallery from "./AddGallery";

// import { FaWindows } from "react-icons/fa";
const EditEvent = () => {
  let { id } = useParams();
  const alert = useAlert();
  let history = useHistory();

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState(EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);
  const [Date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [Image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => {
    setContent(e);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(Content.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const handleDate = (e) => setDate(e.target.value);
  const handleImage = (e) => setImage(e.target.files[0]);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://ika.sarafdesign.com/event/${id}`).then((res) => {
      setData(res.data[0]);
      setTitle(res.data[0].title);
      setContent(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(res.data[0].content)
          )
        )
      );
      setDate(res.data[0].date.substr(0, 10));
      setImage(res.data[0].file);
      // console.log(res.data);
    });
    setLoading(false);
  }, []);
  console.log(data.thumbnail);
  let edit = (e) => {
    e.preventDefault();
    let event = new FormData();

    if (Title === "") {
      event.set("title", data.title);
    } else {
      event.set("title", Title);
    }
    if (Content === "") {
      event.set("content", data.content);
    } else {
      event.set("content", convertedContent);
    }
    if (Date === "") {
      event.set("date", data.date);
    } else {
      event.set("date", Date);
    }
    if (Image === "") {
      event.set("file", data.thumbnail);
    } else {
      event.set("file", Image);
    }

    const config = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "content-type": `multipart/form-data;boundary=${event._boundary}`,
      },
    };

    axios
      .put(
        `https://ika.sarafdesign.com/event/${data.id}/${data.thumbnail}`,
        event,
        config
      )
      .then((res) => {
        alert.show("Teredit");
        setTimeout(() => {
          history.push(`/admin/events`);
        }, 2000);
      })

      .catch((error) => {
        console.log(error);
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
                <h6 className="m-2 text-blueGray-700 text-xl font-bold">
                  Add Events
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={(e) => edit(e)}>
                <div className="flex flex-col flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="Category"
                        placeholder="Insert Title"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={Title}
                        onChange={(e) => {
                          handleTitle(e);
                        }}
                        // ref={register}
                      />
                      {/* <p style={{ color: "red" }}>
                        {errors.categoryName?.message}
                      </p> */}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
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
                      {/* <p style={{ color: "red" }}>
                        {errors.categoryName?.message}
                      </p> */}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        name="Category"
                        placeholder="Insert Date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={Date}
                        onChange={(e) => {
                          handleDate(e);
                        }}
                        // ref={register}
                      />
                      {/* <p style={{ color: "red" }}>
                        {errors.categoryName?.message}
                      </p> */}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block  text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Thumbnail
                      </label>
                      <img
                        src={`https://ika.sarafdesign.com/uploads/${data.thumbnail}`}
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

export default EditEvent;
