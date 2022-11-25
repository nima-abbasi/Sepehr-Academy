import { useEffect, useState } from "react";
import AllCoursesAPI from "./api/AllCoursesAPI/AllcoursesAPI";
import { DetailsProps, IAllCoursesProps } from "../types/types";
import CourseList from "../component/Allcourses/CoursesList";

const courseStyle = {
  marginTop: "50px",
  hight: "700px",
  width: "700px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gap: "30px",
  justifyContent: "center",
  alignItems: "center",
};

export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};

export const nextLocalStorage = (): Storage | void => {
  if (isBrowser()) {
    return window.localStorage;
  }
};
const AllCoursesDisplay = ({ courses }: IAllCoursesProps) => {
  const [course, setCourse] = useState<DetailsProps[]>([]);
  useEffect(() => {
    AllCoursesAPI().then((response: any) => {
      const register = response.data.result;
      setCourse(register);      
      return response.data;
    });
  }, []);

  useEffect(() => {
    if (typeof courses != "undefined" && courses.length > 0) {
      setCourse(courses);
    } else {
      course;
    }
  }, [courses]);

  return (
    <div id="courses" className="container" style={courseStyle}>
      <CourseList courseList={course} />
    </div>
  );
};

export default AllCoursesDisplay;
