import Axios from 'axios'
import { URL } from '../url';

const LikeCountAPI = (courseId: string) =>
  Axios.get(`${URL}course/likeCount/${courseId}`)
  .then((response: any) => {
    return response.data;
  });
 
  export default LikeCountAPI