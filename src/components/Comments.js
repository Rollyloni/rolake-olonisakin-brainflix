import React from "react";
import dataArray from "./assets/data/video-details.json";
import avatar from "./assets/Images/Mohan-muruge.jpg";

const Comments = () => {
  const commentArray = dataArray[0].comments.map((comment, index) => {
    return (
      <section key={index}>
        <div>
          <img src={avatar} alt="comment avatar"></img>
          <p>{comment.name}</p>
          <p>{comment.timestamp} </p>
        </div>
        <p>{comment.comment} </p>
      </section>
    );
  });

  return (
    <div>
      <form className="form__name">
        <p className="comment-section__header">Join the Conversation</p>
        <img
          className="comment-section__avatar"
          src="./assets/images/mohan-muruge.jpg"
          alt="avatar"
        />

        <label
          className="form__comment"
          name="comment"
          id="comment"
          htmlFor="comment"
        ></label>
        <textarea
          className="form__textarea"
          type="text"
          placeholder="Add a new comment"
          name="comment"
          id="comment"
        ></textarea>

        <button className="form__button">COMMENT</button>
      </form>
      {commentArray}
    </div>
  );
};

export default Comments;
