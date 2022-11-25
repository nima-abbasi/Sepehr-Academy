import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import styles from "./Survey.module.scss";

interface Props {
  detailId: string;
}

const Survey = (detailId: Props) => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [activeBtn, setActiveBtn] = useState("none");
  // const user = JSON.parse(localStorage.getItem("user") || "{}");
  // const userID = user?.student.id;
  const detail = detailId;

  const handleLikeClick = () => {
    axios
      .post("http://querateam1.herokuapp.com/api/course/like", {
        courseId: detail.detailId,
        userId: "628284559a4090194c4c94bb",
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
        courseId: detail.detailId,
        userId: "628284559a4090194c4c94bb",
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
      {/* <div className={""}>
        <button className={styles.likeActive} onClick={handleLikeClick}>
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
      </div> */}
      <div className="btn_container">
        <button
          className={`btn_like_deslike ${
            activeBtn === "like" ? "like_active" : ""
          }`}
          onClick={handleLikeClick}
        >
          <span>
            {" "}
            <AiTwotoneLike />
          </span>
          Like
        </button>

        <button
          className={`btn_like_deslike ${
            activeBtn === "dislike" ? "dislike_active" : ""
          }`}
          onClick={handleDisikeClick}
        >
          <span>
            {" "}
            <AiTwotoneDislike />
          </span>
          Dislike
        </button>
      </div>
    </>
  );
};

export default Survey;
