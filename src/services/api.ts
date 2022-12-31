import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export interface ApiResponse {
  status: number;
  message?: string[];
}

export function apiErrorParser(
  error: any,
  genericErrorMessage: string
): ApiResponse {
  if (error?.response) {
    const { data, status } = error.response;

    return {
      status: status,
      message: typeof data.message === "string" ? [data.message] : data.message,
    };
  }

  return { status: 500, message: [genericErrorMessage] };
}
