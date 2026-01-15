"use client";

import useTranslate from "@/hooks/use-translate";

const TaskBoard = () => {
  const t = useTranslate("pages");
  return (
    <>
      <p>{t({ key: "taskBoard" })}</p>
    </>
  );
};
export default TaskBoard;
