import isAuthenticatedState from "@/context/is-authenticated";
import treeForceUpdateState from "@/context/tree-force-update";
import localManagement from "@/utils/local-management";
import { useForceUpdate, useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useDashboardLayout = (slug: string) => {
  const router = useRouter();
  const isAuthenticated = isAuthenticatedState();
  const match = useMediaQuery("(max-width:1023px)");
  const forceUpdate = useForceUpdate();
  const [border] = localManagement({ key: "border" });
  const [layout] = localManagement({ key: "layout" });
  const { treeForceUpdate, setTreeForceUpdate } = treeForceUpdateState();
  useEffect(() => {
    setTreeForceUpdate(!treeForceUpdate);
  }, []);

  useEffect(() => {
    if (match)
      window.document.documentElement.style.setProperty("--border", "10px");
    else window.document.documentElement.style.setProperty("--border", "100px");
    setTreeForceUpdate(!treeForceUpdate);
  }, [match]);

  useEffect(() => {
    if (!isAuthenticated) router.push(`/${slug}/signin`);
  }, []);

  return { border, layout, isAuthenticated };
};

export default useDashboardLayout;
