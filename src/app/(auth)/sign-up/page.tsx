"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

type UserForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const page = () => {
  const [user, setUser] = useState<UserForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <div className="flex flex-col rounded-lg items-center w-full mx-auto bg-zinc-50 p-5  max-w-[600px]">
        <h1 className="font-bold text-4xl text-slate-800 ">Sign up </h1>
        <p className="text-lg text-zinc-500 font-semibold text-center mt-5">
          Sign up to List and share your Properties with clients.
        </p>
        <form className="w-full h-full my-10">
          <div className="relative w-full mb-4">
            <input
              type="text"
              id="name"
              className="block rounded-md px-6 pt-6 pb-1 w-full text-slate-700 bg-zinc-200 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              name
            </label>
          </div>

          <div className="relative w-full mb-4">
            <input
              type="text"
              id="name"
              className="block rounded-md px-6 pt-6 pb-1 w-full text-slate-700 bg-zinc-200 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Email
            </label>
          </div>

          <div className="relative w-full mb-4">
            <input
              type="text"
              id="name"
              className="block rounded-md px-6 pt-6 pb-1 w-full text-slate-700 bg-zinc-200 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Password
            </label>
          </div>
          <div className="relative w-full mb-4">
            <input
              type="text"
              id="name"
              className="block rounded-md px-6 pt-6 pb-1 w-full text-slate-700 bg-zinc-200 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Confirm Password
            </label>
          </div>
          <p className="text-sm  text-center text-muted-foreground">
            By signing up, you agree to our Terms ,
            <span className="text-blue-400">
              Privacy Policy and Cookies Policy .
            </span>
          </p>
          <Button className="w-full mt-5 bg-blue-500  rounded-2xl h-12">
            Sign Up
          </Button>
          <h1 className="text-xl text-zinc-400  font-semibold text-center mt-2">
            OR
          </h1>
          <Button className="w-full mt-5 bg-red-400 rounded-2xl h-12">
            Login with Google
          </Button>
        </form>
        <div className="w-full flex items-end border-t-2 p-3">
          <p>Have an account?</p>{" "}
          <Link href="/sign-in" className="font-semibold text-blue-400">
            {" "}
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
