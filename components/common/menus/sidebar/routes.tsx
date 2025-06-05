import {
  IconHome,
  IconInbox,
  IconLayoutBoard,
  IconListDetails,
} from "@tabler/icons-react";
import { RoutesImpl } from "./types";

const routes: RoutesImpl = [
  {
    subject: "dashborad",
    id: 0,
    children: [
      {
        title: "home",
        href: "/",
        id: 0,
        icon: IconHome,
      },
      {
        title: "inbox",
        href: "/inbox",
        label: "new",
        id: 1,
        icon: IconInbox,
      },
      { title: "taskBoard", href: "/taskboard", id: 2, icon: IconListDetails },
      {
        title: "forms",
        href: "#",
        id: 3,
        icon: IconLayoutBoard,
        children: [
          {
            title: "formConrols",
            href: "#",
            id: 4,
            children: [
              { title: "formValidation", href: "/validation", id: 5 },
              { title: "baseInput", href: "/base-inp", id: 6 },
            ],
          },
          {
            title: "email",
            href: "/email",
            id: 7,
          },
        ],
      },
    ],
  },
];
export default routes;
