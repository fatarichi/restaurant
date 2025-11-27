import { api } from "./axios";
import type {
  CreateReviewRequest,
  CreateReviewResponse,
  RestaurantReviewsResponse,
  RestaurantReviewFilters,
  MyReviewsFilters,
  MyReviewsResponse,
  UpdateReviewRequest,
  UpdateReviewResponse,
  DeleteReviewResponse
} from '@/types/review'

export const reviewService = {
  create: async (payload: CreateReviewRequest): Promise<CreateReviewResponse> => {
    const { data } = await api.post("/review", payload);
    return data;
  },

  getRestaurantReviews: async (
    restaurantId: number,
    filters?: RestaurantReviewFilters
  ): Promise<RestaurantReviewsResponse> => {
    const { data } = await api.get(`/review/restaurant/${restaurantId}`, {
      params: filters,
    });
    return data;
  },

  getMyReviews: async (filters?: MyReviewsFilters): Promise<MyReviewsResponse> => {
    const { data } = await api.get("/review/my-reviews", { params: filters });
    return data;
  },

  update: async (
    reviewId: number,
    payload: UpdateReviewRequest
  ): Promise<UpdateReviewResponse> => {
    const { data } = await api.put(`/review/${reviewId}`, payload);
    return data;
  },

  delete: async (reviewId: number): Promise<DeleteReviewResponse> => {
    const { data } = await api.delete(`/review/${reviewId}`);
    return data;
  },
};
