import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/api/auth.service";
import type { LoginBody, RegisterBody, UpdateProfileBody } from "@/types/auth";

export function useAuth() {
  const queryClient = useQueryClient();

  /** GET TOKEN FROM LOCAL STORAGE */
  const token = localStorage.getItem("token");

  /** GET PROFILE IF LOGGED IN */
  const profileQuery = useQuery({
    queryKey: ["auth", "profile"],
    queryFn: () => authService.getProfile(token!),
    enabled: !!token, // only run if token exists
    retry: false,
  });

  /** REGISTER USER */
  const registerMutation = useMutation({
    mutationFn: (payload: RegisterBody) => authService.register(payload),
    onSuccess: (res) => {
      if (res.success && res.data?.token) {
        localStorage.setItem("token", res.data.token);
        queryClient.invalidateQueries({ queryKey: ["auth", "profile"] });
      }
    }
  });

  /** LOGIN USER */
  const loginMutation = useMutation({
    mutationFn: (payload: LoginBody) => authService.login(payload),
    onSuccess: (res) => {
      if (res.success && res.data?.token) {
        localStorage.setItem("token", res.data.token);
        queryClient.invalidateQueries({ queryKey: ["auth", "profile"] });
      }
    }
  });

  /** UPDATE PROFILE */
  const updateProfileMutation = useMutation({
    mutationFn: (payload: UpdateProfileBody) => authService.updateProfile(token!, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "profile"] });
    },
  });

  /** LOGOUT USER */
  const logout = () => {
    localStorage.removeItem("token");
    queryClient.removeQueries({ queryKey: ["auth"] });
  };

  return {
    token,
    profileQuery,
    registerMutation,
    loginMutation,
    updateProfileMutation,
    logout,
    isAuthenticated: !!token,
  };
}
