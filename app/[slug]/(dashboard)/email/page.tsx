import Email from "@/components/pages/email/page";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email",
};

const Page = () => {
  return (
    <>
      <Email />
    </>
  );
};
export default Page;
