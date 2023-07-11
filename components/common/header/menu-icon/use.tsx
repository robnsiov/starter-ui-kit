import sidebarState from "@/context/toggle-sidebar";
import { useRecoilState } from "recoil";
const useMenuIcon = () => {
  const [_, setSidebar] = useRecoilState(sidebarState);
  return { setSidebar };
};
export default useMenuIcon;
