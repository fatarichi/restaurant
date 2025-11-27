export interface RestaurantPriceRange {
  min: number;
  max: number;
}

export interface RestaurantListItem {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  reviewCount: number;
  menuCount: number;
  priceRange: RestaurantPriceRange;
  distance: number;
}

export interface RestaurantPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface RestaurantListResponse {
  restaurants: RestaurantListItem[];
  pagination: RestaurantPagination;
}

export interface RecommendedMenu {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
}

export interface RecommendedRestaurant {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  reviewCount: number;
  sampleMenus: RecommendedMenu[];
  isFrequentlyOrdered: boolean;
}

export interface RecommendedResponse {
  recommendations: RecommendedRestaurant[];
  message: string;
}

export interface DetailMenu {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
}

export interface DetailReviewUser {
  id: number;
  name: string;
}

export interface DetailReview {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  user: DetailReviewUser;
}

export interface RestaurantDetail {
  id: number;
  name: string;
  star: number;
  averageRating: number;
  place: string;
  coordinates: {
    lat: number;
    long: number;
  };
  logo: string;
  images: string[];
  totalMenus: number;
  totalReviews: number;
  menus: DetailMenu[];
  reviews: DetailReview[];
}

export interface GetRestaurantListQuery {
  location?: string;
  range?: number;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  page?: number;
  limit?: number;
}
