import ReactCountryFlag from "react-country-flag";
import MotionDropDown from "@/components/shared/dropdowns/motion-dropdown";

const Countries = () => {
  return (
    <>
      <div className="relative ms-3">
        <MotionDropDown
          className="absolute top-7 w-[100px] rounded-md right-0 
               z-50  border-[1px] border-zinc-200/50"
          childrenTagName=".country"
          header={
            <div className="flex justify-start items-center cursor-pointer">
              <ReactCountryFlag countryCode="US" svg className="me-2" />
              <span className="font-semibold text-sm">EN</span>
            </div>
          }
        >
          <div className="country w-full p-2 flex justify-start items-center cursor-pointer">
            <ReactCountryFlag countryCode="ES" svg className="me-2" />
            <span className="text-sm font-semibold">Español</span>
          </div>
          <div className="country w-full p-2 flex justify-start items-center cursor-pointer">
            <ReactCountryFlag countryCode="FR" svg className="me-2" />
            <span className="text-sm font-semibold">Français</span>
          </div>
          <div className="country w-full p-2 flex justify-start items-center cursor-pointer">
            <ReactCountryFlag countryCode="KW" svg className="me-2" />
            <span className="text-sm font-semibold">لعربية</span>
          </div>
        </MotionDropDown>
      </div>
    </>
  );
};
export default Countries;
