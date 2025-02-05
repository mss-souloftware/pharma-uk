"use client"; 
import ContextProvider from "@/app/cart/feature/contextProvider";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer/Footer";
import "./globals.css"; 
import Head from "next/head";  // Correctly import the Head component from next/head
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en">
        <head>
          {/* Using Head from next/head to insert Google Fonts link */}
          <Head>
            {/* <Link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap"
              rel="stylesheet"
            /> */}
          </Head>
        </head>
        <body>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ContextProvider>
  );
}
