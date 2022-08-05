import React from "react";
import { BrowserRouter, Navigate, Route, RouteProps, Routes } from "react-router-dom";
import { selectLoggedIn } from "../features/authentication/authSlice";
import { useAppSelector } from "../store/hooks";

interface ApplicationRoute extends RouteProps {
  isPrivate: boolean;
}

const ROUTES: ApplicationRoute[] = [];

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
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRouter;
