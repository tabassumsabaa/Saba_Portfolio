import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

