/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description root layout for the app
 */

// node_modules
import { Geist } from "next/font/google";

// components
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/footer/Footer";

//type
import type { Metadata } from "next";

// slyle
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

        {/* Main Content */}
        <main className="fix-height">{children}</main>

        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
