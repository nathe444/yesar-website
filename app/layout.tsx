import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yesar Group",
  description:
    "One group. Many industries. A single vision. From construction to energy, agriculture to logistics, Yesar builds the infrastructure that moves nations forward.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
