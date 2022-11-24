import Axios from 'axios'
import { URL } from '../url';

const AllCoursesAPI = () =>
  Axios.get(`${URL}course/getall`)

export default AllCoursesAPI