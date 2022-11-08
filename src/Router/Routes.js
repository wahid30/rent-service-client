import Main from "../layouts/Main.jsx";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [],
  },
]);

export default router;
