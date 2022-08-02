/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import React from "react";

import classes from "./notification.module.css";

export const Notification = (props) => {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }
  if (status === "pending") {
    statusClasses = classes.pending;
  }
  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
      <div className={classes.Icon}>
        <img
          className={classes.successImage}
          src="https://mh-2-stockagency.panthermedia.net/media/media_detail/0027000000/27624000/~happy-smiley-emoticon-face_27624144_detail.jpg"
          alt=""
        ></img>
        <img
          className={classes.errorImage}
          src="https://t4.ftcdn.net/jpg/01/71/94/81/360_F_171948175_umuO3nDm0ZcZmAGJ5Cb47G4nb66EMyC7.jpg"
          alt=""
        ></img>
      </div>
    </div>,
    document.getElementById("notifications"),
  );
};
