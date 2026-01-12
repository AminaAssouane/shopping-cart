import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/store.css";
import App from "./App.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Store } from "./components/Store/Store.jsx";
import { Cart } from "./components/Cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "Shop", element: <Store /> },
      { path: "Cart", element: <Store /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
