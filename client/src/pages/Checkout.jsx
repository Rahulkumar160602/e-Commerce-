import React from "react";
import { useStore } from "../store/store.jsx";

function Checkout() {
  const { state, dispatch } = useStore();
  const cart = state.cart;

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    if (cart.length === 0) return alert("Your cart is empty!");
    alert("Demo payment successful! Thank you for shopping.");
    // Clear cart after demo payment
    dispatch({ type: "SET_CART", payload: [] });
    localStorage.removeItem("cart");
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    dispatch({ type: "SET_CART", payload: updatedCart });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Styles
  const cardStyle = {
    display: "flex",
    gap: "15px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginBottom: "15px",
    background: "#fff",
    alignItems: "center",
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const buttonStyle = {
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "20px" }}>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id} style={cardStyle}>
              <img
                src={item.images?.[0] || "/images/placeholder.png"}
                alt={item.title}
                style={imageStyle}
              />
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>
                  <strong>Price:</strong> ${item.price}
                </p>
              </div>
              <button
                style={{ ...buttonStyle, background: "#ff4d4f", color: "#fff" }}
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${total}</h3>
          <button
            onClick={handlePayment}
            style={{
              ...buttonStyle,
              background: "#1890ff",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Pay Now (Demo)
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
