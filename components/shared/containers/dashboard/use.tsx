import useSidebarStore from "@/context/toggle-sidebar";
import localManagement from "@/utils/local-management";
import { useDidUpdate } from "@mantine/hooks";
import { usePathname } from "next/navigation";

const useDashboardContainer = () => {
  const pathname = usePathname();
  const [layout] = localManagement({ key: "layout" });
  const { setSidebar } = useSidebarStore();
  useDidUpdate(() => {
    setSidebar({ close: true });
  }, [pathname]);
  return { layout };
};
export default useDashboardContainer;
