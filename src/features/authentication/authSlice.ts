import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "../../models/apiStatus";
import { RootState } from "../../store";
import { login, register } from "./authApi";

interface AuthState {
  isLoggedIn: boolean;
  status: ApiStatus;
}

const initialState: AuthState = {
  isLoggedIn: false,
  status: ApiStatus.IDLE
};

export const loginAsync = createAsyncThunk("auth/login", async () => {
  const response = await login();
  return response;
});

export const registerAsync = createAsyncThunk("auth/register", async () => {
  const response = await register();
  return response;
});

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    clearStatus: (state) => {
      state.status = ApiStatus.IDLE;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.status = ApiStatus.PENDING;
    });

    builder.addCase(loginAsync.fulfilled, (state, { payload }) => {
      state.isLoggedIn = payload;
      state.status = ApiStatus.IDLE;
    });

    builder.addCase(loginAsync.rejected, (state) => {
      state.status = ApiStatus.FAILED;
    });
  }
});

export const { clearStatus, setLoggedIn } = authSlice.actions;

export const selectLoggedIn = ({ auth }: RootState) => auth.isLoggedIn;
export const selectAuthStatus = ({ auth }: RootState) => auth.status;

export default authSlice.reducer;
