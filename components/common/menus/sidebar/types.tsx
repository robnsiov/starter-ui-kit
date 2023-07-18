import { Icon } from "iconsax-react";

export type RoutesImpl = Array<{
  subject: string;
  id: number;
  children: Array<{
    title: string;
    label?: string;
    href: string;
    id: number;
    icon: Icon;
    children?: Array<{
      title: string;
      href: string;
      id: number;
      children?: Array<{ title: string; href: string; id: number }>;
    }>;
  }>;
}>;
