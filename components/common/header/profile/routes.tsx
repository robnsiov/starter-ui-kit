import { RoutesImpl } from "./types";
import { DirectInbox, Profile, TaskSquare } from "iconsax-react";

const routes: RoutesImpl = [
  { title: "account", href: "/", icon: Profile },
  { title: "inbox", href: "/inbox", icon: DirectInbox },
  { title: "taskBoard", href: "/board", icon: TaskSquare },
];

export default routes;
