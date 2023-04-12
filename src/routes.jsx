import {
  HomeIcon,
  TableCellsIcon,

} from "@heroicons/react/24/solid";
import { Tables, Create } from "@/pages/dashboard";

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
        path: "/",
        element: <Tables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "create user",
        path: "/create",
        element: <Create />,
      },
      // {
      //   // icon: <TableCellsIcon {...icon} />,
      //   // name: "Chat Managment",
      //   path: "/streamline",
      //   element: <ContactForm2 />,
      // },
      // {
      //   // icon: <TableCellsIcon {...icon} />,
      //   // name: "Chat Managment",
      //   path: "/sendsquared",
      //   element: <ContactForm3 />,
      // },
      // {
      //   // icon: <TableCellsIcon {...icon} />,
      //   // name: "Chat Managment",
      //   path: "/highlevel",
      //   element: <ContactForm4 />,
      // },
    ],
  },
];

export default routes;
