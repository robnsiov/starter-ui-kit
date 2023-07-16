"use client";
import DashboardContainer from "@/components/shared/containers/dashboard";
import useDashboardLayout from "./use";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useDashboardLayout();
  return (
    <>
      <DashboardContainer>{children}</DashboardContainer>
    </>
  );
};

export default Layout;
