import React, { Component } from "react";
import axios from "axios";
import HeroVideo from "../components/Hero/HeroVideo";
import Hero from "../components/Hero/Hero";
import Aside from "../components/Aside/Aside";
import "../App.scss";

class HomePage extends Component {
  state = {
    currentPage: [],
    videoNav: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/videos").then((response) => {
      console.log(response.data);
      this.setState({
        currentPage: response.data[0],
      });

      return this.state.currentPage.id;
    });

    axios.get("http://localhost:8080/videoList").then((response) => {
      this.setState({
        videoNav: response.data,
      });

      return this.state.videoNav.id;
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const newVideoId = this.props.match.params.videoID;

    const firstVideoId = this.state.currentPage.id;

    if (newVideoId !== prevProps.match.params.videoID) {
      const videoToLoadId =
        newVideoId !== undefined ? newVideoId : firstVideoId;
      axios
        .get(`http://localhost:8080/videos/${videoToLoadId}`)
        .then((response) => {
          this.setState({
            currentPage: response.data,
          });
          return this.state.currentPage.id;
        });
    }
  }

  render() {
    const filteredVideo = this.state.videoNav.filter(
      (page) => page.id !== this.state.currentPage.id
    );
    return (
      <>
        <HeroVideo data={this.state.currentPage} />
        <div className="app-section ">
          <Hero data={this.state.currentPage} />
          <Aside VideoNavData={filteredVideo} />
        </div>
      </>
    );
  }
}

export default HomePage;
