import { Icon } from "@tabler/icons-react";

export default interface TabImpl {
  Icon: Icon;
  active: boolean;
  primaryCL: string | undefined;
  title: string;
  size?: string;
  onClick?: () => void;
}
