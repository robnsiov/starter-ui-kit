import Home from "@/components/pages/home";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const Page = () => {
  return (
    <>
      <Home />
    </>
  );
};
export default Page;
