import { api } from "./axios";
import type { ApiResponse } from "@/types/api";
import type {
  RestaurantListResponse,
  GetRestaurantListQuery,
  RecommendedResponse,
  RestaurantDetail
} from "@/types/restaurant";
import { backendRoutes } from "@/config/backendRoute";

// GET /api/resto (with filters)
export async function getRestaurantsService(
  query?: GetRestaurantListQuery
): Promise<ApiResponse<RestaurantListResponse>> {
  const res = await api.get<ApiResponse<RestaurantListResponse>>(backendRoutes.restaurants.list, {
    params: query
  });

  return res.data;
}

// GET /api/resto/recommended
export async function getRecommendedRestaurantsService(): Promise<ApiResponse<RecommendedResponse>> {
  const res = await api.get<ApiResponse<RecommendedResponse>>(backendRoutes.restaurants.recommended);
  return res.data;
}

// GET /api/resto/:id
export async function getRestaurantDetailService(
  id: number,
  query?: { limitMenu?: number; limitReview?: number }
): Promise<ApiResponse<RestaurantDetail>> {
  const res = await api.get<ApiResponse<RestaurantDetail>>(backendRoutes.restaurants.detail(id), {
    params: query
  });

  return res.data;
}
