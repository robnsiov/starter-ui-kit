import { BiColorFill } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import useInnerSettings from "./use";

const Settings = () => {
  const { setSelectedTab } = useInnerSettings();
  return (
    <>
      <div className="justify-center items-center hidden md:flex">
        <div
          className="relative ms-3"
          onClick={() => setSelectedTab?.done("options")}
        >
          <BiColorFill
            size="20"
            className="text-zinc-500 cursor-pointer
                duration-200 transition-all hover:text-primary dark:text-zinc-100"
          />
        </div>
        <div
          className="relative ms-3 me-1"
          onClick={() => setSelectedTab?.done("layouts")}
        >
          <FiSettings
            size="20"
            className="text-zinc-500 cursor-pointer
            duration-200 transition-all hover:text-primary dark:text-zinc-100"
          />
        </div>
      </div>
    </>
  );
};
export default Settings;
