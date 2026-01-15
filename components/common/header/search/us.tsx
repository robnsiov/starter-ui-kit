import { useDebouncedState, useDidUpdate } from "@mantine/hooks";
import { useState } from "react";
const useSearch = () => {
  const [openSearchbar, setOpenSearchbar] = useState(false);
  const [inputValue, setInputValue] = useDebouncedState("", 200);

  useDidUpdate(() => {
    // call api
  }, [inputValue]);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // nothing here :)
  };
  return {
    openSearchbar,
    setOpenSearchbar,
    formSubmit,
    inputValue,
    setInputValue,
  };
};
export default useSearch;
