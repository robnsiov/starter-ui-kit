"use client";
import NavLink from "@/components/shared/links/nav-link";
import useTranslate from "@/hooks/use-translate";
import Image from "next/image";

const NotFound = () => {
  const t = useTranslate("notFound");
  return (
    <div
      className="w-full h-screen flex justify-center items-center
     mx-auto text-center flex-col bg-slate-800"
    >
      <div
        className="flex justify-center 
    items-center max-w-xl w-full flex-col p-4"
      >
        <div className="w-[100px] aspect-square md:w-[50px]">
          <Image src={"/images/sad.png"} width="100" height="100" alt="sad" />
        </div>
        <span className="text-blue-500 font-extrabold text-[200px] md:text-[100px]">
          400
        </span>
        <p className="mb-8 md:mb-4  text-zinc-400">{t({ key: "desc" })}</p>
        <NavLink
          className="px-4 py-2 bg-indigo-500 
          text-zinc-200 rounded-md transition-all duration-200 hover:bg-indigo-600"
          href={"/"}
        >
          {t({ key: "button" })}
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
