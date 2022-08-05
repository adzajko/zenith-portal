import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface WebsocketState {
  connectionPending: boolean;
  connectionEstablished: boolean;
  socketError: unknown | Error | null;
  socketMessage?: unknown;
}

const initialState: WebsocketState = {
  connectionEstablished: false,
  connectionPending: false,
  socketError: null
};

const webSocketSlice = createSlice({
  name: "Websockets",
  initialState,
  reducers: {
    attemptConnection: (state) => {
      state.connectionEstablished = false;
      state.connectionPending = true;
      state.socketError = null;
    },
    establishConnection: (state) => {
      state.connectionEstablished = true;
      state.connectionPending = false;
      state.socketError = null;
    },

    setSocketError: (state, { payload }: PayloadAction<Error | unknown>) => {
      state.connectionEstablished = false;
      state.connectionPending = false;
      state.socketError = payload;
    },

    terminateConnection: (state) => {
      state.connectionEstablished = false;
      state.socketError = null;
      state.connectionPending = false;
    },

    broadcastSocketMessage: (state, { payload }: PayloadAction<unknown>) => {
      state.socketMessage = payload;
    }
  }
});

export const {
  attemptConnection,
  establishConnection,
  setSocketError,
  terminateConnection,
  broadcastSocketMessage
} = webSocketSlice.actions;

export const selectActiveConnectionStatus = ({ websocket }: RootState) =>
  websocket.connectionEstablished;

export const selectConnectionAttemptStatus = ({ websocket }: RootState) =>
  websocket.connectionPending;

export const selectSocketError = ({ websocket }: RootState) => websocket.socketError;

export default webSocketSlice.reducer;
