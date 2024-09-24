import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Header from "src/components/Header";
import Navbar from "src/components/Navbar";
import { Suspense } from "react";
import SearchBox from "src/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB",
  description: "This Is Movie Clone Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {/* Wrapping SearchBox with Suspense */}
          <Suspense fallback={<div>Loading SearchBox...</div>}>
            <SearchBox />
          </Suspense>
          {/* Wrapping children with Suspense */}
          <Suspense fallback={<div>Loading Page Content...</div>}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
