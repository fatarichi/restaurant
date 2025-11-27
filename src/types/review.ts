export interface CreateReviewRequest {
  transactionId: string;
  restaurantId: number;
  star: number;
  comment: string;
}

export interface ReviewBase {
  id: number;
  star: number;
  comment: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ReviewUser {
  id: number;
  name: string;
}

export interface ReviewRestaurant {
  id: number;
  name: string;
  logo?: string;
}

export interface CreateReviewResponse {
  success: boolean;
  message: string;
  data: {
    review: ReviewBase & {
      user: ReviewUser;
      restaurant: ReviewRestaurant;
    };
  };
}

/** ---- Get Restaurant Reviews ---- */
export interface RestaurantReviewFilters {
  page?: number;
  limit?: number;
  rating?: number;
}

export interface RestaurantReviewsResponse {
  success: boolean;
  data: {
    restaurant: {
      id: number;
      name: string;
      star: number;
    };
    reviews: (ReviewBase & { user: ReviewUser })[];
    statistics: {
      totalReviews: number;
      averageRating: number;
      ratingDistribution: {
        [key: string]: number;
      };
    };
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

/** ---- Get Logged-in User Reviews ---- */
export interface MyReviewsFilters {
  page?: number;
  limit?: number;
}

export interface MyReviewsResponse {
  success: boolean;
  data: {
    reviews: (ReviewBase & { restaurant: ReviewRestaurant })[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

/** ---- Update ---- */
export interface UpdateReviewRequest {
  star?: number;
  comment?: string;
}

export interface UpdateReviewResponse {
  success: boolean;
  data: {
    review: ReviewBase & {
      restaurant: ReviewRestaurant;
    };
  };
}

/** ---- Delete ---- */
export interface DeleteReviewResponse {
  success: boolean;
  message: string;
}
