"use client";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Settings from "@/components/common/settings";
import Sidebar from "@/components/common/menus/sidebar";
import DashboardContainerImpl from "./types";
import useDashboardContainer from "./use";
import RowMenu from "@/components/common/menus/row-menu";
import IconMenu from "@/components/common/menus/icon-menu";

const DashboardContainer = ({ children }: DashboardContainerImpl) => {
  useDashboardContainer();
  const layout = localStorage.getItem("layout");
  return (
    <>
      <Header />
      {layout === "cuba" && <Sidebar />}
      {layout === "singapore" && <RowMenu />}
      {(layout === "tokyo" || layout === "moscow") && <IconMenu />}
      <Settings />
      <div className="w-full min-h-screen"> {children}</div>
      <Footer />
    </>
  );
};
export default DashboardContainer;
