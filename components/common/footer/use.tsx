const useFooter = () => {
  const layout = localStorage.getItem("layout");
  return { layout };
};
export default useFooter;
