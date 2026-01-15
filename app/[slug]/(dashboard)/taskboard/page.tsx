import TaskBoard from "@/components/pages/task-board";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskboard",
};

const Page = () => {
  return (
    <>
      <TaskBoard />
    </>
  );
};
export default Page;
