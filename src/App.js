import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes";

function App() {
  return (
    <div className="w-[90%] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
