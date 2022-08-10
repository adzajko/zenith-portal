import React from "react";
import { Navigate, RouteProps } from "react-router-dom";
import { SplashScreenContainer } from "../features/SplashScreen/SplashScreenContainer";
import DashboardContainer from "../features/Dashboard/DashboardContainer";

export enum RouteNames {
  WELCOME = "/welcome",
  DASHBOARD = "/dashboard",
  INDEX = "/"
}

interface ApplicationRoute extends RouteProps {
  isPrivate?: boolean;
}

export const ROUTES: ApplicationRoute[] = [
  {
    path: RouteNames.INDEX,
    index: true,
    element: <Navigate to={RouteNames.WELCOME} />
  },
  {
    path: RouteNames.WELCOME,
    element: <SplashScreenContainer />,
    isPrivate: false
  },
  {
    path: RouteNames.DASHBOARD,
    element: <DashboardContainer />,
    isPrivate: true
  }
];
