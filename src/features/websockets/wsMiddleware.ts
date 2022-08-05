import { Middleware } from "@reduxjs/toolkit";
import {
  attemptConnection,
  broadcastSocketMessage,
  establishConnection,
  setSocketError,
  terminateConnection
} from "./wsocketSlice";

export const socketMiddleware: Middleware = (store) => {
  let socket: WebSocket;

  return (next) => (action) => {
    const { dispatch } = store;
    if (attemptConnection.match(action)) {
      socket = new WebSocket(process.env.REACT_APP_SOCKET_LOCATION);

      socket.onopen = () => {
        dispatch(establishConnection());
      };

      socket.onerror = (error) => {
        dispatch(setSocketError(error));
      };

      socket.onmessage = (message) => {
        const parsedMessage = JSON.parse(message.data);
        dispatch(broadcastSocketMessage(parsedMessage));
      };
      socket.onclose = () => {
        dispatch(terminateConnection());
      };
    }

    next(action);
  };
};
