import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { selectLoggedIn } from "../features/authentication/authSlice";
import { useAppSelector } from "../store/hooks";
import { NotFound } from "../ui/NotFound";
import { RouteNames, ROUTES } from "./applicationRoutes";

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
