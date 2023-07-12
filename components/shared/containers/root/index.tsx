"use client";
import Header from "@/components/common/header";
import Sidebar from "@/components/common/sidebar";
import RecoilContainer from "../recoil";
import RootContainerImpl from "./types";
import useRootContainer from "./use";
import cls from "classnames";
import OverlayContainer from "../overlay";

const RootContainer = ({ children }: RootContainerImpl) => {
  const {} = useRootContainer();
  return (
    <>
      <RecoilContainer>
        <div>
          <OverlayContainer />
          {children}
        </div>
      </RecoilContainer>
    </>
  );
};

export default RootContainer;
