import Axios from 'axios'
import { ResetPasswordProps } from '../../../types/types';
const API_URL = "http://querateam1.herokuapp.com/api/";

export const isBrowser = (): boolean => {
    return typeof window !== 'undefined'
  }
  
  export const nextLocalStorage = (): Storage | void => {
    if (isBrowser()) {
      return window.localStorage
    }
  }
  
  const user = JSON.parse(nextLocalStorage()?.getItem("user") ||'""')

  console.log(user.token)

const ResetPasswordAPI = ({ password }: ResetPasswordProps) =>
  Axios.post(API_URL + `resetPassword/${user.token}`, { password})
  .then((response: any) => {
    const register = response.data.result
    console.log(response.data);
    //localStorage.setItem("", JSON.stringify(register));
    return response.data;
  });
 
  export default ResetPasswordAPI
