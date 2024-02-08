import { createHashRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Homepage from "./Homepage";
import ErrorPage from "./ErrorPage";
import ProjectPage from "./components/Projects/ProjectPage";

const router = createHashRouter([
  {
    errorElement: <ErrorPage />,
    path: "/",
    element: <Homepage />,
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
