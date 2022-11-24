import Axios from "axios";

import { URL } from "../../url";
import { Auth } from "../../Auth";

export const AddStudentToCourse = (
  user_id: string | null,
  course_id: string | undefined
) =>
  Axios.post(
    `${URL}course/addStudentToCourse/${user_id}`,
    { courseId: course_id },
    { headers: { "x-auth-token": Auth() } }
  );
