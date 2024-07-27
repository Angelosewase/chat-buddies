import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./main.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  { path: "/login", Component: Login },
  { path: "/signup", Component: SignUp },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
