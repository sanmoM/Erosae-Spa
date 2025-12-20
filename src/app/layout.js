import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
});

export const metadata = {
  title: "EROSAE",
  description: "Spa & Wellness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
