import Inbox from "@/components/pages/inbox";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox",
};

const Page = () => {
  return (
    <>
      <Inbox />
    </>
  );
};
export default Page;
