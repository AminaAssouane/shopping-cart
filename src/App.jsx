import { useState } from "react";
import { Nav } from "./components/Nav/Nav.jsx";
import { Outlet } from "react-router";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <>
      <Nav
        quantity={cartProducts.reduce(
          (total, cartProduct) => total + cartProduct.quantity,
          0,
        )}
      />
      <Outlet context={{ cartProducts, setCartProducts }} />
    </>
  );
}

export default App;
