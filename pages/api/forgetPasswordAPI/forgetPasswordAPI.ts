import Axios from 'axios'
import { ForgetPasswordProps } from '../../../types/types';
const API_URL = "http://querateam1.herokuapp.com/api/";


const ForgetPasswordAPI = ({email}: ForgetPasswordProps) =>
  Axios.post(API_URL + 'forgetpassword', { email})
  .then((response: any) => {
    const register = response.data.result
    console.log(response.data);
    //localStorage.setItem("", JSON.stringify(register));
    return response.data;
  });
 
  export default ForgetPasswordAPI
