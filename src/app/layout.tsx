import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Software Engineer | AI Enthusiast',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <header className="w-full p-4 bg-gray-800 text-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="w-full p-4 bg-gray-800 text-center text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
