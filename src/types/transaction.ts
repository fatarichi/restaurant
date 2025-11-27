import type { ApiSuccessResponse } from "./api";

export type TransactionStatus = "preparing" | "on_the_way" | "delivered" | "canceled";

export interface Transaction {
  transaction_id: string;
  user_id: number;
  payment_method: string;
  price: number;
  service_fee: number;
  delivery_fee: number;
  total_price: number;
  status: TransactionStatus;
}

export type TransactionResponse = ApiSuccessResponse<Transaction>;
export type TransactionListResponse = ApiSuccessResponse<Transaction[]>;
