import { createBrowserRouter } from "react-router";
import MainLayOut from "../Pages/MainlayOut";
import Home from "../Pages/Home";
import Allgroups from "../Component/Allgroups";
import CreateGroup from "../Component/CreateGroup";
import MyGroup from "../Component/MyGroup";
import Register from "../Component/Register";
import Login from "../Component/Login";
import GroupDetails from "../Component/GroupDetails";
import UpdateGroup from "../Component/UpdateGroup";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Component/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <div>error page</div>,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/creategroups"),
        element: <Home />,
      },
      {
        path: "/allGroups",
        loader: () => fetch("http://localhost:3000/creategroups/all-data"),
        element: (
          <PrivateRoute>
            <Allgroups />
          </PrivateRoute>
        ),
      },
      {
        path: "createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "myGroups/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/my-groups/${params.email}`),
        element: (
          <PrivateRoute>
            <MyGroup></MyGroup>
          </PrivateRoute>
        ),
      },

      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logIn",
        element: <Login />,
      },
      {
        path: "/group/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/creategroups/${params.id}`),
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateGroup/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/creategroups/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateGroup> </UpdateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <div>error page</div>,
      },
    ],
  },
]);
