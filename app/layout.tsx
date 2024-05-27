import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Sebastian Rodriguez",
  description: "Sebastian Rodriguez's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <footer className="flex w-full justify-center p-8 mt-auto">
            © 2024 Sebatian Rodriguez. All rights reserved.
          </footer>
        </body>
        <div className="bottom-4 left-4 fixed">
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </html>
  );
}
