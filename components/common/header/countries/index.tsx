import ReactLangFlag from "react-country-flag";
import MotionDropDown from "@/components/shared/dropdowns/motion-dropdown";
import useCountries from "./use";
import { LANGS, languages } from "@/constants/settings/types";
import { Fragment } from "react";

const Countries = () => {
  const { selectedLang, langsToArray, setSelectedLang } = useCountries();
  return (
    <>
      <div className="relative ms-3">
        <MotionDropDown
          className="absolute top-7 min-w-[120px] rounded-md right-0 
               z-50  border-[1px] border-zinc-200/50 bg-white"
          childrenTagName=".country"
          header={
            <div className="flex justify-start items-center cursor-pointer group">
              <ReactLangFlag
                countryCode={languages[selectedLang].countryCode}
                svg
                className="me-2 md:me-1 md:scale-125"
              />
              <span
                className="font-semibold text-sm 
              group-hover:text-primary transition-all duration-200 md:hidden"
              >
                {languages[selectedLang].countryCode}
              </span>
            </div>
          }
        >
          {langsToArray.map(([key, value]) => (
            <Fragment key={key}>
              {selectedLang !== key && (
                <div
                  onClick={() => setSelectedLang(key as LANGS)}
                  className="country  p-2 flex justify-start 
                items-center cursor-pointer hover:text-white hover:bg-primary 
                border-b-[1px] border-zinc-200/50"
                >
                  <ReactLangFlag
                    countryCode={value.countryCode}
                    svg
                    className="me-2"
                  />
                  <span className="text-sm font-semibold">{key}</span>
                </div>
              )}
            </Fragment>
          ))}
        </MotionDropDown>
      </div>
    </>
  );
};
export default Countries;
