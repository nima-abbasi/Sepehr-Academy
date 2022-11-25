import React from "react";
import AddCourse from "./Addcourse";
import { CourseListProps } from "../../types/types";
//
const CourseList: React.FunctionComponent<CourseListProps> = ({
  courseList,
}) => {
  const date = Date.now().toString();

  return (
    <React.Fragment>
      {courseList.map((el) => {
        return (
          <AddCourse
            description={el.lesson.description}
            cost={el.cost}
            id={el._id}
            title={el.title}
            key={el._id}
          />
        );
      })}
    </React.Fragment>
  );
};

export default React.memo(CourseList);
