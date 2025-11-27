import { useMutation, useQuery } from "@tanstack/react-query";
import { orderService } from "@/services/api/order.service";
import type {
  CheckoutRequest,
  CheckoutResponse,
  OrderFilters,
  OrdersResponse,
  UpdateOrderStatusRequest,
  UpdateOrderStatusResponse,
} from '@/types/orders'

// Checkout (POST)
export function useCheckout() {
  return useMutation<CheckoutResponse, Error, CheckoutRequest>({
    mutationFn: (payload) => orderService.checkout(payload),
  });
}

// Get Orders List (GET)
export function useOrders(filters?: OrderFilters) {
  return useQuery<OrdersResponse>({
    queryKey: ["orders", filters],
    queryFn: () => orderService.getMyOrders(filters),
    placeholderData: (prevData) => prevData, // == keepPreviousData
  });
}

// Update Status (PUT)
export function useUpdateOrderStatus(orderId: number) {
  return useMutation<UpdateOrderStatusResponse, Error, UpdateOrderStatusRequest>({
    mutationFn: (payload) => orderService.updateOrderStatus(orderId, payload),
  });
}
