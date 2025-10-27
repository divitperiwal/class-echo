"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // TODO: Implement your authentication logic here
      console.log("Login attempt:", { userId, password });

      // Replace with actual authentication
      alert("Login successful! (Demo)");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-[420px] relative">
          {/* Logo */}
          <div className="mb-16">
            <h1 className="text-[2.5rem] font-light text-white mb-3 tracking-[-0.02em]">
              Welcome back<span className="text-amber-200">.</span>
            </h1>
            <p className="text-neutral-400">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User ID Input */}
            <div className="relative">
              <label 
                htmlFor="userId" 
                className="text-xs text-neutral-400 absolute -top-2 left-3 px-2 bg-black rounded-full"
              >
                User ID
              </label>
              <Input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                disabled={isLoading}
                className="h-14 px-6 bg-neutral-950/50 border-neutral-800 rounded-2xl text-white placeholder:text-neutral-600 focus:border-amber-300/50 focus:ring-amber-300/20 transition-all"
                placeholder="Enter your user ID"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label 
                htmlFor="password" 
                className="text-xs text-neutral-400 absolute -top-2 left-3 px-2 bg-black rounded-full"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className="h-14 px-6 bg-neutral-950/50 border-neutral-800 rounded-2xl text-white placeholder:text-neutral-600 focus:border-amber-300/50 focus:ring-amber-300/20 transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 text-sm text-red-400 bg-red-950/30 border border-red-500/20 rounded-2xl">
                {error}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4 pt-2">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 text-base bg-linear-to-b from-amber-200 to-amber-300 hover:from-amber-300 hover:to-amber-400 text-black font-medium rounded-2xl transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in to your account"
                )}
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="w-full h-14 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white rounded-2xl border border-neutral-800 transition-all duration-300"
              >
                Forgot your password?
              </Button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-neutral-500">
              Don't have an account?{" "}
              <Link 
                href="/register" 
                className="text-amber-200 hover:text-amber-300 transition-colors"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="flex-1 hidden lg:block relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-amber-300/10 to-amber-900/10" />
        <div className="absolute inset-0 mix-blend-overlay opacity-50" 
          style={{
            backgroundImage: `radial-gradient(circle at center, transparent 0%, #000 70%)`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,transparent_0%,#000_70%)]" />
        
        {/* Decorative circles */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[20%] w-32 h-32 rounded-full border border-amber-200/20 animate-float" />
          <div className="absolute bottom-[20%] right-[20%] w-40 h-40 rounded-full border border-amber-200/10 animate-float" style={{ animationDelay: '-2s' }} />
          <div className="absolute top-[50%] left-[50%] w-48 h-48 rounded-full border border-amber-200/5 animate-float" style={{ animationDelay: '-4s' }} />
        </div>

        <div className="h-full flex flex-col relative">
          <div className="absolute top-20 left-0 right-0 flex justify-center">
            <span className="font-light text-7xl text-transparent bg-clip-text bg-linear-to-b from-white to-white/40">
              Class<span className="font-medium text-amber-200">Echo</span>
            </span>
          </div>
          
          <div className="absolute bottom-20 right-10">
            <div className="relative w-150 h-7 mb-3">
              {[
                "Modernize classrooms",
                "Secure attendance tracking",
                "Enhanced productivity tools",
                "Real-time collaboration",
                "Smart resource management",
                "Seamless communication"
              ].map((text, index) => (
                <p
                  key={text}
                  data-index={index}
                  className="feature-text text-2xl font-light text-white/90"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="h-px w-16 bg-linear-to-r from-transparent to-amber-200/50" />
              <p className="text-base text-amber-200/80">
                The future of education
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
