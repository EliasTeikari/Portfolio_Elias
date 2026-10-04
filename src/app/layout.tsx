import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elias Teikari",
  description:
    "Estonian 20 year old hustler and nice guy. AI Engineer at Rapidata.ai, music producer signed at 17, student company founder, hackathon winner, and builder of the SVG Benchmark with 3.2 million human annotations.",
  authors: [{ name: "Elias Teikari" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
