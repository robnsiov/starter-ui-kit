import {
  IconInbox,
  IconListDetails,
  IconUserCircle,
} from "@tabler/icons-react";
import { RoutesImpl } from "./types";

const routes: RoutesImpl = [
  { title: "account", href: "/", icon: IconUserCircle },
  { title: "inbox", href: "/inbox", icon: IconInbox },
  { title: "taskBoard", href: "/taskboard", icon: IconListDetails },
];

export default routes;
