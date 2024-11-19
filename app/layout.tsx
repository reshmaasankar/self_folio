import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Reshma's Portfolio",
  description: "Front end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200 relative pt-28 sm:pt-36`}>
          <div className="bg-green-300 absolute top-[-6rem] right-[30%] h-[32rem] w-[32rem] rounded-full blur-[10rem] -z-10"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
