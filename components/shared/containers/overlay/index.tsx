import useOverlayContainer from "./use";
import cls from "classnames";

const OverlayContainer = () => {
  const { sidebarStatus, setSidebarStatus, viewportWidth, border } =
    useOverlayContainer();
  return (
    <>
      <div
        onClick={() => setSidebarStatus({ close: true })}
        className={cls(
          `transition-all duration-200
           fixed bg-zinc-600/50 inset-0 z-[41] dark:bg-zinc-900/95`,
          sidebarStatus.close || viewportWidth > 767
            ? "opacity-0 invisible"
            : "opacity-100 visible",
          { "rounded-t-xl inset-[10px] bottom-0": border === "true" }
        )}
      ></div>
    </>
  );
};
export default OverlayContainer;
