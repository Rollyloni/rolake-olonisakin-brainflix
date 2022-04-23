import React from "react";
import thumbnailImg from "../components/assets/Images/Upload-video-preview.jpg";

const VideoUploadPage = () => {
  return (
    <div>
      <form>
        <h1>Upload Video</h1>
        <p>VIDEO THUMBNAIL</p>
        <img src={thumbnailImg} alt="Video preview"></img>
        <p>TITLE YOUR VIDEO</p>
        <input />
        <p>ADD A VIDEO DESCRIPTION</p>
        <textarea />
        <button>PUBLISH</button>
        <p>CANCEL</p>
      </form>
    </div>
  );
};

export default VideoUploadPage;
