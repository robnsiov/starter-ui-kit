"use client";

import AuthContaienr from "@/components/shared/containers/auth";
import AuthInput from "@/components/shared/inputs/auth";
import Link from "next/link";
import useSignin from "./use";
import cls from "classnames";
import AuthErrorMessage from "@/components/shared/error-messages/auth";

const Signin = () => {
  const { onSubmit, register, errors } = useSignin();
  return (
    <AuthContaienr
      desc="Enter your email & password to login"
      title="Sign in to account"
      type="signin"
    >
      <form className="mt-8 w-full" onSubmit={onSubmit}>
        <label className="flex justify-start items-start flex-col">
          <span className="text-sm text-zinc-800 cursor-pointer">
            Email Address
          </span>
          <AuthInput
            error={errors.email?.message}
            {...register("email")}
            placeholder="Test@gmail.com"
            type="text"
          />
          <AuthErrorMessage error={errors.email?.message} />
        </label>
        <label className="flex justify-start items-start flex-col mt-3">
          <span className="text-sm text-zinc-800 cursor-pointer">Password</span>
          <AuthInput
            error={errors.password?.message}
            {...register("password")}
            placeholder="********"
            type="password"
          />
          <AuthErrorMessage error={errors.password?.message} />
        </label>
        <div className="mt-4 text-right">
          <Link
            className="text-indigo-500 text-sm
            duration-200 transition-all hover:text-indigo-400"
            href={"/forgot-pass"}
          >
            Forgot password?
          </Link>
        </div>
        <button
          className="w-full bg-indigo-500 text-white p-2 
          rounded-md mt-6 text-sm transition-all duration-200 hover:bg-indigo-600"
        >
          Sign in
        </button>
      </form>
    </AuthContaienr>
  );
};
export default Signin;
