export function addToCartLogic(cartProducts, product, quantity, id) {
  const existingProduct = cartProducts.find(item => item.id === id);

  if (existingProduct) {
    return cartProducts.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    return [...cartProducts, { ...product, id, quantity }];
  }
}

export function deleteFromCartLogic(cartProducts, id) {
  return cartProducts.filter(product => product.id !== id);
}
