import {api} from './axios'
import type { ApiResponse } from "@/types/api";
import type {
  CartResponse,
  AddToCartBody,
  UpdateCartBody
} from "@/types/cart";

export const cartService = {
  /** GET CART */
  async getCart(): Promise<ApiResponse<CartResponse>> {
    try {
      const res = await api.get<ApiResponse<CartResponse>>(`/cart`);
      return res.data;
    } catch (error: any) {
      return handleAxiosError(error);
    }
  },

  /** ADD ITEM */
  async addItem(payload: AddToCartBody): Promise<ApiResponse<any>> {
    try {
      const res = await api.post<ApiResponse<any>>(`/cart`, payload);
      return res.data;
    } catch (error: any) {
      return handleAxiosError(error);
    }
  },

  /** UPDATE ITEM QUANTITY */
  async updateItem(id: number, payload: UpdateCartBody): Promise<ApiResponse<any>> {
    try {
      const res = await api.put<ApiResponse<any>>(`/cart/${id}`, payload);
      return res.data;
    } catch (error: any) {
      return handleAxiosError(error);
    }
  },

  /** REMOVE ONE ITEM */
  async deleteItem(id: number): Promise<ApiResponse<any>> {
    try {
      const res = await api.delete<ApiResponse<any>>(`/cart/${id}`);
      return res.data;
    } catch (error: any) {
      return handleAxiosError(error);
    }
  },

  /** CLEAR ENTIRE CART */
  async clearCart(): Promise<ApiResponse<any>> {
    try {
      const res = await api.delete<ApiResponse<any>>(`/cart`);
      return res.data;
    } catch (error: any) {
      return handleAxiosError(error);
    }
  }
};

/** UNIVERSAL ERROR HANDLER */
function handleAxiosError(error: any): ApiResponse<any> {
  if (error.response) {
    return error.response.data;
  }

  return {
    success: false,
    message: "Something went wrong",
    errors: ["Unexpected error"]
  };
}
