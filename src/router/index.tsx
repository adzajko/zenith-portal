import React from "react";
import { BrowserRouter, Navigate, Route, RouteProps, Routes } from "react-router-dom";
import { selectLoggedIn } from "../features/authentication/authSlice";
import { useAppSelector } from "../store/hooks";
import DashboardContainer from "../features/Dashboard/DashboardContainer";
import { NotFound } from "../ui/NotFound";

interface ApplicationRoute extends RouteProps {
  isPrivate: boolean;
}

const ROUTES: ApplicationRoute[] = [
  {
    path: "/",
    index: true,
    element: <DashboardContainer />,
    isPrivate: false
  }
];

function ApplicationRouter(): JSX.Element {
  const isLoggedIn = useAppSelector(selectLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => {
          if (!route.isPrivate) return <Route {...route} key={route.path} />;
          return isLoggedIn ? (
            <Route {...route} key={route.path} />
          ) : (
            <Navigate to="/login" replace />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRouter;
