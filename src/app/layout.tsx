"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import "../styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <html lang="en">
        <body className="bg-white text-black flex flex-col min-h-screen">
          {/* Sticky Header */}
          <header
            className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
              isScrolled ? "h-12 bg-white shadow-md" : "h-20 bg-transparent"
            } flex items-center justify-center border-b border-gray-300`}
          >
            {/* Home Button (House Icon) */}
            <div className="absolute left-6">
              <Link href="/">
                <HomeIcon className="h-8 w-8 text-blue-500 hover:text-blue-700 transition-all" />
              </Link>
            </div>

            {/* Centered Name */}
            <h1 className={`transition-all duration-300 ${isScrolled ? "text-lg" : "text-2xl"} font-semibold`}>
              Rubin Thomas
            </h1>
          </header>

          {/* Content Wrapper (Ensures Scrolling Works) */}
          <div className="mt-20 flex-1 w-full">{children}</div>

          {/* Footer */}
          <footer className="w-full p-4 text-center text-gray-500 border-t border-gray-300">
            © {new Date().getFullYear()} Rubin Thomas. All rights reserved.
          </footer>
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
