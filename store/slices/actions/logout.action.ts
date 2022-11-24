import {createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../../pages/api/login-registrAPI/authUser.service";

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logoutAPI();
});
