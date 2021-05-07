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
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import { FaWindows } from "react-icons/fa";
const AddEvent = () => {
  const alert = useAlert();
  let history = useHistory();

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Date, setDate] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const handleDate = (e) => setDate(e.target.value);

  const handleEvent = (e) => {
    // e.preventDefault();
    const event = {
      title: Title,
      content: Content,
      date: Date,
    };
    axios
      .post("https://unpad.sarafdesign.com/event", event)
      .then((res) => {
        alert.show("Event Succesfully Added!");
        setTimeout(() => {
          history.push("/admin/events");
        }, 3000);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  };

  //validation form
  // const schema = yup.object().shape({
  //   categoryName: yup.string().required(),
  // });
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const schema = yup.object().shape({
    title: yup.string().required(),
    content_category: yup.string().required(),
    date: yup.string().required(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const onSubmit = (data) => console.log(data);

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
                  Add Event
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(handleEvent)}>
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
                        {...register("title", {
                          required: true,
                        })}
                        type="text"
                        name="title"
                        placeholder="Insert Title"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleTitle}
                        // ref={register}
                      />
                      <p style={{ color: "red" }}>{errors.title?.message}</p>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Content
                      </label>
                      <textarea
                        {...register("content_category", {
                          required: true,
                        })}
                        type="text"
                        name="content_category"
                        placeholder="Insert Content"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleContent}
                        // ref={register}
                      />
                      <p style={{ color: "red" }}>
                        {errors.content_category?.message}
                      </p>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block   text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Date
                      </label>
                      <input
                        {...register("date", {
                          required: true,
                        })}
                        type="date"
                        name="Category"
                        placeholder="Insert Angkatan"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleDate}
                        // ref={register}
                      />
                      <p style={{ color: "red" }}>{errors.date?.message}</p>
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

export default AddEvent;
