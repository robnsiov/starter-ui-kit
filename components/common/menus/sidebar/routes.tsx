import { Home2 } from "iconsax-react";
import { RoutesImpl } from "./types";

const routes: RoutesImpl = [
  {
    subject: "Dashborad",
    id: 0,
    children: [
      { title: "Default", href: "/def", label: "New", id: 1, icon: Home2 },
      { title: "Eccomerce", href: "/ecc", id: 2, icon: Home2 },
      {
        title: "Forms",
        href: "/",
        id: 3,
        icon: Home2,
        children: [
          {
            title: "FormConrols",
            href: "#",
            id: 4,
            children: [
              { title: "FormValidation", href: "/", id: 5 },
              { title: "baseInput", href: "/base-inp", id: 6 },
            ],
          },
          {
            title: "Email",
            href: "/email",
            id: 7,
          },
        ],
      },
    ],
  },
];
export default routes;
