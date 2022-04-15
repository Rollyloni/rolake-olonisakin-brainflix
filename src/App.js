import Aside from "./components/Aside";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import dataArray from "./components/assets/data/video-details.json";
import cardData from "./components/assets/data/videos.json";

import React, { Component } from "react";

class App extends Component {
  state = {
    currentPage: dataArray[0],
    videoNav: cardData,
  };

  handleCardSelect = (id) => {
    this.setState({
      currentPage: dataArray.find((video) => video.id === id),
    });
  };
  render() {
    const heroPage = this.state.videoNav.filter(
      (page) => page.id !== this.state.currentPage.id
    );

    return (
      <div className="App">
        <Header />
        <Hero pageInfo={this.state.currentPage} />
        <Aside selectedPage={heroPage} onCardClick={this.handleCardSelect} />
      </div>
    );
  }
}

export default App;
