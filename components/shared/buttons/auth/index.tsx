import { AnimatePresence, motion } from "framer-motion";
import { Oval } from "react-loader-spinner";
import AuthButtonImpl from "./types";

const AuthButton = ({ loading, title }: AuthButtonImpl) => {
  return (
    <>
      <button
        className="w-full bg-primary opacity-90 text-white p-2 
          rounded-md mt-6 text-sm transition-all
           duration-200 hover:opacity-100 flex justify-center items-center"
      >
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-sm me-1"
              exit={{ scale: 0 }}
              key={"container"}
            >
              <Oval
                width={16}
                secondaryColor="#eef2ff"
                height={16}
                color="#fff"
                strokeWidth={5}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {title}
      </button>
    </>
  );
};
export default AuthButton;
