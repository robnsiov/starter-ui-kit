import Header from "@/components/common/header";
import Sidebar from "@/components/common/sidebar";
import RootContainerImpl from "./types";

const Container = ({ children }: RootContainerImpl) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div>{children}</div>
    </>
  );
};

export default Container;
