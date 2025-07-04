import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import env from "../env";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: env.APP_NAME + " - Premium Solar Equipment & Solutions",
  description: env.APP_DESCRIPTION,
  keywords:
    "solar panels, solar inverters, solar batteries, solar equipment, renewable energy, India",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <div className="relative">
            <div
              className="absolute inset-0 z-0 bg-[url(/bg-wave.png)] bg-cover bg-center bg-no-repeat"
              style={{ backgroundAttachment: "fixed" }}
            />
            <div className="z-10 relative">{children}</div>
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
