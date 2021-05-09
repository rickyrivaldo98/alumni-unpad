import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import About from "./Page/About";
import Anggota from "./Page/Anggota";
import Berita from "./Page/Berita";
import DetailBerita from "./Page/DetailBerita";
import GalleryPhoto from "./Page/DetailGallery";
import Landing from "./Page/Landing";
import Admin from "./Page/Admin";
import Login from "./Page/auth/Login";
import Footer from "./Page/layout/Footer";
import Navbar from "./Page/layout/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Events from "./Page/Events";
import Gallery from "./Page/Gallery";
import SimpleReactLightbox from "simple-react-lightbox";
import DetailEvents from "./Page/DetailEvents";
import PublicRoute from "./Page/utils/PublicRoute";
import PrivateRoute from "./Page/utils/PrivateRoute";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin} />

        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/detail-gallery/:galleryname">
          <SimpleReactLightbox>
            <GalleryPhoto />
          </SimpleReactLightbox>
        </Route>
        <Route path="/detail-berita/:slugberita">
          <DetailBerita />
        </Route>
        <Route path="/berita">
          <Berita />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/detail-events/:id">
          <DetailEvents />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/anggota">
          <Anggota />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
};

export default App;
