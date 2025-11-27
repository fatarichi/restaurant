import { api } from "./axios";
import type {
  CheckoutRequest,
  CheckoutResponse,
  OrderFilters,
  OrdersResponse,
  UpdateOrderStatusRequest,
  UpdateOrderStatusResponse,
} from '@/types/orders'

export const orderService = {
  checkout: async (payload: CheckoutRequest): Promise<CheckoutResponse> => {
    const { data } = await api.post("/order/checkout", payload);
    return data;
  },

  getMyOrders: async (filters?: OrderFilters): Promise<OrdersResponse> => {
    const { data } = await api.get("/order/my-order", { params: filters });
    return data;
  },

  updateOrderStatus: async (
    id: number,
    payload: UpdateOrderStatusRequest
  ): Promise<UpdateOrderStatusResponse> => {
    const { data } = await api.put(`/order/${id}/status`, payload);
    return data;
  },
};
