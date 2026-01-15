import localManagement from "@/utils/local-management";

const useFooter = () => {
  const [border] = localManagement({ key: "border" });
  const [layout] = localManagement({ key: "layout" });
  return { layout, border };
};
export default useFooter;
