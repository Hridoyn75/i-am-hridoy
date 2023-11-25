import NavBar from "@/components/nav";
import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nazmul Hridoy",
  description: "Nazmul Hridoy - Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#940ba5"
          initialPosition={0.1}
          showSpinner={false}
        />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
