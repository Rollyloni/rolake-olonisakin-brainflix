import React from "react";
import thumbnailImg from "../components/assets/Images/Upload-video-preview.jpg";
import "./VideoUploadPage.scss";
import uploadIcon from "../components/assets/Icons/publish.svg";
import axios from "axios";

const VideoUploadPage = () => {
  function handleSubmit(event) {
    event.preventDefault();

    const videoObj = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    console.log(videoObj);

    axios.post("http://localhost:8080/videos", videoObj);
    event.target.reset();
  }
  // const videoObj = (event) => (
  //   event.preventDefault()
  //   (
  // //     {
  // //   title: event.target.title.value,
  // //   description: event.target.description.value,
  // // }
  // );
  // const sendVideo = axios.post("http://localhost:8080/videos", videoObj);

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="video__heading">Upload Video</h1>
      <div className="video__div">
        <div>
          <p className="video__title">VIDEO THUMBNAIL</p>
          <img
            src={thumbnailImg}
            alt="Video preview"
            className="video__img"
          ></img>
        </div>
        <div className="test">
          <span className="video__title">TITLE YOUR VIDEO</span>
          <input
            placeholder="Add a title to your video"
            className="video__input"
            name="title"
          />
          <span className="video__title">ADD A VIDEO DESCRIPTION</span>
          <textarea
            placeholder="Add a description to your video"
            className="video__textarea"
            name="description"
          />
        </div>
      </div>
      <div className="video__button--div">
        <button className="publish__button">
          <img
            className="header-section__button--logo"
            src={uploadIcon}
            alt="upload icon"
          ></img>
          PUBLISH
        </button>
        <p className="cancel__button">CANCEL</p>
      </div>
    </form>
  );
};

export default VideoUploadPage;
