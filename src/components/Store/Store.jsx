import { useState, useEffect } from "react";
import { Nav } from "../Nav/Nav.jsx";
import { Home } from "../Home/Home.jsx";
import { Shop } from "../Shop/Shop.jsx";
import { Cart } from "../Cart/Cart.jsx";

export function Store() {
  return (
    <>
      <Nav />
      <Home />
      <Shop />
      <Cart />
    </>
  );
}
