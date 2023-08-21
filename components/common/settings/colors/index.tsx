import cls from "classnames";
import useColors from "./use";
import { useRef } from "react";
import ColorsImpl from "./type";

const Colros = ({ closeMenu }: ColorsImpl) => {
  const { color, setColor } = useColors({ closeMenu });

  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (ref.current) {
      const cl = ref.current.value;
      setColor(cl);
    }
  };

  return (
    <>
      <div className="w-full flex justify-start items-center">
        <div
          className="w-[35px] h-[35px] border-zinc-200 
            border-[1px] rounded-md p-[3px] me-2"
        >
          <div className="w-full h-full rounded-md bg-red-200 overflow-hidden">
            <input
              ref={ref}
              type="color"
              defaultValue={color}
              className="w-full h-full bg-white scale-[2]"
            />
          </div>
        </div>
        <div
          onClick={onClick}
          className="px-4 py-1.5 cursor-pointer rounded-md hover:opacity-80
            bg-primary text-white text-sm"
        >
          Apply
        </div>
      </div>
    </>
  );
};
export default Colros;
