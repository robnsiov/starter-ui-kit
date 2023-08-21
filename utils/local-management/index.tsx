// @ts-ignore
import LocalManagementImpl, { LocalManagementOutImpl } from "./types";

const localManagement = ({
  key,
}: LocalManagementImpl): LocalManagementOutImpl => {
  const get =
    typeof window !== "undefined" && typeof localStorage !== "undefined"
      ? ""
      : localStorage.getItem(key);
  const set = (data: string) => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined")
      localStorage.setItem(key, data);
  };
  return [get, set];
};

export default localManagement;
