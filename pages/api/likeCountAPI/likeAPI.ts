import Axios from 'axios'
const API_URL = "http://querateam1.herokuapp.com/api/";


const LikeCountAPI = (courseId: string) =>
  Axios.get(API_URL + `course/likeCount/${courseId}`)
  .then((response: any) => {
    const register = response.data.result
    console.log(response.data);
    //localStorage.setItem("", JSON.stringify(register));
    return response.data;
  });
 
  export default LikeCountAPI