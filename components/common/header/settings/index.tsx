// @ts-nocheck
import { IconPaletteFilled, IconSettings } from "@tabler/icons-react";
import useInnerSettings from "./use";

const Settings = () => {
  const { setSettingsTab } = useInnerSettings();
  return (
    <>
      ``
      <div className="justify-center items-center hidden md:flex">
        <div
          className="relative ms-3"
          onClick={() => setSettingsTab?.done("options")}
        >
          <IconPaletteFilled
            size="20"
            className="text-zinc-500 cursor-pointer
                duration-200 transition-all hover:text-primary dark:text-zinc-100"
          />
        </div>
        <div
          className="relative ms-3 me-1"
          onClick={() => setSettingsTab?.done("layouts")}
        >
          <IconSettings
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
