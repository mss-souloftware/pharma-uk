// RootLayout.js
"use client"; 
import ContextProvider from "@/app/cart/feature/contextProvider";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer/Footer";
import "./globals.css"; 

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en">
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
