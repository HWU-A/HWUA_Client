import React from "react";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const SubPage = lazy(() => import("./pages/SubPage"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Mypage = lazy(() => import("./pages/Mypage"));

const RouterConfig = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/mypage",
      element: <Mypage />,
    },
    {
      path: "/profile",
      element: <Profile />,
      children: [
        {
          path: "sub",
          element: <SubPage />,
        },
      ],
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default RouterConfig;
