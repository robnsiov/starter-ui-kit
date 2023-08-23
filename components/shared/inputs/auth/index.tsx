import AuthInputImpl from "./types";
import { forwardRef, LegacyRef } from "react";
import cls from "classnames";
import useAuthInput from "./use";
import useTranslate from "@/hooks/use-translate";
const AuthInput = forwardRef(function AuthInput(props: AuthInputImpl, ref) {
  const t = useTranslate("general");
  const { setType, type } = useAuthInput(props.type);
  return (
    <>
      <div className="w-full relative">
        <input
          {...props}
          type={type}
          ref={ref as LegacyRef<HTMLInputElement>}
          className={cls(
            `w-full mt-1.5 bg-indigo-100/60 dark:bg-dark-800 dark:text-zinc-200
            border-[1px] 
             rounded-md caret-zinc-600 text-zinc-800 text-sm dark:caret-zinc-300 border-transparent
             focus:outline-2 outline-offset-2 outline-primary`,
            props.className ? props.className : "",
            { "!border-red-400": props.error },
            props.type === "password" ? "p-3 pe-14" : "p-3"
          )}
        />
        {props.type === "password" && (
          <>
            <span
              className="text-[12px] text-primary absolute px-2
            top-[20px]  right-2 rtl:right-auto rtl:left-2 cursor-pointer"
              onClick={() => setType(type === "password" ? "text" : "password")}
            >
              {type === "password" ? t({ key: "show" }) : t({ key: "hide" })}
            </span>
          </>
        )}
      </div>
    </>
  );
});
export default AuthInput;
