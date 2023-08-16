const useHeader = () => {
  const layout = localStorage.getItem("layout");
  const border = localStorage.getItem("border");
  return { layout, border };
};
export default useHeader;
