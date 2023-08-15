const useHeader = () => {
  const layout = localStorage.getItem("layout");
  return { layout };
};
export default useHeader;
