"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PropertyRAGDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      // If user is not logged in, redirect to login page
      router.push("/propertyrag/login");
    } else {
      setLoading(false); // User is authenticated, show dashboard
    }
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to PropertyRAG</h1>
      <p>You're logged in!</p>
      <button
        onClick={() => {
          localStorage.removeItem("auth_token"); // Logout user
          router.push("/propertyrag/login"); // Redirect to login
        }}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Logout
      </button>
    </div>
  );
}
