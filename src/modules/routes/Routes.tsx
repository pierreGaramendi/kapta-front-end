import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./Protectedroute";
import { Login } from "@/modules/auth/pages/Login";
import { Signup } from "@/modules/auth/pages/Signup";
import { App } from "@/App";
import { Home } from "@/modules/home/Home";
import { WorkspacesAndBoardsPage } from "../workspace/WorkspacesAndBoardsPage";
import { Board } from "../board/Board";

export const AppRoutes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "tableros",
          element: (
            <ProtectedRoute>
              <WorkspacesAndBoardsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "tablero/:id",
          element: (
            <ProtectedRoute>
              <Board />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
};
