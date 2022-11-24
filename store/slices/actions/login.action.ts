import {createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message";
import authService from "../../../pages/api/authUser.service";
import { LoginInfo } from "../../../types/types"; 

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password}: LoginInfo, thunkAPI) => {
    try {
      const data = await authService.loginAPI({email, password});
      return { user: data };
    } catch (error:any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
