import { createBrowserRouter } from "react-router";
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
import Error from "../Component/Error";
import MainLayOut from "../Pages/MainLayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://assaignment-10-server-side.vercel.app/creategroups"),
        element: <Home />,
      },
      {
        path: "/allGroups",
        loader: () =>
          fetch(
            "https://assaignment-10-server-side.vercel.app/creategroups/all-data"
          ),
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
          fetch(
            `https://assaignment-10-server-side.vercel.app/my-groups/${params.email}`
          ),
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
          fetch(
            `/https://assaignment-10-server-side.vercel.app/creategroups/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateGroup/:id",
        loader: ({ params }) =>
          fetch(
            `https://assaignment-10-server-side.vercel.app/creategroups/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateGroup> </UpdateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
