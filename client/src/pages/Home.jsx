import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { useStore } from "../store/store.jsx";

function Home() {
  const [products, setProducts] = useState([]);
  const { state, dispatch } = useStore();

  // Static images mapping (for demo, put images in public/images)
  const productImages = [
    "/images/product1.jpg",
    "/images/product3.jpg",
    "/images/Product5.jpg",
    "/images/product6.jpg",
    "/images/product7.jpg",
    "/images/product8.jpg",
    "/images/product9.jpg",
    "/images/product10.jpg",
    "/images/product11.jpg",
    "/images/product12.jpg",
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

const addToCart = (product, index) => {
  if (!state.user) return alert("Please login to add products to cart.");

  const productWithImage = {
    ...product,
    images: [productImages[index % productImages.length]], // add the image here
  };

  dispatch({ type: "ADD_TO_CART", payload: productWithImage });
  alert(`${product.title} added to cart!`);
};

const addToWishlist = (product, index) => {
  if (!state.user) return alert("Please login to add products to wishlist.");

  const productWithImage = {
    ...product,
    images: [productImages[index % productImages.length]], // add the image here
  };

  dispatch({ type: "ADD_TO_WISHLIST", payload: productWithImage });
  alert(`${product.title} added to wishlist!`);
};


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    alert("Logged out successfully!");
  };

  // Styles
  const cardStyle = {
    margin: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    background: "#fff",
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "8px 12px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      {/* Hero Section with static background image */}
      <div
        style={{
          height: "300px",
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          paddingTop: "120px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome to Online Shopping Platform</h1>
        {state.user ? (
          <div>
            <p>Hello, {state.user.name}</p>
            <button
              style={{ ...buttonStyle, background: "#ff4d4f", color: "#fff" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Please login to access cart and wishlist</p>
        )}
      </div>

      {/* Featured Products */}
      <h2 style={{ margin: "20px" }}>Featured Products</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {products.length === 0 && <p>No products available.</p>}
        {products.map((p, index) => (
          <div key={p._id} style={cardStyle}>
            <img
              src={productImages[index]} // Static images
              alt={p.title}
              style={imageStyle}
            />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>
              <strong>${p.price}</strong>
            </p>
            <div>
              <button
  style={{ ...buttonStyle, background: "#1890ff", color: "#fff" }}
  onClick={() => addToCart(p, index)}
>
  Add to Cart
</button>
<button
  style={{ ...buttonStyle, background: "#52c41a", color: "#fff" }}
  onClick={() => addToWishlist(p, index)}
>
  Add to Wishlist
</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
