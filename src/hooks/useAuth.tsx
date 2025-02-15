"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      router.push("/propertyrag/login"); // Redirect to login
    } else {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, []);

  return { loading, isAuthenticated };
}
