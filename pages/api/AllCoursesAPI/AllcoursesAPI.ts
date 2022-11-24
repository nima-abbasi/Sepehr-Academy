import Axios from 'axios'
const API_URL = "http://querateam1.herokuapp.com/api/";

const AllCoursesAPI = () =>
  Axios.get(API_URL + 'course/getall')
 
 
  export default AllCoursesAPI