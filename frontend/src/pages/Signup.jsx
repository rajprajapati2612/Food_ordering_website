

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Eye,
  EyeOff,
  Loader2,
  Check,
  X,
  AlertCircle,
} from "lucide-react";

import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // Error message shown at top
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    // Username validation
    if (!formData.username.trim()) {
      setError("Please enter your full name.");
      return;
    }

    // Email validation
    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (!formData.password.trim()) {
      setError("Please enter a password.");
      return;
    }

    // Minimum password length
    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      setError("Please confirm your password.");
      return;
    }

    // Password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      // Remove confirmPassword before sending data
      const { confirmPassword, ...signupData } = formData;

      const res = await axios.post(
        "http://localhost:8000/user/register",
        signupData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);

        navigate("/verify");
      }
    } catch (error) {
      console.log(error);

      const message =
        error.response?.data?.message ||
        "Unable to create account. Please try again.";

      setError(message);

      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-green-600">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Sign up to get started
          </p>

        </div>

        <Card className="w-full shadow-lg border border-green-100">

          <CardHeader className="space-y-2 text-center px-5 sm:px-6">

            <CardTitle className="text-xl sm:text-2xl font-semibold">
              Sign Up
            </CardTitle>

            <CardDescription className="text-sm">
              Enter your details to create your account
            </CardDescription>

          </CardHeader>

          <CardContent className="px-5 sm:px-6">

            {/* ERROR BOX */}
            {error && (
              <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">

                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />

                <p className="flex-1">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() => setError("")}
                  className="shrink-0 hover:text-red-800"
                >
                  <X className="h-4 w-4" />
                </button>

              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Full Name */}
              <div className="space-y-2">

                <Label htmlFor="username">
                  Full Name
                </Label>

                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  disabled={isLoading}
                  className="h-11"
                />

              </div>

              {/* Email */}
              <div className="space-y-2">

                <Label htmlFor="email">
                  Email
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled={isLoading}
                  className="h-11"
                />

              </div>

              {/* Password */}
              <div className="space-y-2">

                <Label htmlFor="password">
                  Password
                </Label>

                <div className="relative">

                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    disabled={isLoading}
                    className="h-11 pr-12"
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-9 w-9"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>

                </div>

              </div>

              {/* Confirm Password */}
              <div className="space-y-2">

                <Label htmlFor="confirmPassword">
                  Confirm Password
                </Label>

                <div className="relative">

                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    disabled={isLoading}
                    className={`h-11 pr-12 ${
                      formData.confirmPassword.length > 0
                        ? formData.password ===
                          formData.confirmPassword
                          ? "border-green-500"
                          : "border-red-500"
                        : ""
                    }`}
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-9 w-9"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>

                </div>

                {/* Password Match Status */}
                {formData.confirmPassword.length > 0 && (
                  <div
                    className={`flex items-center gap-1 text-xs ${
                      formData.password ===
                      formData.confirmPassword
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {formData.password ===
                    formData.confirmPassword ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Passwords match
                      </>
                    ) : (
                      <>
                        <X className="h-3.5 w-3.5" />
                        Passwords do not match
                      </>
                    )}
                  </div>
                )}

              </div>

              {/* Signup Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-green-600 hover:bg-green-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>

            </form>

          </CardContent>

          {/* Login */}
          <CardFooter className="flex flex-col gap-3 px-5 sm:px-6">

            <div className="w-full border-t" />

            <p className="text-sm text-gray-600 text-center">
              Already registered?{" "}

              <Link
                to="/login"
                className="font-semibold text-green-600 hover:text-green-700 hover:underline"
              >
                Login
              </Link>
            </p>

          </CardFooter>

        </Card>

      </div>

    </div>
  );
};

export default Signup;