import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Beautiful animated e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NotificationProvider>
            <CartProvider>
              <Navbar />
              {children}
              <Footer />
            </CartProvider>
          </NotificationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
