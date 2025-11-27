import axios from "axios";
import type { ApiResponse } from "@/types/api";
import type {
  LoginBody,
  RegisterBody,
  UpdateProfileBody,
  AuthPayload,
  User
} from "@/types/auth";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const authService = {
  /** REGISTER */
  async register(payload: RegisterBody): Promise<ApiResponse<AuthPayload>> {
    try {
      const res = await axios.post<ApiResponse<AuthPayload>>(
        `${API_URL}/auth/register`,
        payload
      );
      return res.data;
    } catch (error: any) {
      return handleAxiosError(error);
    }
  },

  /** LOGIN */
  async login(payload: LoginBody): Promise<ApiResponse<AuthPayload>> {
    try {
      const res = await axios.post<ApiResponse<AuthPayload>>(
        `${API_URL}/auth/login`,
        payload
      );
      return res.data;
    } catch (error: any) {
      return handleAxiosError(error);
    }
  },

  /** GET PROFILE (requires Bearer Token) */
  async getProfile(token: string): Promise<ApiResponse<User>> {
    try {
      const res = await axios.get<ApiResponse<User>>(
        `${API_URL}/auth/profile`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data;
    } catch (error: any) {
      return handleAxiosError(error);
    }
  },

  /** UPDATE PROFILE */
  async updateProfile(
    token: string,
    payload: UpdateProfileBody
  ): Promise<ApiResponse<User>> {
    try {
      const res = await axios.put<ApiResponse<User>>(
        `${API_URL}/auth/profile`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data;
    } catch (error: any) {
      return handleAxiosError(error);
    }
  }
};

/** UNIVERSAL ERROR HANDLER */
function handleAxiosError(error: any): ApiResponse<any> {
  if (axios.isAxiosError(error) && error.response) {
    return error.response.data as ApiResponse<any>;
  }

  return {
    success: false,
    message: "Something went wrong",
    errors: ["Unexpected error"]
  };
}
