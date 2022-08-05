import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import websocketReducer from "../features/websockets/wsocketSlice";
import { socketMiddleware } from "../features/websockets/wsMiddleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    websocket: websocketReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([socketMiddleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
