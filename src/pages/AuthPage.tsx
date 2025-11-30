import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { loginSchema, registerSchema } from "@/schema/authSchema";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";

import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";

export default function AuthPage() {
  const { loginMutation, registerMutation } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [remember, setRemember] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Login Submit
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(loginForm);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    loginMutation.mutate(loginForm, {
      onSuccess: () => {
        if (remember) {
          localStorage.setItem("rememberUser", JSON.stringify(loginForm));
        }
      },
    });
  };

  // Register Submit
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const result = registerSchema.safeParse(registerForm);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    registerMutation.mutate({
      name: registerForm.name,
      email: registerForm.email,
      phone: registerForm.phone,
      password: registerForm.password,
    });
  };

  const isLoading = loginMutation.isPending || registerMutation.isPending;

  return (
    <section className="flex w-full min-h-screen bg-white text-black">

      {/* Left Image */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        {/* PERUBAHAN: Menghapus kelas 'max-w-lg' dan menambahkan kelas 'w-full h-full object-cover' untuk membuat gambar full */}
        <img src="/images/login-image.png" alt="Login" className="w-full h-full object-cover" />
      </div>

      {/* Right Form */}
      <div className="flex w-full md:w-1/2 flex-col justify-center px-8 lg:px-20">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/images/logo.svg" className="w-10" alt="Foody Logo" />
          <span className="text-2xl font-extrabold text-[#0A0D12]">Foody</span>
        </div>

        {/* FIXED Title & Description */}
        <h1 className="text-3xl font-extrabold text-[#0A0D12]">
          Welcome Back
        </h1>

        <p className="text-gray-500 mb-6">
          Good to see you again! Let’s eat
        </p>

        {/* Toggle Sign In / Sign Up */}
        <div className="w-full mb-6 bg-[#F5F5F5] rounded-xl p-1 flex">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-3 rounded-lg transition-all ${
              isLogin
                ? "bg-white font-semibold shadow-sm"
                : "bg-transparent text-gray-500"
            }`}
          >
            Sign In
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-3 rounded-lg transition-all ${
              !isLogin
                ? "bg-white font-semibold shadow-sm"
                : "bg-transparent text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {isLoading ? (
              <>
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </>
            ) : (
              <>
                <Input className="bg-neutral-300 placeholder:text-neutral-500"
                  placeholder="Email"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                />

                <PasswordInput 
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
              </>
            )}

            <div className="flex items-center gap-2">
              <Checkbox
                checked={remember}
                onCheckedChange={(checked) => setRemember(checked === true)}
              />
              <label className="text-sm cursor-pointer text-gray-600">
                Remember me
              </label>
            </div>

            <Button type="submit" disabled={loginMutation.isPending} className="bg-primary-100">
              {loginMutation.isPending ? "Processing..." : "Login"}
            </Button>
          </form>
        ) : (

          // Register Form
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            {!isLoading && (
              <>
                <Input
                  placeholder="Name"
                  value={registerForm.name}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, name: e.target.value })
                  }
                />

                <Input
                  placeholder="Email"
                  value={registerForm.email}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, email: e.target.value })
                  }
                />

                <Input
                  placeholder="Number Phone"
                  value={registerForm.phone}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, phone: e.target.value })
                  }
                />

                <PasswordInput
                  placeholder="Password"
                  value={registerForm.password}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, password: e.target.value })
                  }
                />

                <PasswordInput
                  placeholder="Confirm Password"
                  value={registerForm.confirmPassword}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </>
            )}

            <Button type="submit" disabled={registerMutation.isPending}
            className="bg-primary-100">
              {registerMutation.isPending ? "Creating..." : "Register"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}