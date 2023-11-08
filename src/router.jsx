import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Items from "./pages/Items/Items";
import ShowItem from "./pages/Items/ShowItem/ShowItem";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [{
    index: true,
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "cart",
    element: <Cart />
  },
  {
    path: "items",
    element: <Items />,
  }, {
    path: ":id",
    element: <ShowItem />
  }
  ]
}])

export default router