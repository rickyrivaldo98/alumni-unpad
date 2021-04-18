import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Landing from "./Page/Landing";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
};

export default App;
