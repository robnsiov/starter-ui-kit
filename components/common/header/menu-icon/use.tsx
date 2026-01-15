import useSidebarStore from "@/context/toggle-sidebar";
const useMenuIcon = () => {
  const { setSidebar } = useSidebarStore();
  return { setSidebar };
};
export default useMenuIcon;
