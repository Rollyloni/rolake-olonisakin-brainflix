import React from "react";
import thumbnailImg from "../components/assets/Images/Upload-video-preview.jpg";
import "./VideoUploadPage.scss";
import uploadIcon from "../components/assets/Icons/publish.svg";

const VideoUploadPage = () => {
  return (
    <form>
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
          />
          <span className="video__title">ADD A VIDEO DESCRIPTION</span>
          <textarea
            placeholder="Add a description to your video"
            className="video__textarea"
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
