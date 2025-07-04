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
  authors: [{ name: env.COMPANY_NAME }],
  creator: env.COMPANY_NAME,
  publisher: env.COMPANY_NAME,
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: env.APP_URL,
    title: env.APP_NAME,
    description: env.APP_DESCRIPTION,
    siteName: env.APP_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: env.APP_NAME,
    description: env.APP_DESCRIPTION,
  },
  verification: {
    google: "your-google-verification-code",
  },
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
