import React from "react";
import { CourseProps } from "../../types/types";
import { LikeCountInfo } from "../../types/types";
import LikeCountAPI from "../../pages/api/likeCountAPI/likeAPI";
import { useEffect, useState } from "react";
import likeImg from "../../public/like.png";
import dislikeImg from "../../public/dislike.png";
import styles from "./AddCouresStyle.module.scss";
import Link from "next/link";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

const AddCourse: React.FC<CourseProps> = ({ description, cost, id, title }) => {
  const [like, setLike] = useState<LikeCountInfo>({
    like: 0,
    dislike: 0,
  });

  useEffect(() => {
    LikeCountAPI(id).then((res) => {
      setLike(res.result);
    });
  }, []);

  return (
    <Link href={`/${id}`}>
      <div className={styles.card}>
        <h1 className={styles.course} style={{ color: "white" }}>
          {title.slice(0, 2)}
        </h1>

        <div className={`card-body ${styles.body}`}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text text-muted">${cost}</p>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start">
              <AiTwotoneLike />
              <span>{like.like}</span>
            </div>
            <div className="d-flex justify-content-start">
              <AiTwotoneDislike />
              <span>{like.dislike}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AddCourse;
