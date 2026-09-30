import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Avni Sharma | Frontend Developer & AI/ML",
  description:
    "Avni Sharma is a Software Development Intern and frontend developer building responsive web experiences and exploring AI-powered applications.",
  keywords: [
    "Avni Sharma",
    "Frontend Developer",
    "Software Developer",
    "React Developer",
    "JavaScript Developer",
    "AI ML",
    "Web Developer",
    "Portfolio",
  ],
  authors: [
    {
      name: "Avni Sharma",
    },
  ],
  creator: "Avni Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}