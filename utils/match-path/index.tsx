function countSlashes(str: string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "/") {
      count++;
    }
  }
  return count;
}
const matchPath = (href: string, pathname: string) => {
  let mainPathname = "";
  const slashCount = countSlashes(pathname);
  if (slashCount === 1) mainPathname = "/";
  else {
    const withoutFirstSlash = pathname.slice(1);
    mainPathname = pathname.slice(withoutFirstSlash.indexOf("/"));
  }
  return mainPathname === href;
};

export default matchPath;
