"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const router = useRouter();

  const handleSuccess = async (response: CredentialResponse) => {
    const googleToken = response.credential;
    if (!googleToken) {
      console.error("Google login failed: No credential received");
      return;
    }
  
    const res = await fetch("http://localhost:8000/api/auth/verify-google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: googleToken }),
    });
  
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("auth_token", data.token);
      router.push("/propertyrag");
    } else {
      console.error("Login failed:", data);
    }
  };
  


  return (
    <div style={{ display: "flex", height: "50vh", width: "100vw" }}>
      {/* Left Side - Login Section */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>PropertyRAG - Login</h1>
        <div style={{ padding: "10px", borderRadius: "8px", backgroundColor: "#fff" }}>
          <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
        </div>
      </div>

      {/* Vertical Divider */}
      <div style={{ width: "2px", backgroundColor: "#ddd", height: "100%", marginTop: "5%", marginLeft: "-15%" }}></div>

      {/* Right Side - Demo Section (Future Feature) */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <h2>Demo Coming Soon...</h2>
      </div>
    </div>
  );
}
