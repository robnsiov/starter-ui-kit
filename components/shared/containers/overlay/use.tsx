import sidebarState from "@/context/toggle-sidebar";
import localManagement from "@/utils/local-management";
import { useViewportSize } from "@mantine/hooks";
import { useRecoilState } from "recoil";

const useOverlayContainer = () => {
  const { width: viewportWidth } = useViewportSize();
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarState);
  const [border] = localManagement({ key: "border" });
  return { sidebarStatus, setSidebarStatus, viewportWidth, border };
};
export default useOverlayContainer;
