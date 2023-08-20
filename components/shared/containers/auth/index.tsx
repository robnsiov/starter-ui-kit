import Image from "next/image";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { RxTwitterLogo } from "react-icons/rx";
import AuthContainerImpl from "./types";
import NavLink from "../../links/nav-link";

const AuthContaienr = ({ children, desc, title, type }: AuthContainerImpl) => {
  return (
    <>
      <div
        className="w-full min-h-screen flex 
    justify-center items-center flex-col 
     bg-cover bg-center md:bg-none py-8 relative"
      >
        <div className="w-full h-full absolute inset-0 bg-[url('/images/auth.jpg')] dark:hidden"></div>
        <NavLink href={"/"} className="mb-8 md:mb-4 relative z-10">
          <Image src={"/images/logo.png"} width="130" height="50" alt="logo" />
        </NavLink>
        <div
          className="flex justify-center items-start flex-col 
      p-8 bg-white dark:bg-dark dark:shadow-none shadow-xl w-full max-w-md rounded-lg 
      shadow-indigo-300/10 relative z-10"
        >
          <h2 className="font-semibold text-2xl text-zinc-800 dark:text-zinc-300 md:text-lg">
            {title}
          </h2>
          <span className="text-sm text-zinc-400 dark:text-zinc-300 mt-2">
            {desc}
          </span>
          {children}
          {(type === "signin" || type === "signup") && (
            <>
              <div className="w-full flex justify-center items-center mt-6">
                <span
                  className="text-zinc-600/90 dark:text-zinc-300 text-[15px]
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
                <NavLink
                  href={"/"}
                  className="px-4 py-2 border-indigo-100 
                  dark:border-primary dark:hover:bg-primary dark:bg-primary dark:opacity-90 dark:hover:opacity-100
                   flex justify-center items-center
             border-[1px] rounded-md transition-all duration-200 my-1
             bg-indigo-100/60 hover:bg-indigo-100 hover:border-indigo-200/70 460px:w-full"
                >
                  <FiLinkedin className="me-2 text-blue-400" />
                  <span className="text-zinc-800 dark:text-zinc-300">
                    LinkedIn
                  </span>
                </NavLink>
                <NavLink
                  href={"/"}
                  className="px-4 py-2 border-indigo-100
                  dark:border-primary dark:hover:bg-primary dark:bg-primary dark:opacity-90 dark:hover:opacity-100
                  flex justify-center items-center mx-1.5
             border-[1px] rounded-md transition-all duration-200 my-1 460px:mx-0
             bg-indigo-100/60 hover:bg-indigo-100 hover:border-indigo-200/70 460px:w-full"
                >
                  <RxTwitterLogo className="me-2 text-blue-400" />
                  <span className="text-zinc-800 dark:text-zinc-300">
                    Twitter
                  </span>
                </NavLink>
                <NavLink
                  href={"/"}
                  className="px-4 py-2 border-indigo-100
                  dark:border-primary dark:hover:bg-primary dark:bg-primary dark:opacity-90 dark:hover:opacity-100
                  flex justify-center items-center
             border-[1px] rounded-md transition-all duration-200 my-1
             bg-indigo-100/60 hover:bg-indigo-100 hover:border-indigo-200/70 460px:w-full"
                >
                  <FiFacebook className="me-2 text-blue-900" />
                  <span className="text-zinc-800 dark:text-zinc-300">
                    Facebook
                  </span>
                </NavLink>
              </div>
            </>
          )}
          <div className="w-full text-center  text-sm mt-2.5">
            <span className="text-zinc-500">
              {type === "signup" && "Already have an account"}
              {type === "signin" && "Don't have account?"}
            </span>
            <NavLink
              className="text-primary opacity-90 ms-2 duration-200 transition-all
          hover:opacity-100"
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
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthContaienr;
