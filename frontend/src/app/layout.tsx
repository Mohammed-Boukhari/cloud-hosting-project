/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description root layout for the application
 */

// node_modules
import { Geist } from "next/font/google";
import { ToastContainer } from "react-toastify";

// components
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/footer/Footer";

//type
import type { Metadata } from "next";

// style
import "../style/globals.css";

const geist = Geist({ subsets: ["latin"] });

// element for [ hade ]
export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud hosting projecy",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {/* Header component */}
        <Header />
        {/* Toast Container library */}
        <ToastContainer aria-label={undefined} theme="colored" position="top-center" />

        {/* Main Content */}
        <main className="fix-height">{children}</main>

        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
