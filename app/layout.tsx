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
  title: "Інноваційні композитні матеріали, термопластичні композити з Європи",
  description: "Комплексні рішення із використанням інноваційних композитів для авіації, машинобудування і промисловості: постачання матеріалів та технологій, обладнання та інструментів для обробки, технологічна підтримка, супровід",
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="uk">
      <body suppressHydrationWarning className={`${robotoMono.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}