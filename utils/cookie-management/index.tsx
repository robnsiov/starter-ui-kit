import CookieManagementImpl, { CookieManagementOutImpl } from "./types";

const cookieManagement = ({
  key,
}: CookieManagementImpl): CookieManagementOutImpl => {
  function set(cvalue: string, exdays: number = 1360) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + cvalue + ";" + expires + ";path=/";
  }
  const getName = () => {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  const get = getName();
  return [get, set];
};

export default cookieManagement;
