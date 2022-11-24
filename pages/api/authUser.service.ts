import Axios from 'axios'
import { UserInfo } from "../../types/types";
import { LoginInfo } from "../../types/types";
//import { UserName } from "../../types/types";




const singUpAPI = ({ fullName, email, password, phoneNumber, birthDate, nationalId, profile }: UserInfo) =>
  Axios.post(API_URL + 'auth/register', {
    fullName,
    email,
    password,
    phoneNumber,
    birthDate,
    nationalId,
    profile
  })
  .then((response: any) => {
    const register = response.data.result
    console.log(response.data);
    localStorage.setItem("registeringInfo", JSON.stringify(register));
    return response.data;
  });
 

 const loginAPI = ({ email, password }: LoginInfo) =>{
  Axios.post(API_URL +'auth/login', {
    email,
    password,
  })
  .then((response: any) => {
    console.log(response)
    if (response.data) {
      let token= response.data.result.jwtToken
      let student=response.data.result.studentModel
      localStorage.setItem("user", JSON.stringify({token, student}));
      
    }
    return response.data;
  });
 }
  
const logoutAPI = () => {
  localStorage.removeItem("user");
};

const authService = {
  singUpAPI ,
  loginAPI,
  logoutAPI,
};

export default authService;