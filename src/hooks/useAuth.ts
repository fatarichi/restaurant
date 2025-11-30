import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export function useAuth() {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await axios.post(`${API_URL}/auth/login`, data);
      return res.data;
    },
    onSuccess: (res) => {
      localStorage.setItem("token", res.token);
      toast.success("Login berhasil 🎉");
      navigate("/dashboard");
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Login gagal");
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post(`${API_URL}/auth/register`, data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Akun berhasil dibuat! 🎉 Silahkan login.");
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message || "Pendaftaran gagal");
    },
  });

  return { loginMutation, registerMutation };
}
