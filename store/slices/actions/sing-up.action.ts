import {createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message";
import authService from "../../../pages/api/authUser.service";
import { UserInfo } from "../../../types/types"; 



export const singUp = createAsyncThunk(
  "auth/singUp",
  async ({ fullName, email, password, phoneNumber, birthDate, nationalId, profile }:UserInfo, thunkAPI) => {
    try {
      const response = await authService.singUpAPI({ fullName, email, password, phoneNumber, birthDate, nationalId, profile })
      thunkAPI.dispatch(setMessage(response.data.message));
      return response;
    } catch (error :any) {
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