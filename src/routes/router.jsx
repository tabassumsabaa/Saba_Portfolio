import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

import ModernWebDevelopment from "../pages/InsightsPage/MordernWebDev";
import ProblemSolving from "../pages/InsightsPage/ProblemSolving";
import AIDevelopment from "../pages/InsightsPage/AIdev";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "insights/modern-web-development",
        element: <ModernWebDevelopment />
      },
      {
        path: "insights/problem-solving",
        element: <ProblemSolving />
      },
      {
        path: "insights/ai-development",
        element: <AIDevelopment />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
