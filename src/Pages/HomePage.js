import React, { Component } from "react";
import axios from "axios";
import HeroVideo from "../components/Hero/HeroVideo";
import Hero from "../components/Hero/Hero";
import Aside from "../components/Aside/Aside";

class HomePage extends Component {
  state = {
    currentPage: [],
    videoNav: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=b24f35ee-ae2e-4b80-bfb0-6b4836edbf96"
      )
      .then((response) => {
        this.setState({
          currentPage: response.data,
        });

        return this.state.currentPage.id;
      });

    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=b24f35ee-ae2e-4b80-bfb0-6b4836edbf96"
      )
      .then((response) => {
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
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoToLoadId}?api_key=b24f35ee-ae2e-4b80-bfb0-6b4836edbf96`
        )
        .then((response) => {
          this.setState({
            currentPage: response.data,
          });
          return this.state.currentPage.id;
        });
    }
  }

  render() {
    return (
      <div>
        <HeroVideo data={this.state.currentPage} />
        <Hero data={this.state.currentPage} />
        <Aside VideoNavData={this.state.videoNav} />
      </div>
    );
  }
}

export default HomePage;
