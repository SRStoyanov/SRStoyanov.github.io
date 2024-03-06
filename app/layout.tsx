import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sava Stoyanov's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </ThemeProvider>
  );
}
