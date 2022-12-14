import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import websocketReducer from "../features/websockets/wsocketSlice";
import { socketMiddleware } from "../features/websockets/wsMiddleware";
import themeReducer from "../ui/theming/themingSlice";
import { errorMiddleware } from "./middleware/errorMiddleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    websocket: websocketReducer,
    theme: themeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([socketMiddleware, errorMiddleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
