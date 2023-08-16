import sidebarState from "@/context/toggle-sidebar";
import { useViewportSize } from "@mantine/hooks";
import { useRecoilState } from "recoil";

const useOverlayContainer = () => {
  const { width: viewportWidth } = useViewportSize();
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarState);
  const border = localStorage.getItem("border");
  return { sidebarStatus, setSidebarStatus, viewportWidth, border };
};
export default useOverlayContainer;
