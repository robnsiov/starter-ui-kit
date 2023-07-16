"use client";
import RecoilContainer from "../recoil";
import RootContainerImpl from "./types";
import useRootContainer from "./use";
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
