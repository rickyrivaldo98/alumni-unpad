import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import DetailBerita from "./Page/DetailBerita";
import GalleryPhoto from "./Page/Gallery";
import Landing from "./Page/Landing";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/gallery">
          <GalleryPhoto />
        </Route>
        <Route path="/detail-berita">
          <DetailBerita />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
};

export default App;
