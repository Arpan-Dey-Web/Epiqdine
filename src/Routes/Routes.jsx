import { createBrowserRouter } from "react-router";
import MainLayOut from "../Pages/MainlayOut";
import Home from "../Pages/Home";
import Allgroups from "../Component/Allgroups";
import CreateGroup from "../Component/CreateGroup";
import MyGroup from "../Component/MyGroup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allgroups",
        Component: Allgroups,
      },
      {
        path: "creategroup",
        Component: CreateGroup,
      },
      {
        path: "mygroup",
        Component: MyGroup,
      },
    ],
  },
]);
