import treeForceUpdateState from "@/context/tree-force-update";
import { useForceUpdate } from "@mantine/hooks";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import isAuthenticatedState from "@/context/is-authenticated";

const useDashboardLayout = () => {
  const router = useRouter();
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const match = useMediaQuery("(max-width:1023px)");
  const forceUpdate = useForceUpdate();
  const border = localStorage.getItem("border");
  const layout = localStorage.getItem("layout");
  const [forceTreeUpdate, setTreeForceUpdate] =
    useRecoilState(treeForceUpdateState);
  useEffect(() => {
    setTreeForceUpdate({ done: forceUpdate });
  }, []);

  useEffect(() => {
    if (match)
      window.document.documentElement.style.setProperty("--border", "10px");
    else window.document.documentElement.style.setProperty("--border", "100px");
    forceTreeUpdate?.done();
  }, [match]);

  useEffect(() => {
    if (!isAuthenticated) router.push("/signin");
  }, []);

  return { border, layout, isAuthenticated };
};

export default useDashboardLayout;
