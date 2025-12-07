// src/routes.tsx
import type { RouteObject } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

export const routes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/", element: <div></div> },
];