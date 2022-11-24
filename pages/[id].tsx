import { GetStaticPaths, GetStaticProps } from "next";
import { Container, Row, Col } from "react-bootstrap";
import AddToCourse from "../component/addStudent/AddToCourse";
import Survey from "../component/survey";
import styles from "../styles/Details.module.scss";
import {DetailsProps} from "../types/types";

export interface ICourse {
  capacity: number;
  cost: number;
  endDate: string;
  lesson: Object;
  startDate: string;
  students?: Array<Object>;
  teacher: Object;
  title: string;
  _id: string;
}
export interface TeacherInfo {
  email: string;
  fullName: string;
  profile: string;
  _id: string;
}
export interface StudentInfo {
  _id: string;
  email: string;
  fullName: string;
  profile: string;
}
export interface LessonInfo {
  startDate: string;
  _id: string;
  topics: string[];
  lessonName: string;
  description: string;
  image: string;
}
// export interface DetailsProps {
//   teacher: TeacherInfo;
//   students: StudentInfo;
//   lesson: LessonInfo;
//   cost: string;
//   _id: string;
//   title: string;
//   capacity: string;
//   endDate: string;
//   startDate: string;
// }
interface Props {
  Details: DetailsProps;
}
const CoursDetail = ({ Details }: Props) => {
  const result = Details;
  const lesson = Details.lesson;
  const teacher = Details.teacher;
  const id = Details._id;

  return (
    <>
      <Container className={styles.contain}>
        <Row className={styles.titleCourse} key={id}>
          <Col className={styles.firstTitle}>
            <h1 className={styles.courseName}>{result.title}</h1>
            <br></br>
            <p>{lesson.lessonName}</p>
            <p>{lesson.description}</p>
            <p>StartAt:{result.startDate}</p>
            <p>EndAt:{result.endDate}</p>
            <p>
              In This course you Learn:{lesson.topics[0]},{lesson.topics[1]},
              {lesson.topics[2]}
            </p>
            <h6>One-Time Payment</h6>
            <span>{result.cost}$</span>
            <br />
            <AddToCourse course={Details} />
          </Col>
          <Col className={styles.secondTitle}>
            <h1>{lesson.image}</h1>
          </Col>
        </Row>
      </Container>
      <Container className={styles.secondContainter}>
        <Row>
          <Col>
            <h2>Course professors</h2>
            <h4>{teacher.profile}</h4>
            <h4>{teacher.fullName}</h4>
            <p>{teacher.email}</p>
          </Col>
          <Col>
            <Survey detailId={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://querateam1.herokuapp.com/api/course/getall");
  const allCourse = await res.json();

  const paths = allCourse.result.map((item: ICourse) => ({
    params: { id: item._id },
  }));
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://querateam1.herokuapp.com/api/course/${params?.id}`
  );
  const course = await res.json();
  const Details = course.result;

  return { props: { Details } };
};

export default CoursDetail;
