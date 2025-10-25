import React from "react";
import { useStore } from "../store/store.jsx";

function ProductCard({ product }) {
  const { dispatch } = useStore();

  const addToCart = () => dispatch({ type: "ADD_TO_CART", payload: product });
  const addToWishlist = () =>
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={addToWishlist} style={{ marginLeft: "10px" }}>
        Wishlist
      </button>
    </div>
  );
}

export default ProductCard;
