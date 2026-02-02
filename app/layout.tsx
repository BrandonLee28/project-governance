import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono, Syne, Outfit, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "iya",
  description: "We provide an immutable audit trail for autonomous AI agents, capturing intent and verifying identity to solve the compliance gap for enterprise agents, ensuring accountability in the age of agentic workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} ${syne.variable} ${outfit.variable} ${fraunces.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
