import cls from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import AuthErrorMessageImpl from "./types";
const AuthErrorMessage = ({ error }: AuthErrorMessageImpl) => {
  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="text-sm mt-1 text-red-400"
            exit={{ height: 0 }}
            key={"container"}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default AuthErrorMessage;
