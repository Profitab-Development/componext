import React, { type ReactNode, type JSX } from "react";
import type { Metadata } from "next";
import { Roboto_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Site under development!",
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${robotoMono.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}