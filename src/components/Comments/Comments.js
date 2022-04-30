import React from "react";
import avatar from "../assets/Images/pngkey.com-ega-png-2332677.png";
import "../Comments/Comments.scss";

const Comments = (props) => {
  const commentArray = props.comments;

  return (
    <div>
      {commentArray ? (
        commentArray.map((comment, index) => {
          return (
            <section key={index} className="comment-section__container">
              <img
                src={avatar}
                alt="comment avatar"
                className="comment-section__avatar"
              ></img>
              <div className="comment-section__div">
                <p className="comment-section__name">{comment.name}</p>
                <p className="comment-section__date">
                  {new Date(comment.timestamp).toLocaleDateString("en-US")}
                </p>
              </div>
              <p className="comment-section__text">{comment.comment} </p>
            </section>
          );
        })
      ) : (
        <p>Page Loading...</p>
      )}
    </div>
  );
};

export default Comments;
