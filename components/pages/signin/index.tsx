"use client";

import AuthContaienr from "@/components/shared/containers/auth";
import AuthInput from "@/components/shared/inputs/auth";
import Link from "next/link";
import useSignin from "./use";
import AuthErrorMessage from "@/components/shared/error-messages/auth";
import AuthButton from "@/components/shared/buttons/auth";

const Signin = () => {
  const { onSubmit, register, errors, loading } = useSignin();
  return (
    <AuthContaienr
      desc="Enter your email & password to login"
      title="Sign in to account"
      type="signin"
    >
      <form className="mt-8 w-full" onSubmit={onSubmit}>
        <label className="flex justify-start items-start flex-col">
          <span className="text-sm dark:text-zinc-300 text-zinc-800 cursor-pointer">
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
          <span className="text-sm text-zinc-800 dark:text-zinc-300 cursor-pointer">
            Password
          </span>
          <AuthInput
            error={errors.password?.message}
            {...register("password")}
            placeholder="********"
            type="password"
          />
          <AuthErrorMessage error={errors.password?.message} />
        </label>
        <div className="mt-4 text-right rtl:text-left">
          <Link
            className="text-primary text-sm opacity-90
            duration-200 transition-all hover:opacity-100"
            href={"/forgot-pass"}
          >
            Forgot password?
          </Link>
        </div>
        <AuthButton title="Sign in" loading={loading} />
      </form>
    </AuthContaienr>
  );
};
export default Signin;
