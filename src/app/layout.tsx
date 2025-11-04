import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "De Roersoppers - Zwemvereniging Roermond",
  description:
    "Al meer dan 40 jaar de gezelligste zwemvereniging van Roermond. Van beginners tot wedstrijdzwemmers, iedereen is welkom bij De Roersoppers!",
  keywords:
    "zwemmen, zwemvereniging, Roermond, zwemles, wedstrijdzwemmen, junioren, senioren, Roersoppers",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
      </head>
      <body className={`${poppins.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
