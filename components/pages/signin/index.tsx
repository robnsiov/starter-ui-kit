"use client";

import AuthContaienr from "@/components/shared/containers/auth";
import AuthInput from "@/components/shared/inputs/auth";
import useSignin from "./use";
import AuthErrorMessage from "@/components/shared/error-messages/auth";
import AuthButton from "@/components/shared/buttons/auth";
import useTranslate from "@/hooks/use-translate";
import NavLink from "@/components/shared/links/nav-link";

const Signin = () => {
  const { onSubmit, register, errors, loading } = useSignin();
  const t = useTranslate("signin");
  return (
    <AuthContaienr
      desc={t({ key: "desc" })}
      title={t({ key: "title" })}
      type="signin"
    >
      <form className="mt-8 w-full" autoComplete="off" onSubmit={onSubmit}>
        <label className="flex justify-start items-start flex-col">
          <span className="text-sm dark:text-zinc-400 text-zinc-800 cursor-pointer">
            {t({ key: "email" })}
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
          <span className="text-sm text-zinc-800 dark:text-zinc-400 cursor-pointer">
            {t({ key: "password" })}
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
          <NavLink
            className="text-primary text-sm opacity-90
            duration-200 transition-all hover:opacity-100"
            href={"/forgot-pass"}
          >
            {t({ key: "forgot" })}
          </NavLink>
        </div>
        <AuthButton title={t({ key: "button" })} loading={loading} />
      </form>
    </AuthContaienr>
  );
};
export default Signin;
