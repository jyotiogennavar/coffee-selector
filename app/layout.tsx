import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Coffee game",
  description: "Select your coffee and play a game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
