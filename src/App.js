import { createHashRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Homepage from "./Homepage";
import Illustrations from "./components/Projects/IllustrationsPage/Illustrations";
import ErrorPage from "./ErrorPage";
import ProjectPage from "./components/Projects/ProjectPages/ProjectPage";

const router = createHashRouter([
  {
    errorElement: <ErrorPage />,
    path: "/",
    element: <Homepage />,
  },
  {
    errorElement: <ErrorPage />,
    path: "/illustrations",
    element: <Illustrations />,
  },
  {
    errorElement: <ErrorPage />,
    path: "/:projectId",
    element: <ProjectPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
