import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import "./index.css";
import { UserContextProvider } from "./context/UserContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
