import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/store.jsx";

function Navbar() {
  const { state } = useStore();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    background: "#222",
    fontFamily: "Arial, sans-serif",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: "#fff",
    margin: "0 15px",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const rightStyle = {
    display: "flex",
    alignItems: "center",
  };

  const handleHover = (e, hover) => {
    e.target.style.color = hover ? "#ff9900" : "#fff";
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Home
        </Link>
        <Link
          to="/products"
          style={linkStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={linkStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Cart ({state.cart.length})
        </Link>
        <Link
          to="/wishlist"
          style={linkStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Wishlist ({state.wishlist.length})
        </Link>
        <Link
          to="/checkout"
          style={linkStyle}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          Checkout
        </Link>
      </div>
      <div style={rightStyle}>
        {state.user ? (
          <span style={{ color: "#ff9900" }}>Hello, {state.user.name}</span>
        ) : (
          <>
            <Link
              to="/login"
              style={linkStyle}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={linkStyle}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
