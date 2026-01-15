import localManagement from "@/utils/local-management";

const useHeader = () => {
  const [border] = localManagement({ key: "border" });
  const [layout] = localManagement({ key: "layout" });
  return { layout, border };
};
export default useHeader;
