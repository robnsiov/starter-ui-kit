import DashboardContainer from "@/components/shared/containers/dashboard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardContainer>{children}</DashboardContainer>
    </>
  );
};

export default Layout;
