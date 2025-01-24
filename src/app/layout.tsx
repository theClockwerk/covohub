import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
const beckett = localFont({
  src: "./fonts/beckett.ttf",
  variable: "--font-beckett",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Covo Hotel",
  description: "Covo Main Hub aka Covo Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beckett.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
