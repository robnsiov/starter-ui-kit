"use client";
import { RecoilRoot } from "recoil";
import RecoilContainerImpl from "./types";

const RecoilContainer = ({ children }: RecoilContainerImpl) => {
  return (
    <>
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
};

export default RecoilContainer;
