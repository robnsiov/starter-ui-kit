import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import AuthContainerImpl from "./types";

const AuthContaienr = ({ children, desc, title, type }: AuthContainerImpl) => {
  return (
    <>
      <div
        className="w-full min-h-screen flex 
    justify-center items-center flex-col 
     bg-cover bg-center bg-[url('/images/auth.jpg')] md:bg-none py-8"
      >
        <Link href={"/"} className="mb-8 md:mb-4">
          <Image src={"/images/logo.png"} width="130" height="50" alt="logo" />
        </Link>
        <div
          className="flex justify-center items-start flex-col 
      p-8 bg-white shadow-xl w-full max-w-md rounded-lg 
      shadow-indigo-300/10"
        >
          <h2 className="font-semibold text-2xl text-zinc-800 md:text-lg">
            {title}
          </h2>
          <span className="text-sm text-zinc-400 mt-2">{desc}</span>
          {children}
          {(type === "signin" || type === "signup") && (
            <>
              <div className="w-full flex justify-center items-center mt-6">
                <span
                  className="text-zinc-600/90 text-[15px]
          font-semibold whitespace-nowrap me-3"
                >
                  Or {type === "signin" && "sign in"}{" "}
                  {type === "signup" && "sign up"} with
                </span>
                <div className="w-full h-0.5 bg-indigo-100/70"></div>
              </div>
              <div
                className="w-full flex justify-center
         items-center mt-4 scale-90 460px:scale-x-100 460px:scale-y-95 flex-wrap"
              >
                <Link
                  href={"/"}
                  className="px-4 py-2 border-indigo-100 flex justify-center items-center
             border-[1px] rounded-md transition-all duration-200 my-1
             bg-indigo-100/60 hover:bg-indigo-100 hover:border-indigo-200/70 460px:w-full"
                >
                  <FiLinkedin className="me-2 text-blue-700" />
                  <span className="text-zinc-800">LinkedIn</span>
                </Link>
                <Link
                  href={"/"}
                  className="px-4 py-2 border-indigo-100 flex justify-center items-center mx-1.5
             border-[1px] rounded-md transition-all duration-200 my-1 460px:mx-0
             bg-indigo-100/60 hover:bg-indigo-100 hover:border-indigo-200/70 460px:w-full"
                >
                  <RxTwitterLogo className="me-2 text-blue-400" />
                  <span className="text-zinc-800">Twitter</span>
                </Link>
                <Link
                  href={"/"}
                  className="px-4 py-2 border-indigo-100 flex justify-center items-center
             border-[1px] rounded-md transition-all duration-200 my-1
             bg-indigo-100/60 hover:bg-indigo-100 hover:border-indigo-200/70 460px:w-full"
                >
                  <FiFacebook className="me-2 text-blue-900" />
                  <span className="text-zinc-800">Facebook</span>
                </Link>
              </div>
            </>
          )}
          <div className="w-full text-center  text-sm mt-2.5">
            <span className="text-zinc-500">
              {type === "signup" && "Already have an account"}
              {type === "signin" && "Don't have account?"}
            </span>
            <Link
              className="text-indigo-500 ms-2 duration-200 transition-all
          hover:text-indigo-400"
              href={
                type === "signin"
                  ? "/signup"
                  : type === "signup"
                  ? "/signin"
                  : ""
              }
            >
              {type === "signin" && "Create Account"}
              {type === "signup" && "Sign in"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthContaienr;
