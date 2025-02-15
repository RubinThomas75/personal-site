"use client";
import { useAuth } from "@/hooks/useAuth"; // ✅ Import the hook
import LogoutButton from "@/components/LogoutButton";

export default function PropertyRAGDashboard() {
  const { loading, isAuthenticated } = useAuth(); // ✅ Use the hook

  if (loading) return <p>Loading...</p>;
  if (!isAuthenticated) return null; // Prevents flashing of unauthorized content

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to PropertyRAG</h1>
      <p>You're logged in!</p>
      <LogoutButton />
    </div>
  );
}
