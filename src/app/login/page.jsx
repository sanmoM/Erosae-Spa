"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="w-full mt-20 flex justify-center items-center min-h-[80vh] px-2">
      <div className="w-full border border-gray-700 p-4 md:p-6 rounded-md bg-gray-900/50 max-w-[450px] ">
        <h2 className="text-xl font-semibold mb-6 text-center text-stone-200">
          Welcome Back!
        </h2>
        <form className="space-y-4 md:space-y-6">
          <div className="grid w-full  items-center gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input type="emial" id="email" placeholder="Enter Your Email" />
          </div>
          <div className="grid w-full  items-center gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type={showPass ? "text" : "password"}
                id="password"
                placeholder="Enter Your Email"
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute cursor-pointer top-2.5 right-3"
              >
                {showPass ? (
                  <EyeOff className="text-stone-400" />
                ) : (
                  <Eye className="text-stone-400" />
                )}
              </div>
            </div>
          </div>
          <Button variant="secondary" size={"lg"} className={"w-full mt-4 "}>
            Login
          </Button>
        </form>
        <div className="flex gap-2 mt-6 items-center">
          <p className="text-sm text-stone-300">Do not have an account?</p>
          <Link href={"/sign-up"}>
            <Button variant={"link"}>Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login
