import React, { useEffect, useState } from "react";

import styles from "./Enrollment.module.scss";

import { IAddProps, StudentInfo } from "../../../types/types";
import { AddStudentToCourse } from "../../../pages/api/services/addStudent";

const Enrollment = ({ course }: IAddProps): JSX.Element => {
  const [registered, setRegistered] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userID = user?.student._id;

  const courseID: string | undefined = course?._id;

  useEffect(
    () =>
      setRegistered(
        course?.students.some((student: StudentInfo) => student._id === userID)
      ),
    []
  );
  const enroll = async () => {
    try {
      await AddStudentToCourse(userID, courseID).then(
        (response) => setMessage(response.data.message[0].message),
        (error) => console.log(error)
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.enrollment}>
      <p className={styles.enrollment__message}>{message}</p>
      <div>
        Course title :{" "}
        <span className={styles.enrollment__text}>{course.title}</span>
      </div>
      <div>
        Cost :<span className={styles.enrollment__text}>{course.cost}</span>
      </div>
      <button
        onClick={enroll}
        className={styles.enrollment__button}
        disabled={registered && true}
      >
        {registered ? "You have already enrolled!" : "Enroll"}
      </button>
    </div>
  );
};
export default React.memo(Enrollment);
