import {createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../pages/api/authUser.service";


export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logoutAPI();
});
