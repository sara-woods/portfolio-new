import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import Homepage from "./Homepage";
import ErrorPage from "./ErrorPage";
import ProjectPage from "./components/Projects/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:projectId",
    element: <ProjectPage />,
  },
]);

const hashRouter = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:projectId",
    element: <ProjectPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
