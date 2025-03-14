import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </StrictMode>
);
