import { addToCartLogic, deleteFromCartLogic } from "./cartUtils";
import { describe, it, expect } from "vitest";

describe("addToCartLogic", () => {
  it("adds a new product if it is not in the cart", () => {
    const cart = [];
    const product = { title: "Phone", price: 100 };
    
    const result = addToCartLogic(cart, product, 1, 1);

    expect(result).toEqual([{ id: 1, title: "Phone", price: 100, quantity: 1 }]);
  });

  it("increases quantity if product already exists", () => {
    const cart = [{ id: 1, title: "Phone", price: 100, quantity: 1 }];
    const product = { title: "Phone", price: 100 };

    const result = addToCartLogic(cart, product, 2, 1);

    expect(result[0].quantity).toBe(3);
  });
});

describe("deleteFromCartLogic", () => {
  it("removes product by id", () => {
    const cart = [
      { id: 1, title: "Phone", quantity: 1 },
      { id: 2, title: "Laptop", quantity: 1 },
    ];

    const result = deleteFromCartLogic(cart, 1);

    expect(result).toEqual([{ id: 2, title: "Laptop", quantity: 1 }]);
  });
});
