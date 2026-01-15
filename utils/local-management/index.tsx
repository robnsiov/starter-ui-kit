import LocalManagementImpl, { LocalManagementOutImpl } from "./types";

const localManagement = ({
  key,
}: LocalManagementImpl): LocalManagementOutImpl => {
  const get =
    typeof window === "undefined" ? "" : window.localStorage.getItem(key);
  const set = (data: string) => {
    if (typeof window !== "undefined") window.localStorage.setItem(key, data);
  };
  return [get, set];
};

export default localManagement;
