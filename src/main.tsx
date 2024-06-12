import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.css";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./modules/routes/Routes.tsx";
import { AuthProvider } from "./modules/auth/useAuth.tsx";

const router = AppRoutes();
const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error loading routes</div>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <React.Suspense fallback={<Loading />}>
        <RouterProvider router={router} fallbackElement={<Error />} />
      </React.Suspense>
    </AuthProvider>
  </React.StrictMode>
);
