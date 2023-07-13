import sidebarState from "@/context/toggle-sidebar";
import { useDidUpdate } from "@mantine/hooks";
import { usePathname } from "next/navigation";
import { useRecoilState } from "recoil";

const useDashboardContainer = () => {
  const pathname = usePathname();
  const [_, setSidebarState] = useRecoilState(sidebarState);
  useDidUpdate(() => {
    setSidebarState({ close: true });
  }, [pathname]);
  return;
};
export default useDashboardContainer;
