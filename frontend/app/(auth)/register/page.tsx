import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
function Signup() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl py-10 px-8 md:px-10 text-gray-800">
        {/* Brand Name */}
        <h1 className="text-4xl font-extrabold text-center bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
          Clash
        </h1>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-1">
          Signup
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Create your account 👋
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-4 bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          >
            Signup
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-purple-600 font-semibold hover:text-pink-500 transition-colors duration-200 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
