import Header from "@/components/common/header";
import Sidebar from "@/components/common/sidebar";
import DashboardContainerImpl from "./types";

const DashboardContainer = ({ children }: DashboardContainerImpl) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
};
export default DashboardContainer;
