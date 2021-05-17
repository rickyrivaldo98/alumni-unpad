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
const EditCategory = () => {
  let { id } = useParams();
  const alert = useAlert();
  let history = useHistory();

  const [CategoryName, setCategoryName] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(CategoryName);

  const handleCategoryName = (e) => setCategoryName(e.target.value);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://unpad.sarafdesign.com/category/${id}`).then((res) => {
      setData(res.data[0]);
      setCategoryName(res.data[0].name);
      console.log(res.data);
    });
    setLoading(false);
  }, []);

  let edit = (e) => {
    e.preventDefault();
    if (window.confirm("Apakah anda yakin ingin mengedit?")) {
      const category = {
        name: CategoryName,
      };
      axios
        .put(`https://unpad.sarafdesign.com/category/${id}`, category)
        .then((res) => {
          alert.show("Category name has been edited");
          setTimeout(() => {
            history.push(`/admin/category`);
          }, 2000);
        })

        .catch((error) => {
          console.log(error);
        });
    }
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
                  Edit Category
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
                        Category Name
                      </label>
                      <input
                        type="text"
                        name="Category"
                        placeholder="Insert Category"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={CategoryName}
                        onChange={(e) => {
                          handleCategoryName(e);
                        }}
                        // ref={register}
                      />
                      {/* <p style={{ color: "red" }}>
                        {errors.categoryName?.message}
                      </p> */}
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

export default EditCategory;
