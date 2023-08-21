import sidebarState from "@/context/toggle-sidebar";
import localManagement from "@/utils/local-management";
import { useDidUpdate } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { useRecoilState } from "recoil";

const useDashboardContainer = () => {
  const pathname = usePathname();
  const [layout] = localManagement({ key: "layout" });
  const [_, setSidebarState] = useRecoilState(sidebarState);
  useDidUpdate(() => {
    setSidebarState({ close: true });
  }, [pathname]);
  return { layout };
};
export default useDashboardContainer;
