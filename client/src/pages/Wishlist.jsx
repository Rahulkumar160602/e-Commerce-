import React from "react";
import { useStore } from "../store/store.jsx";

function Wishlist() {
  const { state, dispatch } = useStore();

  const removeFromWishlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Wishlist</h2>
      {state.wishlist.length === 0 && <p>No items in the wishlist.</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {state.wishlist.map((p) => (
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
              onClick={() => removeFromWishlist(p._id)}
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

export default Wishlist;
