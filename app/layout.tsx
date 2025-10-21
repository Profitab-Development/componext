import React, { type ReactNode, type JSX } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Site under development!",
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}