import React from "react";
import commentIcon from "../assets/Icons/add_comment.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";

const Form = (props) => {
  return (
    <div>
      {props.comments ? (
        <div>
          <p className="comment-section__count">
            {props.comments.length ? props.comments.length : null} Comments
          </p>
          <form className="form__name">
            <p className="comment-section__header">JOIN THE CONVERSATION</p>
            <div className="comment-section__styling">
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
            </div>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Form;
