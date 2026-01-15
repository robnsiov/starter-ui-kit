import useActivePathStore from "@/context/active-path";

const useNavLink = () => {
  const { activePath } = useActivePathStore();
  return { activePath };
};
export default useNavLink;
