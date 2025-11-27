import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { cartService } from "@/services/api/cart.service";
import type { AddToCartBody, UpdateCartBody } from "@/types/cart";

export function useCart() {
  const queryClient = useQueryClient();

  /** GET CART */
  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: cartService.getCart,
  });

  /** ADD ITEM */
  const addMutation = useMutation({
    mutationFn: (payload: AddToCartBody) => cartService.addItem(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  /** UPDATE ITEM */
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateCartBody }) =>
      cartService.updateItem(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  /** DELETE ITEM */
  const deleteMutation = useMutation({
    mutationFn: (id: number) => cartService.deleteItem(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  /** CLEAR CART */
  const clearMutation = useMutation({
    mutationFn: () => cartService.clearCart(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  return {
    cartQuery,
    addMutation,
    updateMutation,
    deleteMutation,
    clearMutation,
  };
}
