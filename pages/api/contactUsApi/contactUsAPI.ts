import Axios from 'axios'
import { ContactUsProps } from '../../../types/types';
import { URL } from '../url';

const ContactUsAPI = ({email, name, text}: ContactUsProps) =>
  Axios.post(`${URL}contactUs`, { email, name, text })
  .then((response: any) => {
    console.log(response.data);
    return response.data;
  });
 
  export default ContactUsAPI 