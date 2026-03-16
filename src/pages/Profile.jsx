import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://easynotes-backend-btcw.onrender.com";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/api/auth/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }

        // Safe JSON parsing
        const text = await res.text();
        const data = text ? JSON.parse(text) : {};

        setUserInfo(data);

      } catch (err) {
        console.error("Profile fetch error:", err);
        setError("Could not load profile. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const ProfileItem = ({ label, value, icon }) => (
    <div className="flex items-center p-4 bg-gray-700 rounded-lg border-l-4 border-blue-500 hover:bg-gray-600 transition">
      <span className="text-xl mr-3">{icon}</span>
      <div>
        <span className="font-medium text-gray-400 block text-sm">
          {label}
        </span>
        <span className="text-white font-semibold text-lg">
          {value || "N/A"}
        </span>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white text-lg">Loading profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-red-400 text-lg">
            {error || "You must be logged in to view this page."}
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-300">
      <Navbar />

      <main className="flex-grow max-w-3xl w-full mx-auto p-6 md:p-8">
        <h1 className="text-5xl font-extrabold mb-2 mt-4 text-white">
          Hello, {userInfo.name}! 🌟
        </h1>

        <p className="text-gray-400 mb-10 text-xl">
          Your account details are listed below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileItem label="Username" value={userInfo.username} icon="🆔" />
          <ProfileItem label="Full Name" value={userInfo.name} icon="🧑‍💻" />
          <ProfileItem label="Email Address" value={userInfo.email} icon="✉️" />
          <ProfileItem label="Age" value={userInfo.age} icon="🎂" />
          <ProfileItem label="Phone Number" value={userInfo.phone} icon="📞" />
          <ProfileItem label="Address" value={userInfo.address} icon="📍" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;