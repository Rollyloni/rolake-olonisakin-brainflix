import Aside from "./components/Aside/Aside";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
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
        <section className="hero-section">
          <video
            width="108%"
            height="40%"
            controls
            poster={this.state.currentPage.image}
          >
            <source src={this.state.currentPage.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="app-section">
          <Hero
            pageInfo={this.state.currentPage}
            className="app-section__hero"
          />
          <Aside selectedPage={heroPage} onCardClick={this.handleCardSelect} />
        </section>
      </div>
    );
  }
}

export default App;
