import Aside from "./components/Aside/Aside";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import dataArray from "./components/assets/data/video-details.json";
import cardData from "./components/assets/data/videos.json";
import React, { Component } from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    currentPage: dataArray[0],
    videoNav: cardData,
  };

  componentDidMount() {
    this.handleCardSelect = (id) => {
      this.setState({
        currentPage: dataArray.find((video) => video.id === id),
      });
    };
  }

  render() {
    const heroPage = this.state.videoNav.filter(
      (page) => page.id !== this.state.currentPage.id
    );

    return (
      <div className="App">
        <BrowserRouter>
          <Header />

          <section className="app-section">
            <Switch>
              <Route
                path="/home"
                render={() => {
                  return (
                    <>
                      <Hero
                        pageInfo={this.state.currentPage}
                        className="app-section__hero"
                      />
                      <Aside
                        selectedPage={heroPage}
                        onCardClick={this.handleCardSelect}
                      />
                    </>
                  );
                }}
              />
            </Switch>
          </section>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
