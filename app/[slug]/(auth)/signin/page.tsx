import Signin from "@/components/pages/signin";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-in",
};

const Page = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default Page;
