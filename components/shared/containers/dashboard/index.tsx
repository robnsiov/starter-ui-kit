import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Sidebar from "@/components/common/sidebar";
import DashboardContainerImpl from "./types";

const DashboardContainer = ({ children }: DashboardContainerImpl) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="w-full min-h-screen"> 0{children}</div>
      <Footer />
    </>
  );
};
export default DashboardContainer;
