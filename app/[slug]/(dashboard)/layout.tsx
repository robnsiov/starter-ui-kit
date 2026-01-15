import RootDashboardLayout from "@/components/shared/containers/root-dashboard";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <RootDashboardLayout slug={slug}>{children}</RootDashboardLayout>;
};

export default Layout;
