import useMenuIcon from "./use";

const MenuIcon = () => {
  const { setSidebar } = useMenuIcon();
  return (
    <>
      <div className="hidden justify-center items-center md:flex">
        <div
          className="flex justify-center items-center flex-col
         space-y-0.5 cursor-pointer me-5 group"
          onClick={() => setSidebar({ close: false })}
        >
          <span
            className="bg-zinc-500 dark:bg-primary group-hover:bg-primary transition-all duration-200
            rounded-md w-[16px] h-0.5 inline-block"
          ></span>
          <span
            className="bg-zinc-500 dark:bg-primary group-hover:bg-primary transition-all duration-200
             rounded-md w-[13px] h-0.5 inline-block"
          ></span>
          <span
            className="bg-zinc-500 dark:bg-primary group-hover:bg-primary transition-all duration-200
             rounded-md w-[16px] h-0.5 inline-block"
          ></span>
          <span
            className="bg-zinc-500 dark:bg-primary group-hover:bg-primary transition-all duration-200
             rounded-md w-[13px] h-0.5 inline-block"
          ></span>
        </div>
        <div className="w-[1px] h-[20px] bg-zinc-300 dark:bg-zinc-700"></div>
      </div>
    </>
  );
};
export default MenuIcon;
