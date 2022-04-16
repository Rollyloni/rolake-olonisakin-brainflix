import React from "react";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import "../Comments/Comments.scss";
import commentIcon from "../assets/Icons/add_comment.svg";

const Comments = (props) => {
  const commentArray = props.comments.map((comment, index) => {
    return (
      <section key={index} className="comment-section__container">
        <img
          src={avatar}
          alt="comment avatar"
          className="comment-section__avatar"
        ></img>
        <div className="comment-section__div">
          <p className="comment-section__name">{comment.name}</p>
          <p className="comment-section__date">{comment.timestamp} </p>
        </div>
        <p className="comment-section__text">{comment.comment} </p>
      </section>
    );
  });

  return (
    <div>
      <p>3 Comments</p>
      <form className="form__name">
        <p className="comment-section__header">JOIN THE CONVERSATION</p>
        <img
          className="comment-section__avatar top"
          src={avatar}
          alt="avatar"
        />
        <textarea
          className="form__textarea"
          type="text"
          placeholder="Add a new comment"
          name="comment"
          id="comment"
        ></textarea>

        <button className="form__button">
          COMMENT
          <img
            className="form__icon"
            src={commentIcon}
            alt="comment Icon"
          ></img>
        </button>
      </form>
      {commentArray}
    </div>
  );
};

export default Comments;
