import { usePathname } from "next/navigation";

const useProfile = () => {
  const pathname = usePathname();
  return { pathname };
};

export default useProfile;
