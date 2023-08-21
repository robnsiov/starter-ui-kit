import { IconType } from "react-icons/lib";

export default interface TabImpl {
  Icon: IconType;
  active: boolean;
  primaryCL: string | undefined;
  title: string;
  size?: string;
  onClick?: () => void;
}
