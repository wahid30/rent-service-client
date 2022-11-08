import Main from "../layouts/Main.jsx";
import Blogs from "../Pages/Blogs/Blogs.jsx";
import Home from "../Pages/Home/Home.jsx";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
