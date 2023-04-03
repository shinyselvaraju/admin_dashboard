import {
  HomeIcon,
  TableCellsIcon,

} from "@heroicons/react/24/solid";
import { Home, Tables, Create} from "@/pages/dashboard";

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
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "create user",
        path: "/create",
        element: <Create />,
      },
    ],
  },
];

export default routes;
