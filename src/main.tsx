import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import { RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import StudentDetail from "./components/StudentDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/student-detail",
    element: <StudentDetail />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
