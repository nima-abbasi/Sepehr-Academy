import { createSlice} from "@reduxjs/toolkit";
import { singUp } from "./actions/sing-up.action";
import { login } from "./actions/login.action";
import { logout } from "./actions/logout.action";

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}

export const nextLocalStorage = (): Storage | void => {
  if (isBrowser()) {
    return window.localStorage
  }
}

const user = JSON.parse(nextLocalStorage()?.getItem("user") ||'""')

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null } ;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{},
  extraReducers: (builder) =>{
    builder.addCase(singUp.fulfilled, (state) => {
      state.isLoggedIn = false;
    })
    builder.addCase(singUp.rejected, (state) => {
      state.isLoggedIn = false;
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    })
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
     state.user = null;
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.user = null;
    })
  }
  
});

const { reducer } = authSlice;
export default reducer;