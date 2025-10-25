import React from "react";
import { useStore } from "../store/store.jsx";

function Cart() {
  const { state, dispatch } = useStore();

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {state.cart.length === 0 && <p>No items in the cart.</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.cart.map((p) => (
          <div
            key={p._id}
            style={{
              margin: "10px",
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={p.images?.[0] || "https://via.placeholder.com/150"}
              alt={p.title}
              width="150"
              height="150"
            />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>
              <strong>${p.price}</strong>
            </p>
            <button
              onClick={() => removeFromCart(p._id)}
              style={{ margin: "5px" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
