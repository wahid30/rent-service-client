import Main from "../layouts/Main.jsx";
import AddService from "../Pages/AddService/AddService.jsx";
import AllServices from "../Pages/AllServices/AllServices.jsx";
import Blogs from "../Pages/Blogs/Blogs.jsx";
import Details from "../Pages/Details/Details.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login/Login.jsx";
import Register from "../Pages/Login/Register/Register.jsx";
import UpdateReview from "../Pages/UpdateReview/UpdateReview.jsx";
import UserReviews from "../Pages/UserReviews/UserReviews.jsx";
import PrivateRoute from "./PrivateRoute.js";
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <UserReviews></UserReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addServices",
        element: <AddService></AddService>,
      },
      {
        path: "/update/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reviews/${params.id}`),
      },
    ],
  },
]);

export default router;
