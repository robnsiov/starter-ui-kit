import { useState } from "react";
const useAuthInput = (inpType: string) => {
  const [type, setType] = useState(inpType);
  return { type, setType };
};
export default useAuthInput;
