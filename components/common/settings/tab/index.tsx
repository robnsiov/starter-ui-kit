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
          transition-all duration-200 group-hover:text-primary relative z-10`
          )}
        />
        <div
          className="absolute -right-8 top-1/2 -translate-y-1/2
          text-[12px]  text-zinc-100 whitespace-nowrap py-0.5 px-2
          rounded transition-all duration-300 opacity-0 
          invisible group-hover:opacity-100 
          group-hover:visible scale-0 group-hover:scale-100
          group-hover:right-[38px]
          "
          style={{
            background: primaryLighten || "",
          }}
        >
          <span className="text-primary">{title}</span>
          <span
            className="absolute top-1/2 -translate-y-1/2 w-1.5 aspect-square
            right-[-3px] rotate-45"
            style={{
              background: primaryLighten || "",
            }}
          ></span>
        </div>
        <span
          className="absolute inset-0 rounded-md  
          scale-0 transition-all duration-200 
          group-hover:scale-100"
          style={{
            background: primaryLighten || "",
          }}
        ></span>
      </div>
    </>
  );
};
export default Tab;
