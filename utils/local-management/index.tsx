import LocalManagementImpl, { LocalManagementOutImpl } from "./types";

const localManagement = ({
  key,
}: LocalManagementImpl): LocalManagementOutImpl => {
  const get =
    typeof localStorage === "undefined" ? "" : localStorage.getItem(key);
  const set = (data: string) => {
    if (typeof localStorage !== "undefined") localStorage.setItem(key, data);
  };
  return [get, set];
};

export default localManagement;
