//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import RegisterForm from "../components/register/register"
import "bootstrap/dist/css/bootstrap.min.css"
import ResetPassWordForm from "../components/login/resetPassword/resetPassword"
import LoginForm from "../components/login/login/login"
import AllCoursesDisplay from "../components/Allcourses/AllcoursesDisplay"
import ContactUsForm from "../components/Footer/contactUs"

export default function Home() {
  return (
    <div className="container">
    <LoginForm/>
    </div>
  )
}
