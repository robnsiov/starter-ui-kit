import MenuContainerImpl from "./types";
import cls from "classnames";
const MenuContainer = ({ children, className = "" }: MenuContainerImpl) => {
  return (
    <>
      <div
        className={cls(
          `absolute 
             min-w-[200px] border-[1px] dark:border-zinc-700 
            border-zinc-200 rounded-md bg-white py-1 flex justify-start
            items-start flex-col
            opacity-0 invisible transition-all duration-20
            sub-menu`,
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default MenuContainer;
