import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import Aside from "./components/Aside/Aside";

import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/videos/:videoID" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
