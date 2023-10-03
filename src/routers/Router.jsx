import React from "react";
import { useRoutes } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout/CustomerLayout";
import Home from "../pages/Home/Home";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import AuthGuard from "../guards/AuthGuard";
import Booking from "../pages/Booking/Booking";
import NoAuthGuard from "../guards/NoAuthGuard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminGuard from "../guards/AdminGuard";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import MovieManage from "../pages/MovieManage/MovieManage";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <CustomerLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/detail/:id",
          element: <MovieDetail />,
        },
        {
          path: "/ticketroom/:id",
          element: (
            <AuthGuard>
              <Booking />
            </AuthGuard>
          ),
        },
        {
          path: "/login",
          element: (
            <NoAuthGuard>
              <Login />
            </NoAuthGuard>
          ),
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path:"/admin",
      element:(
        <AdminGuard>
          <AdminLayout/>
        </AdminGuard>
      ),
      children:[
        {
          path:"/admin",
          element:<MovieManage/>
        }
      ]
    }
  ]);
  return routing;
}
