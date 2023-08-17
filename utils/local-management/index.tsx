interface localManagementImpl {
  key: string;
}
type localManagementOutImpl = [string | null, (data: string) => void];

const localManagement = ({
  key,
}: localManagementImpl): localManagementOutImpl => {
  const get =
    typeof localStorage === "undefined" ? "" : localStorage.getItem(key);
  const setLocal = (data: string) => {
    if (typeof localStorage !== "undefined") localStorage.setItem(key, data);
  };
  return [get, setLocal];
};

export default localManagement;
