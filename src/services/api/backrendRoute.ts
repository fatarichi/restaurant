export const backend = {
  Authentication: {
    Post_Register: '/api/auth/register',
    Post_Login: '/api/auth/login',
    Get_Profile: '/api/auth/profile',
    Put_Profile: '/api/auth/profile',
  },

  Cart: {
    Get_Cart: '/api/cart',
    Post_Add_Cart: '/api/cart',
    Delete_All_Cart: '/api/cart',
    Update_CartItem: (id: number) => `/api/cart/${id}`,
    Delete_CartItem: (id: number) => `/api/cart/${id}`,
  },

  Orders: {
    Post_Create_Order: '/api/order/checkout',
    Get_User_Order: '/api/order/my-order',
    Update_User_Order: (id: number) => `/api/order/${id}/status`,
  },

  Restaurants: {
    Get_Resto: '/api/resto',
    Get_Resto_Recommended: '/api/resto/recommended',
    Get_Resto_Review_and_Menu: (id: number) => `/api/resto/${id}`,
  },

  Reviews: {
    Create_Review: '/api/review',
    Get_Reviews_Spesicific_Restaurant: (restaurantId: number) =>
      `/api/review/restaurant/${restaurantId}`,
    Get_Current_Reviews: '/api/review/my-reviews',
    Update_Review: (id: number) => `/api/review/${id}`,
    Delete_Review: (id: number) => `/api/review/${id}`,
  },
};
