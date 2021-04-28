import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Berita from "./Page/Berita";
import DetailBerita from "./Page/DetailBerita";
import GalleryPhoto from "./Page/Gallery";
import Landing from "./Page/Landing";
import Admin from "./Page/Admin";
import Footer from "./Page/layout/Footer";
import Navbar from "./Page/layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/gallery">
          <GalleryPhoto />
        </Route>
        <Route path="/detail-berita">
          <DetailBerita />
        </Route>
        <Route path="/berita">
          <Berita />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
