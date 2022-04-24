import React from "react";
import thumbnailImg from "../components/assets/Images/Upload-video-preview.jpg";
import "./VideoUploadPage.scss";
import uploadIcon from "../components/assets/Icons/publish.svg";

const VideoUploadPage = () => {
  return (
    <div>
      <form>
        <h1 className="video__heading">Upload Video</h1>
        <p className="video__title">VIDEO THUMBNAIL</p>
        <img
          src={thumbnailImg}
          alt="Video preview"
          className="video__img"
        ></img>
        <p className="video__title">TITLE YOUR VIDEO</p>
        <input
          placeholder="Add a title to your video"
          className="video__input"
        />
        <p className="video__title">ADD A VIDEO DESCRIPTION</p>
        <textarea
          placeholder="Add a description to your video"
          className="video__textarea"
        />
        <div className="video__button--div">
          <button>
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
    </div>
  );
};

export default VideoUploadPage;
