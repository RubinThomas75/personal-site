"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth_token"); // Remove auth token
    router.push("/propertyrag/login"); // Redirect to login
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#ff4d4d",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "20px",
      }}
    >
      Logout
    </button>
  );
}
