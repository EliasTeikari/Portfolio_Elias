import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elias Teikari | Entrepreneur & Builder",
  description: "Personal portfolio of Elias Teikari - Entrepreneur, Builder, and Creative Mind. Explore my journey, projects, and ventures.",
  keywords: ["Elias Teikari", "entrepreneur", "portfolio", "builder", "projects"],
  authors: [{ name: "Elias Teikari" }],
  openGraph: {
    title: "Elias Teikari | Entrepreneur & Builder",
    description: "Personal portfolio of Elias Teikari - Entrepreneur, Builder, and Creative Mind.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          {/* Grain overlay for texture */}
          <div className="grain" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
