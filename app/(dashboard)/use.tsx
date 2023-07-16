import treeForceUpdateState from "@/context/tree-force-update";
import { useForceUpdate } from "@mantine/hooks";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const useDashboardLayout = () => {
  const forceUpdate = useForceUpdate();
  const [_, setTreeForceUpdate] = useRecoilState(treeForceUpdateState);
  useEffect(() => {
    setTreeForceUpdate({ done: forceUpdate });
  }, []);
  return;
};

export default useDashboardLayout;
