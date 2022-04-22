import React from "react";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import "../Comments/Comments.scss";

const Comments = (props) => {
  const commentArray = props.comments;

  return (
    <div>
      {commentArray
        ? commentArray.map((comment) => {
            return (
              <section key={comment.id} className="comment-section__container">
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
          })
        : null}
    </div>
  );
};

export default Comments;
