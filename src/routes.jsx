import {
  HomeIcon,
  TableCellsIcon,

} from "@heroicons/react/24/solid";
import { Home, Tables, Create , Chats } from "@/pages/dashboard";
import { ContactForm2, ContactForm3, ContactForm4 } from "./pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "User Management",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "create user",
        path: "/create",
        element: <Create />,
      },
      {
        // icon: <TableCellsIcon {...icon} />,
        // name: "Chat Managment",
        path: "/streamline",
        element: <ContactForm2 />,
      },
      {
        // icon: <TableCellsIcon {...icon} />,
        // name: "Chat Managment",
        path: "/sendsquared",
        element: <ContactForm3 />,
      },
      {
        // icon: <TableCellsIcon {...icon} />,
        // name: "Chat Managment",
        path: "/highlevel",
        element: <ContactForm4 />,
      },
    ],
  },
];

export default routes;
