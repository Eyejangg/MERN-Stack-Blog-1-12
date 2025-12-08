import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/index.jsx";

function App() {
  const router = Router();
  return <RouterProvider router={router} />;
}

export default App;
