import AuthInputImpl from "./types";
import { forwardRef, LegacyRef } from "react";
import cls from "classnames";
import useAuthInput from "./use";
const AuthInput = forwardRef(function AuthInput(props: AuthInputImpl, ref) {
  const { setType, type } = useAuthInput(props.type);
  return (
    <>
      <div className="w-full relative">
        <input
          {...props}
          type={type}
          ref={ref as LegacyRef<HTMLInputElement>}
          className={cls(
            `w-full outline-none mt-1.5 bg-indigo-100/60
            border-[1px] 
             rounded-md caret-zinc-600 text-zinc-500 text-sm`,
            props.className ? props.className : "",
            props.error ? "border-red-400" : "border-zinc-400/50",
            props.type === "password" ? "p-3 pe-14" : "p-3"
          )}
        />
        {props.type === "password" && (
          <>
            <span
              className="text-[12px] text-indigo-500 absolute px-2
            top-[20px]  right-4 cursor-pointer"
              onClick={() => setType(type === "password" ? "text" : "password")}
            >
              {type === "password" ? "show" : "hide"}
            </span>
          </>
        )}
      </div>
    </>
  );
});
export default AuthInput;
