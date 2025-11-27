import { api } from "./axios";
import { backendRoutes } from "@/config/backendRoute";
import type { MenuListResponse } from "@/types/menu";

/** Example: if endpoint to get menu of restaurant is /api/resto/:id (per swagger) */
export async function getMenuByRestaurant(restaurantId: number) {
  const res = await api.get<MenuListResponse>(backendRoutes.restaurants.detail(restaurantId));
  // sometimes restaurant detail includes menus as nested field; adjust after testing
  return res.data.data;
}
