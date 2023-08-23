import Validation from "@/components/pages/validation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Validation",
};

const Page = () => {
  return (
    <>
      <Validation />
    </>
  );
};
export default Page;
