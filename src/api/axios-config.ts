import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getToken, terminateToken, TokenType } from "../utils/sessionStorage";

interface CustomAxiosRequest extends AxiosRequestConfig {
  retry?: boolean;
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

instance.interceptors.request.use((requestConfig) => {
  const token = getToken(TokenType.ACCESS);
  if (requestConfig.headers) requestConfig.headers.Authorization = `Bearer ${token}`;
  return requestConfig;
});

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: CustomAxiosRequest = error.config;
    if (
      error.response?.status === 401 &&
      originalRequest.headers &&
      !originalRequest.retry &&
      !originalRequest.url?.includes("/login") // Replace with login destination
    ) {
      originalRequest.retry = true;
      const refreshToken = getToken(TokenType.REFRESH);
      if (!refreshToken) return Promise.reject(error);

      try {
        // Replace below logic with your refresh logic
        const newToken = getToken(TokenType.ACCESS);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return instance(originalRequest);
      } catch (err) {
        terminateToken(TokenType.ACCESS);
        terminateToken(TokenType.REFRESH);
        window.location.href = "/";
        return Promise.reject(err);
      }
    } else if (error.response?.status === 401 && !error.config.url?.includes("/login")) {
      terminateToken(TokenType.ACCESS);
      terminateToken(TokenType.REFRESH);
      window.location.href = "/";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default instance;
