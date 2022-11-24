import Axios from 'axios'
import { ForgetPasswordProps } from '../../../types/types';
import { URL } from '../url';

const ForgetPasswordAPI = ({email}: ForgetPasswordProps) =>
  Axios.post(`${URL}forgetpassword`, { email})
  .then((response: any) => {
    console.log(response.data);
    return response.data;
  });
 
  export default ForgetPasswordAPI
