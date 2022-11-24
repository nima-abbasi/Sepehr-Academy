import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Component } from "react";

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>
const store = configureStore({reducer:rootReducer})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch:() => AppDispatch = useDispatch



export interface UserInfo {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: string;
  nationalId:string;
  profile: string;
}

export interface LoginInfo{
  email: string;
  password: string;
}

export interface CourseInfo{
  capacity: string;
  cost:  string;
  endDate: string;
  
}

export interface TeacherInfo{
  email: string;
  fullName: string;
  profile: string;
  id: string;
}

export interface LessonInfo{
  startDate: string;
  id: string;
  topics: string[];
  lessonName: string;
  description: string;
  image:string:
}

export interface CourseProps{
  description: string;
  cost: string;
  id: string;
  title: string;
}

export interface CourseListInfo{
  teacher: TeacherInfo;
  course: CourseInfo;
  lesson: LessonInfo;
  student?:string[];
  cost: string;
  id: string;
  title: string;
}

export interface CourseListProps{
  courseList: CourseListInfo[];
}

export interface LikeProps{
  courseId: string;
}

export interface LikeCountInfo{
  like: number;
  dislike: number;
}

export interface ContactUsProps{
  email: string;
  name: string;
  text: string;
}

export interface ForgetPasswordProps{
  email: string;
}

export interface ResetPasswordProps{
  password: string;
}

export interface StudentInfo{
  id: string;
  email: string;
  fullName: string;
  profile: string;
}

export interface DetailsProps{
  teacher: TeacherInfo;
  students: StudentInfo;
  lesson: LessonInfo;
  cost: string;
  id: string;
  title: string;
  capacity: string;
  endDate: string;
  startDate: string;
}