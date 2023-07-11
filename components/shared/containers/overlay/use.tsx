import sidebarState from "@/context/toggle-sidebar";
import { useViewportSize } from "@mantine/hooks";
import { useRecoilState } from "recoil";

const useOverlayContainer = () => {
  const { width: viewportWidth } = useViewportSize();
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarState);
  return { sidebarStatus, setSidebarStatus, viewportWidth };
};
export default useOverlayContainer;
