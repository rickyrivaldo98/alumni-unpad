import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "./components/Admin/Sidebar";
import Navbar_admin from "./components/Admin/Navbar_admin";
import Dashboard from "./components/Admin/Dashboard";

const StyledAdmin = styled.div`
  font-family: "Nunito";
`;

const Admin = () => {
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
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </div>
      </StyledAdmin>
    </>
  );
};

export default Admin;
