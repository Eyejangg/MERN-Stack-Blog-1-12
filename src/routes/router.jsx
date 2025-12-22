import { createBrowserRouter } from "react-router";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import MainLayouts from "../layouts/MainLayouts";
import Post from "../pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/createpost",
        element: <CreatePost />,
      },
      {
        path: "/editpost",
        element: <EditPost />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
