import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import styles from "./survey.module.scss";

const Survey = (detailId: any) => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    axios
      .post("http://querateam1.herokuapp.com/api/course/like", {
        courseId: "detailI.detailId",
        userId: "637b7e5d40cd5300231b3cca",
      })
      .then((response) => {
        console.log(response.data);
      });

    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };
  ///
  const handleDisikeClick = () => {
    axios
      .post("http://querateam1.herokuapp.com/api/course/dislike", {
        courseId: "detailI.detailId",
        userId: "637b7e5d40cd5300231b3cca",
      })
      .then((response) => {
        console.log(response.data);
      });
    http: if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };

  return (
    <>
      <div className={styles.btnContainer}>
        <button
          className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
          onClick={handleLikeClick}
        >
          <span className="material-symbols-rounded">
            {" "}
            <AiTwotoneLike />
          </span>
          Like
        </button>

        <button
          className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
          onClick={handleDisikeClick}
        >
          <span className="material-symbols-rounded">
            <AiTwotoneDislike />
          </span>
          Dislike
        </button>
      </div>
    </>
  );
};

export default Survey;
