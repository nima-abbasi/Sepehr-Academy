import React from "react";
import AddCourse from "./Addcourse";
import { CourseListProps } from "../../types/types";

const CourseList: React.FunctionComponent<CourseListProps> = ({
  courseList,
}) => {
  const date = Date.now().toString();
  console.log(courseList);

  return (
    <React.Fragment>
      {courseList.map((el) => {
        return (
          <AddCourse
            description={el.lesson.description}
            cost={el.cost}
            id={el._id}
            title={el.title}
            key={date}
          />
        );
      })}
    </React.Fragment>
  );
};

export default CourseList;
