import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kargoline-shipping-com-1-tczb.onrender.com/login/",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        localStorage.setItem("userId", response.data.user_id);
        localStorage.setItem("fullName", response.data.full_name);

        navigate("/adminchat");
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="bg-custom-bg2 shadow-lg rounded-lg max-w-xl w-full p-10 transform transition-all duration-500 ease-in-out hover:scale-105">
        <h1 className="font-semibold font-curly text-center text-gray-800 mb-1">Kargoline Admin Login</h1>
        <p className="font-curly text-center text-gray-600 mb-8">Customer Support</p>
        {error && <p className="text-red-500 text-center mb-6">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-8">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-lg text-xl font-semibold hover:from-red-600 hover:to-pink-600 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;