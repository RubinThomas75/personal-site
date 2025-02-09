import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Name",
  description: "Software Engineer | AI Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <header className="w-full p-6 text-center border-b border-gray-800">
          <h1 className="text-2xl font-semibold tracking-tight">Your Name</h1>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-6">{children}</main>

        <footer className="w-full p-4 text-center text-gray-500 border-t border-gray-800">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
