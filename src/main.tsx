import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./pages/About";
import Rush from "./pages/Rush";
import Executives from "./pages/Executives";
import Philanthropy from "./pages/Philanthropy";
import Contact from "./pages/Contact";
import CorporatePartners from "./pages/CorporatePartners";
import Brothers from "./pages/Brothers";
import RootLayout from "./shared/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <About /> },
      { path: "/about", element: <About /> },
      { path: "/rush", element: <Rush /> },
      { path: "/brothers", element: <Brothers /> },
      { path: "/executives", element: <Executives /> },
      { path: "/philanthropy", element: <Philanthropy /> },
      { path: "/corporate-partners", element: <CorporatePartners /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
