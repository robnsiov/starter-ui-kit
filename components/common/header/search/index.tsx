import { SearchNormal1 } from "iconsax-react";
import { CgClose } from "react-icons/cg";
import cls from "classnames";
import useSearch from "./us";

const Search = () => {
  const {
    openSearchbar,
    setOpenSearchbar,
    formSubmit,
    inputValue,
    setInputValue,
  } = useSearch();
  return (
    <>
      <form
        onSubmit={formSubmit}
        className={cls(
          `absolute inset-0 bg-white z-10 flex 
      justify-between items-center py-4 px-6 scale-0 transition-all duration-500`,
          openSearchbar ? "scale-100" : "scale-0"
        )}
      >
        <button type="submit">
          <SearchNormal1 className="text-zinc-500 hover:text-zinc-700 cursor-pointer" />
        </button>
        <input
          defaultValue={inputValue}
          onChange={({ currentTarget: { value } }) => setInputValue(value)}
          className="w-full px-5 outline-none 
          border-none caret-zinc-500 text-zinc-700 placeholder:text-sm"
          placeholder="Search . . ."
          spellCheck={false}
        />
        <CgClose
          onClick={() => setOpenSearchbar(false)}
          className="text-zinc-500 hover:text-zinc-700 cursor-pointer"
        />
      </form>
      <div className="ms-3">
        <SearchNormal1
          onClick={() => setOpenSearchbar(true)}
          className="text-zinc-500 cursor-pointer duration-200 transition-all hover:text-primary"
          size="20 "
        />
      </div>
    </>
  );
};
export default Search;
