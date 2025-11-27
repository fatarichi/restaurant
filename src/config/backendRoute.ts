export const backendRoutes = {
  auth: {
    register: "/api/auth/register",
    login: "/api/auth/login",
    profile: "/api/auth/profile",
  },

  cart: {
    base: "/api/cart",
    update: (id: number) => `/api/cart/${id}`,
    remove: (id: number) => `/api/cart/${id}`,
  },

  orders: {
    checkout: "/api/order/checkout",
    myOrders: "/api/order/my-order",
    updateStatus: (id: number) => `/api/order/${id}/status`,
  },

  restaurants: {
    list: "/api/resto",
    recommended: "/api/resto/recommended",
    detail: (id: number) => `/api/resto/${id}`,
  },

  reviews: {
    create: "/api/review",
    restaurantReviews: (restaurantId: number) =>
      `/api/review/restaurant/${restaurantId}`,
    mine: "/api/review/my-reviews",
    update: (id: number) => `/api/review/${id}`,
    delete: (id: number) => `/api/review/${id}`,
  },
};
