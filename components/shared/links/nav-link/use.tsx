import activePathState from "@/context/active-path";
import { useRecoilValue } from "recoil";

const useNavLink = () => {
  const activePath = useRecoilValue(activePathState);
  return { activePath };
};
export default useNavLink;
