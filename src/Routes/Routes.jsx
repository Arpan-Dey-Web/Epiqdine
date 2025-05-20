import { createBrowserRouter } from "react-router";
import MainLayOut from "../Pages/MainlayOut";
import Home from "../Pages/Home";
import Allgroups from "../Component/Allgroups";
import CreateGroup from "../Component/CreateGroup";
import MyGroup from "../Component/MyGroup";
import Register from "../Component/Register";
import Login from "../Component/Login";

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
        path: "/allGroups",
        Component: Allgroups,
      },
      {
        path: "createGroup",
        Component: CreateGroup,
      },
      {
        path: "myGroups",
        Component: MyGroup,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "logIn",
        Component: Login,
      },
    ],
  },
]);
