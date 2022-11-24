import { useEffect, useState } from "react"
import AllCoursesAPI from "../../pages/api/AllCoursesAPI/AllcoursesAPI"
import { CourseProps, CourseListInfo, CourseListProps } from "../../types/types"
import CourseList from "./CoursesList"

const courseStyle ={
  marginTop: "50px",
  hight: "700px",
  width: "700px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gap:"30px",
  justifyContent:"center",
  alignItems: "center"

}

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}

export const nextLocalStorage = (): Storage | void => {
  if (isBrowser()) {
    return window.localStorage
  }
}
const AllCoursesDisplay = () => {

const [course, setCourse] = useState<CourseListInfo[]>([])


AllCoursesAPI()
.then((response: any) => {
  const register = response.data.result
  console.log(response.data);
  localStorage.setItem("allCourses", JSON.stringify(register));
  return response.data;
});





useEffect(() => {
const data = JSON.parse(nextLocalStorage()?.getItem("allCourses") ||'""')
 setCourse(data)
}, []
)

  return (
    <div className="container" style={courseStyle}>
      <CourseList
        courseList={course}
      />
    </div>
  )
}

export default AllCoursesDisplay