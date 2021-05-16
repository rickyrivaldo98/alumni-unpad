import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormData from "form-data";
import { data } from "autoprefixer";
import { useAlert } from "react-alert";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
  convertFromHTML,
  CompositeDecorator,
  ContentBlock,
} from "draft-js";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { convertToHTML /*convertFromHTML */ } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
// import DOMPurify from "dompurify";
import slugify from "react-slugify";
import htmlToDraft from "html-to-draftjs";
import { stateFromHTML } from "draft-js-import-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import { FaWindows } from "react-icons/fa";
const EditBerita = () => {
  const alert = useAlert();
  let { id } = useParams();

  let history = useHistory();

  // const createMarkup = (html) => {
  //   return {
  //     __html: DOMPurify.sanitize(html),
  //   };
  // };
  const [loading, setLoading] = useState();

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [oldContent, setOldContent] = useState("");

  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Category, setCategory] = useState("");
  useEffect(() => {
    axios
      .get(`https://unpad.sarafdesign.com/berita/id/${id}`)
      .then((res) => {
        setLoading(true);
        setContent(
          EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(res.data[0].content)
            )
          )
        );
        setData2(res.data[0]);
        setTitle(res.data[0].title);
        // testhtml2 = res.data[0].content;
        // setOldContent(htmlToDraft(testhtml2));
        setCategory(res.data[0].category_id);
        setImage(res.data[0].thumbnail);
        // console.log(testhtml2);
        setLoading(false);
      })
      .catch((error) => {
        setData([]);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://unpad.sarafdesign.com/category`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setData([]);
      });
  }, []);

  console.log(data2);

  // const converthtml = EditorState.createWithContent(
  //   convertFromHTML(oldContent)
  // );
  // const testhtml = `<p>Haloo ini test</p> `;
  // const testhtml2 = `${oldContent}`;
  // console.log("ini oldContent2 " + testhtml2);

  // const testhtml2 = `${oldContent}`;
  // const converthtml = stateFromHTML(testhtml);
  // const converthtml2 = stateFromHTML(oldContent);

  // const converthtml = testhtml;
  // const converthtml2 = oldContent;

  // const converthtml = oldContent;
  let editorStateInitial;
  // if (converthtml) {
  //   // const contentState = ContentState.createFromBlockArray(
  //   //   converthtml.contentBlocks,
  //   //   converthtml.entityMap
  //   // );
  //   // console.log(`data testhtml ${converthtml}`);
  //   // console.log(`data testhtml2 ${converthtml2}`);
  //   editorStateInitial = EditorState.createWithContent(converthtml2);
  // } else {
  //   // const contentState2 = ContentState.createFromBlockArray(
  //   //   converthtml2.contentBlocks,
  //   //   converthtml2.entityMap
  //   // );
  //   // editorStateInitial = EditorState.createWithContent(contentState2);
  //   editorStateInitial = EditorState.createEmpty();
  // }
  // const isikonten = EditorState.createWithContent(contentState);

  // if (!loading) {
  //   editorStateInitial = EditorState.createWithContent(
  //     ContentState.createFromBlockArray(convertFromHTML(testhtml))
  //   );
  // }
  const [Content, setContent] = useState(EditorState.createEmpty());
  // EditorState.createWithContent(
  //   ContentState.createFromBlockArray(convertFromHTML(testhtml))
  // )
  // editorStateInitial

  // const [convertedHtml, setConvertedHtml] = useState(() =>
  //   EditorState.createWithContent(oldContent)
  // );
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
  // console.log("ini testhtml " + testhtml);
  // console.log("ini converted " + convertedContent);

  // console.log("ini testhtml2 " + testhtml2);

  let editBerita = (e) => {
    e.preventDefault();
    let berita = new FormData();
    // berita.set("category_id", Category);
    // berita.set("title", Title);
    // berita.set("slug_title", slugify(Title));
    // berita.set("content", convertedContent);
    // berita.set("file", Image);
    if (Category === "") {
      berita.set("category_id", data2.category_id);
    } else {
      berita.set("category_id", Category);
    }
    if (Title === "") {
      berita.set("title", data2.title);
    } else {
      berita.set("title", Title);
    }
    if (Title === "") {
      berita.set("slug_title", slugify(data2.title));
    } else {
      berita.set("slug_title", slugify(Title));
    }
    if (Content === "") {
      berita.set("content", data2.content);
    } else {
      berita.set("content", convertedContent);
    }
    if (Image === "") {
      berita.set("file", data2.thumbnail);
    } else {
      berita.set("file", Image);
    }

    for (var pair of berita.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    const config = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "content-type": `multipart/form-data;boundary=${berita._boundary}`,
      },
    };
    axios
      .put(
        `https://unpad.sarafdesign.com/berita/${data2.id}/${data2.thumbnail}`,
        berita,
        config
      )
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

  // console.log(Category);
  //validation form
  // const schema = yup.object().shape({
  //   Title: yup.string().required(),
  // });
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });
  // console.log(Category);

  return (
    <>
      {loading ? (
        <>
          <div>loading</div>
        </>
      ) : (
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
                          {/* <textarea
                        disabled
                        value={draftToHtml(
                          convertToRaw(editorState.getCurrentContent())
                        )}
                      /> */}
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
                            src={`https://unpad.sarafdesign.com/uploads/${Image}`}
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
      )}
    </>
  );
};

export default EditBerita;
