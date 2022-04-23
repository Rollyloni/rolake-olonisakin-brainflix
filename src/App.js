import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import VideoUploadPage from "./Pages/VideoUploadPage";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/videos/:videoID" exact component={HomePage} />
        <Route path="/upload" exact component={VideoUploadPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
