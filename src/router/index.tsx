import React from "react";
import { BrowserRouter, Navigate, Route, RouteProps, Routes } from "react-router-dom";
import { selectLoggedIn } from "../features/authentication/authSlice";
import { useAppSelector } from "../store/hooks";
import DashboardContainer from "../features/Dashboard/DashboardContainer";
import { NotFound } from "../ui/NotFound";
import { SplashScreenContainer } from "../features/SplashScreen/SplashScreenContainer";
import { RouteNames } from "./routeNames";

interface ApplicationRoute extends RouteProps {
  isPrivate?: boolean;
}

const ROUTES: ApplicationRoute[] = [
  {
    path: RouteNames.INDEX,
    index: true,
    element: <Navigate to="/welcome" />
  },
  {
    path: RouteNames.WELCOME,
    index: true,
    element: <SplashScreenContainer />,
    isPrivate: false
  },
  {
    path: RouteNames.DASHBOARD,
    element: <DashboardContainer />,
    isPrivate: true
  }
];

function ApplicationRouter(): JSX.Element {
  const isLoggedIn = useAppSelector(selectLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            {...route}
            key={route.path}
            element={
              !route.isPrivate || (route.isPrivate && isLoggedIn) ? (
                route.element
              ) : (
                <Navigate to={RouteNames.WELCOME} />
              )
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRouter;
