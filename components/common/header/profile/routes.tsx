import { RoutesImpl } from "./types";
import { DirectInbox, Profile, TaskSquare } from "iconsax-react";

const routes: RoutesImpl = [
  { title: "Account", href: "/", icon: Profile },
  { title: "Inbox", href: "/", icon: DirectInbox },
  { title: "Taskboard", href: "/", icon: TaskSquare },
];

export default routes;
