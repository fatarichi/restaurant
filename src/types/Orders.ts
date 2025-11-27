export interface CheckoutRequest {
  paymentMethod: string;
  deliveryAddress: string;
  notes?: string;
}

export interface CheckoutItem {
  menuId: number;
  menuName: string;
  price: number;
  quantity: number;
  itemTotal: number;
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
  data: {
    transaction: {
      id: number;
      transactionId: string;
      paymentMethod: string;
      status: string;
      pricing: {
        subtotal: number;
        serviceFee: number;
        deliveryFee: number;
        totalPrice: number;
      };
      restaurants: {
        restaurant: { id: number; name: string; logo: string };
        items: CheckoutItem[];
        subtotal: number;
      }[];
      createdAt: string;
    };
  };
}

export interface OrderFilters {
  status?: "preparing" | "on_the_way" | "delivered" | "done" | "cancelled";
  page?: number;
  limit?: number;
}

export interface OrderItem {
  id: number;
  transactionId: string;
  status: string;
  paymentMethod: string;
  pricing: {
    subtotal: number;
    serviceFee: number;
    deliveryFee: number;
    totalPrice: number;
  };
  restaurants: {
    restaurantId: number;
    restaurantName: string;
    items: CheckoutItem[];
    subtotal: number;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface OrdersResponse {
  success: boolean;
  data: {
    orders: OrderItem[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
    filter?: { status: string };
  };
}

export interface UpdateOrderStatusRequest {
  status: "preparing" | "on_the_way" | "delivered" | "cancelled";
}

export interface UpdateOrderStatusResponse {
  success: boolean;
  data: {
    order: {
      id: number;
      transactionId: string;
      status: string;
      updatedAt: string;
    };
  };
}
