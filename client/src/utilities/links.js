export const buildLink = {
  products: () => `/`,
  product: (productId) => `/product/${productId ? productId : ""}`,
};
