import Axios from 'axios'
import { ContactUsProps } from '../../../types/types';
const API_URL = "http://querateam1.herokuapp.com/api/";


const ContactUsAPI = ({email, name, text}: ContactUsProps) =>
  Axios.post(API_URL + `contactUs`, { email, name, text })
  .then((response: any) => {
    console.log(response.data);
    //localStorage.setItem("", JSON.stringify(register));
    return response.data;
  });
 
  export default ContactUsAPI 