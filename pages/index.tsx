
import RegisterForm from "../component/register/register"
import "bootstrap/dist/css/bootstrap.min.css"
import ResetPassWordForm from "../component/login/resetPassword/resetPassword"
import LoginForm from "../component/login/login/login"
import AllCoursesDisplay from "../component/Allcourses/AllcoursesDisplay"
import ContactUsForm from "../component/Footer/contactUs"

export default function Home() {
  return (
    <>
      <div className="container">
      <LoginForm/>
    </div>
    </>
    
  )
}
