import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authslice"
import messageReducer from "./slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;