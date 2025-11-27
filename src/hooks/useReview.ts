import { useMutation, useQuery } from "@tanstack/react-query";
import { reviewService } from "@/services/api/review.service";
import type {
  CreateReviewRequest,
  CreateReviewResponse,
  RestaurantReviewsResponse,
  RestaurantReviewFilters,
  MyReviewsFilters,
  MyReviewsResponse,
  UpdateReviewRequest,
  UpdateReviewResponse,
  DeleteReviewResponse,
} from '@/types/review'

/** CREATE */
export function useCreateReview() {
  return useMutation<CreateReviewResponse, Error, CreateReviewRequest>({
    mutationFn: (payload) => reviewService.create(payload),
  });
}

/** GET REVIEWS FOR A RESTAURANT */
export function useRestaurantReviews(restaurantId: number, filters?: RestaurantReviewFilters) {
  return useQuery<RestaurantReviewsResponse>({
    queryKey: ["restaurant-reviews", restaurantId, filters],
    queryFn: () => reviewService.getRestaurantReviews(restaurantId, filters),
  });
}

/** GET MY REVIEWS */
export function useMyReviews(filters?: MyReviewsFilters) {
  return useQuery<MyReviewsResponse>({
    queryKey: ["my-reviews", filters],
    queryFn: () => reviewService.getMyReviews(filters),
  });
}

/** UPDATE REVIEW */
export function useUpdateReview(reviewId: number) {
  return useMutation<UpdateReviewResponse, Error, UpdateReviewRequest>({
    mutationFn: (payload) => reviewService.update(reviewId, payload),
  });
}

/** DELETE REVIEW */
export function useDeleteReview() {
  return useMutation<DeleteReviewResponse, Error, number>({
    mutationFn: (reviewId) => reviewService.delete(reviewId),
  });
}
