import Sidebar from "@/components/common/sidebar";
import RootContainerImpl from "./types";

const Container = ({ children }: RootContainerImpl) => {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  );
};

export default Container;
