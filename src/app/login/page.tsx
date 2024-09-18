"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button, Input } from "@nextui-org/react";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { z } from "zod";

import PasswordInput from "@/components/ui/password-input";
import Title from "@/components/ui/title";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      await loginSchema.parseAsync(form);
      // If validation passes, proceed with login

      // Implement your login logic here
      const result = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (result?.error) {
        setErrors({ password: "Invalid email or password" });
      } else {
        router.push("/");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(err.flatten().fieldErrors);
      } else {
        setErrors({ email: "An unexpected error occurred" });
      }
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/profile" });
  };

  const handleFacebookLogin = async () => {
    await signIn("facebook", { callbackUrl: "/profile" });
  };

  return (
    <div className="mt-4 flex min-h-screen items-start justify-center bg-background sm:mt-16">
      <div className="bg-card w-full max-w-md space-y-8 rounded-xl p-8 shadow-gray-200 dark:shadow-gray-900">
        <div className="text-center">
          <Title>Log in to your account</Title>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Input
                isRequired
                type="email"
                label="Email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.[0]}
              />
            </div>
            <div>
              <PasswordInput
                isRequired
                type="password"
                label="Password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                errorMessage={errors.password?.[0]}
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full" color="primary">
              Log in
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="border-muted w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="text-muted-foreground bg-white px-2 dark:bg-black">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button className="w-full" onClick={handleGoogleLogin}>
              <IconBrandGoogle className="mr-1 h-5 w-5" />
              Google
            </Button>
            <Button className="w-full" onClick={handleFacebookLogin}>
              <IconBrandFacebook className="mr-1 h-5 w-5" />
              Facebook
            </Button>
            {/* Add other social providers here */}
          </div>
        </div>

        <p className="text-muted-foreground mt-10 text-center text-sm">
          {"Don't have an account? "}
          <Link
            href="/sign-up"
            className="font-semibold text-primary hover:text-primary/80"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
