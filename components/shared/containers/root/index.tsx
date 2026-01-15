"use client";
import OverlayContainer from "../overlay";
import RootContainerImpl from "./types";
import useRootContainer from "./use";

const RootContainer = ({ children }: RootContainerImpl) => {
  useRootContainer();
  return (
    <>
      <OverlayContainer />
      {children}
    </>
  );
};

export default RootContainer;
