import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import "./admin.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useAlert } from "react-alert";

import Sidebar from "./components/Admin/Sidebar";
import Navbar_admin from "./components/Admin/Navbar_admin";
import Dashboard from "./components/Admin/Dashboard";
import CardEvents from "./components/Admin/Cards/CardEvents";
import AdminBerita from "./components/Admin/AdminBerita";
import AdminCategory from "./components/Admin/AdminCategory";
import AddBerita from "./components/Admin/Forms/AddBerita";
import AddCategory from "./components/Admin/Forms/AddCategory";
import EditCategory from "./components/Admin/Forms/EditCategory";
import AdminAnggota from "./components/Admin/AdminAnggota";
import AddAnggota from "./components/Admin/Forms/AddAnggota";
import EditAnggota from "./components/Admin/Forms/EditAnggota";
import AdminUnverified from "./components/Admin/AdminUnverified";
import AdminEvent from "./components/Admin/AdminEvent";
import AddEvent from "./components/Admin/Forms/AddEvent";
import EditEvent from "./components/Admin/Forms/EditEvent";

const StyledAdmin = styled.div`
  font-family: "Nunito";
`;

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const alert = useAlert();

  let history = useHistory();

  useEffect(() => {
    // setLoading(true);
    axios
      .get("https://unpad.sarafdesign.com/checkUser", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // history.push("/admin");
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.status === 401) {
          history.push("/login");
          // setTimeout(() => {
          //   history.push("/login");
          // }, 1000);
          alert.show("Anda belum login");
          // console.log(error);
        }
        // alert.show("Anda belum login");
        // console.log(err);
      });
  }, []);

  return (
    <>
      <StyledAdmin>
        <Sidebar />
        <div className="relative md:ml-64">
          <Navbar_admin />
          <Dashboard />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route path="/admin/dashboard">
                {/* <Dashboard /> */}
              </Route>
              <Route path="/admin/berita">
                <AdminBerita />
              </Route>
              <Route path="/admin/addberita">
                <AddBerita />
              </Route>
              <Route path="/admin/category">
                <AdminCategory />
              </Route>
              <Route path="/admin/addcategory">
                <AddCategory />
              </Route>
              <Route path="/admin/editcategory/:id">
                <EditCategory />
              </Route>
              <Route path="/admin/anggota">
                <AdminAnggota />
              </Route>
              <Route path="/admin/addanggota">
                <AddAnggota />
              </Route>
              <Route path="/admin/editanggota/:id">
                <EditAnggota />
              </Route>
              <Route path="/admin/verification">
                <AdminUnverified />
              </Route>
              <Route path="/admin/events">
                <AdminEvent />
              </Route>
              <Route path="/admin/addevent">
                <AddEvent />
              </Route>
              <Route path="/admin/editevent/:id">
                <EditEvent />
              </Route>
            </Switch>
          </div>
        </div>
      </StyledAdmin>
    </>
  );
};

export default Admin;
