import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Landing from "./Page/Landing";
import Footer from "./Page/layout/Footer";
import Navbar from "./Page/layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
