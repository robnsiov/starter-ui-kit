"use client";
import Header from "@/components/common/header";
import Sidebar from "@/components/common/sidebar";
import RootContainerImpl from "./types";
import useRootContainer from "./use";

const RootContainer = ({ children }: RootContainerImpl) => {
  const {} = useRootContainer();
  return (
    <>
      <Header />
      <Sidebar />
      <div>{children}</div>
    </>
  );
};

export default RootContainer;
