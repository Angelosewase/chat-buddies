import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatPage from "./pages/ChatPage";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/signup", Component: SignUp },
  { path: "/chat", Component: ChatPage },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
