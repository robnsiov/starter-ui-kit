import TabImpl from "./types";
import cls from "classnames";

const Tab = ({
  active,
  Icon,
  primaryLighten,
  title,
  size = "22",
  onClick = () => {},
}: TabImpl) => {
  return (
    <>
      <div
        className="flex justify-center items-center cursor-pointer relative 
        w-[34px] aspect-square group"
        onClick={onClick}
      >
        <Icon
          size={size}
          className={cls(
            `text-zinc-500
          transition-all duration-200 group-hover:text-primary relative z-10 dark:text-zinc-300`,
            { "text-primary": active }
          )}
        />
        <div
          className="absolute rtl:right-auto rtl:-left-8 -right-8 top-1/2 -translate-y-1/2
          text-[12px]  text-zinc-100 whitespace-nowrap py-0.5 px-2
          rounded transition-all duration-300 opacity-0 
          invisible group-hover:opacity-100 
          group-hover:visible scale-0 group-hover:scale-100
          group-hover:right-[38px]
          rtl:group-hover:left-[38px]
          rtl:group-hover:right-auto
          "
          style={{
            background: primaryLighten || "",
          }}
        >
          <span className="text-primary">{title}</span>
          <span
            className="absolute top-1/2 -translate-y-1/2 w-1.5 aspect-square
            right-[-3px] rtl:right-auto rtl:left-[-3px] rotate-45"
            style={{
              background: primaryLighten || "",
            }}
          ></span>
        </div>
        <span
          className={cls(
            `absolute inset-0 rounded-md  
          scale-0 transition-all duration-200 
          group-hover:scale-100`,
            { "scale-100": active }
          )}
          style={{
            background: primaryLighten || "",
          }}
        ></span>
      </div>
    </>
  );
};
export default Tab;
