import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharjeel Siddiqui | MERN Stack Developer",
  description:
    "Portfolio of Sharjeel Siddiqui - A passionate MERN Stack Developer building modern, scalable web applications with cutting-edge technologies.",
  keywords: [
    "Sharjeel Siddiqui",
    "MERN Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Full Stack Developer",
  ],
  authors: [{ name: "Sharjeel Siddiqui" }],
  openGraph: {
    title: "Sharjeel Siddiqui | MERN Stack Developer",
    description:
      "Portfolio of Sharjeel Siddiqui - A passionate MERN Stack Developer building modern web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharjeel Siddiqui | MERN Stack Developer",
    description:
      "Portfolio of Sharjeel Siddiqui - A passionate MERN Stack Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
