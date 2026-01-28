import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { ApiResponse } from '../types/api.types';

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_V1_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Optional: global error handling
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const api = {
    get: <T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> =>
        apiClient
            .get<ApiResponse<T>>(url, config)
            .then((res: AxiosResponse<ApiResponse<T>>) => res.data),

    post: <T, B = unknown>(
        url: string,
        body?: B,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> =>
        apiClient
            .post<ApiResponse<T>>(url, body, config)
            .then((res) => res.data),

    put: <T, B = unknown>(
        url: string,
        body?: B,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> =>
        apiClient
            .put<ApiResponse<T>>(url, body, config)
            .then((res) => res.data),

    delete: <T>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<ApiResponse<T>> =>
        apiClient
            .delete<ApiResponse<T>>(url, config)
            .then((res) => res.data),
};

export default apiClient;