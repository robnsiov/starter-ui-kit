"use client";
import RecoilContainer from "../recoil";
import RootContainerImpl from "./types";
import useRootContainer from "./use";
import OverlayContainer from "../overlay";

const RootContainer = ({ children }: RootContainerImpl) => {
  useRootContainer();
  return (
    <>
      <RecoilContainer>
        <OverlayContainer />
        {children}
      </RecoilContainer>
    </>
  );
};

export default RootContainer;
