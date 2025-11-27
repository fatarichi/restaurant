export interface CartMenu {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
}

export interface CartRestaurant {
  id: number;
  name: string;
  logo: string;
}

export interface CartItem {
  id: number;
  menu: CartMenu;
  restaurant: CartRestaurant;
  quantity: number;
  itemTotal: number;
}

export interface CartGroup {
  restaurant: CartRestaurant;
  items: CartItem[];
  subtotal: number;
}

export interface CartSummary {
  totalItems: number;
  totalPrice: number;
  restaurantCount: number;
}

export interface CartResponse {
  cart: CartGroup[];
  summary: CartSummary;
}

export interface AddToCartBody {
  restaurantId: number;
  menuId: number;
  quantity: number;
}

export interface UpdateCartBody {
  quantity: number;
}
