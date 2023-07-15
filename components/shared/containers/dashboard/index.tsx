"use client";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Settings from "@/components/common/settings";
import Sidebar from "@/components/common/sidebar";
import DashboardContainerImpl from "./types";
import useDashboardContainer from "./use";

const DashboardContainer = ({ children }: DashboardContainerImpl) => {
  useDashboardContainer();
  return (
    <>
      <Header />
      <Sidebar />
      <Settings />
      <div className="w-full min-h-screen"> {children}</div>
      <Footer />
    </>
  );
};
export default DashboardContainer;
