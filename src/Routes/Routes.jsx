import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Register from "../Component/Register";
import Login from "../Component/Login";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Component/Loading";
import Error from "../Component/Error";
import MainLayOut from "../Pages/MainLayOut";
import Gallery from "../Component/Gallery";
import AddFood from "../Component/AddFood";
import AllFoods from "../Component/AllFoods";
import FoodDetails from "../Component/FoodDetails";
import FoodPurchasePage from "../Component/FoodPurchasePage";
import Myfood from "../Component/Myfood";
import UpdateFood from "../Component/UpdateFood";
import MyOrder from "../Component/MyOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // register and login routes
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logIn",
        element: <Login />,
      },
      {
        path: "/allFoods",
        element: <AllFoods />,
      },
      {
        path: "/gallery",
        Component: Gallery,
      },
      {
        path: "Single_Food_Page/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/getfood/${params.id}`),
        element: <FoodDetails></FoodDetails>,
      },
      {
        path: "/addfood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myorder/:email",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },

      // {
      //   path: "/addfood/:email",
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:3000/addfood/${params.email}`),
      //   element: <div>hello world</div>,
      // },
      
      //  update food before

      {
        path: "/updatefood/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/myfood/:email",
        element: (
          <PrivateRoute>
            <Myfood></Myfood>
          </PrivateRoute>
        ),
      },

      // purchasefood with id
      {
        path: "/purchasefood/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/getfood/${params.id}`),
        element: (
          <PrivateRoute>
            <FoodPurchasePage></FoodPurchasePage>,
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
