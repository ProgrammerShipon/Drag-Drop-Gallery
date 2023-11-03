import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routers;
