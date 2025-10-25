import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useStore } from "../store/store.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { email, password });
      dispatch({ type: "LOGIN", payload: res.data.user });
      localStorage.setItem("token", res.data.token);
      navigate("/"); 
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "radial-gradient(circle, #0f0c29, #302b63, #24243e)",
    color: "#fff",
    fontFamily: "'Courier New', Courier, monospace",
  };

  const cardStyle = {
    background: "rgba(0,0,0,0.85)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 0 20px #ff00ff, 0 0 40px #00ffff",
    width: "350px",
    textAlign: "center",
    border: "2px solid #ff00ff",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "2px solid #00ffff",
    background: "transparent",
    color: "#fff",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#ff00ff",
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0 0 10px #ff00ff, 0 0 20px #00ffff",
  };

  const errorStyle = {
    color: "#ff4d4f",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "20px", color: "#00ffff" }}>Login</h2>
        {error && <p style={errorStyle}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
