import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./Component/Context/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "./Component/Context/ThemeProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
