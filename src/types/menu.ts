import type { ApiSuccessResponse } from "./api";

export type MenuType = "food" | "drink";

export interface Menu {
  id: number;
  food_name: string;
  price: number;
  type: MenuType;
  resto_id: number;
}

export type MenuListResponse = ApiSuccessResponse<Menu[]>;
export type MenuSingleResponse = ApiSuccessResponse<Menu>;
