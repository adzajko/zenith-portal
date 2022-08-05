import axios, { AxiosError, AxiosRequestConfig } from "axios";

interface CustomAxiosRequest extends AxiosRequestConfig {
  retry?: boolean;
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

instance.interceptors.request.use((requestConfig) => {
  /**
   * Insert your custom logic for intercepting requests (such as adding headers) here.
   * * */
  return requestConfig;
});

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: CustomAxiosRequest = error.config;
    /**
     * Insert your custom logic for intercepting responses here.
     * * */
    return originalRequest;
  }
);

export default instance;
