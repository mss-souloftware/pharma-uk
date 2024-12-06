// src/app/layout.js
import Navbar from "@/components/Navbar";  // Using the alias '@' to refer to src/components/Navbar
import "../app/globals.css";  // Global styles

export default function RootLayout( ) {
  return (
    <html lang="en">
      <body>
        <div>
          <header>
            <Navbar />
          </header> 
          {/* <main> 
          </main> */}
            
        </div>
      </body>
    </html>
  );
}
