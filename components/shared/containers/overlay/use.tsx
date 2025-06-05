import useSidebarStore from "@/context/toggle-sidebar";
import localManagement from "@/utils/local-management";
import { useViewportSize } from "@mantine/hooks";

const useOverlayContainer = () => {
  const { width: viewportWidth } = useViewportSize();
  const { setSidebar, sidebar } = useSidebarStore();
  const [border] = localManagement({ key: "border" });
  return {
    sidebarStatus: sidebar,
    setSidebarStatus: setSidebar,
    viewportWidth,
    border,
  };
};
export default useOverlayContainer;
