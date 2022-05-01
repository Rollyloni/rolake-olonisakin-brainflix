import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import VideoUploadPage from "./Pages/VideoUploadPage";
import React from "react";
import "./styles/partials/_global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/videos/:videoId" exact component={HomePage} />
        <Route path="/upload" exact component={VideoUploadPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
