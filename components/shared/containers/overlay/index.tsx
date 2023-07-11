import useOverlayContainer from "./use";
import cls from "classnames";

const OverlayContainer = () => {
  const { sidebarStatus, setSidebarStatus, viewportWidth } =
    useOverlayContainer();
  return (
    <>
      <div
        onClick={() => setSidebarStatus({ close: true })}
        className={cls(
          `transition-all duration-200
           absolute bg-zinc-600/50 inset-0 z-[41]`,
          sidebarStatus.close || viewportWidth > 767
            ? "opacity-0 invisible"
            : "opacity-100 visible"
        )}
      ></div>
    </>
  );
};
export default OverlayContainer;
