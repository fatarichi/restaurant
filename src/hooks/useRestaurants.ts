import { useQuery } from "@tanstack/react-query";
import {
  getRestaurantsService,
  getRecommendedRestaurantsService,
  getRestaurantDetailService
} from '@/services/api/restaurant.service';
import type { GetRestaurantListQuery } from "@/types/restaurant";

export function useRestaurantList(query?: GetRestaurantListQuery) {
  return useQuery({
    queryKey: ["restaurants", query],
    queryFn: () => getRestaurantsService(query)
  });
}

export function useRecommendedRestaurants() {
  return useQuery({
    queryKey: ["recommended-restaurants"],
    queryFn: getRecommendedRestaurantsService
  });
}

export function useRestaurantDetail(id: number, query?: { limitMenu?: number; limitReview?: number }) {
  return useQuery({
    queryKey: ["restaurant-detail", id, query],
    queryFn: () => getRestaurantDetailService(id, query),
    enabled: !!id
  });
}
