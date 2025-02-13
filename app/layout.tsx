import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import { inter } from "./fonts";
import Footer from "@/components/navigation/footer";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

export const metadata: Metadata = {
  title: "MJP Web Solutions",
  description:
    "Unlock the potential of your brand with a strong digital presence that speaks to your audience and drives engagement.",
  openGraph: {
    title: "MJP Web Solutions",
    description:
      "Unlock the potential of your brand with a strong digital presence that speaks to your audience and drives engagement.",
    type: "website",
    url: "https://mjpwebsolutions.com",
    siteName: "MJP Web Solutions",
    locale: "en_US",
    images: [
      {
        url: "https://mjpwebsolutions.com/logo.png",
        width: 62,
        height: 46,
        alt: "MJP Web Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-background text-white h-full selection:bg-primary/80">
      <Head>
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="icon" href="/icon.ico" type="image/ico" sizes="48x48" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${inter.className} flex flex-col h-full`}>
        <Navigation />
        <span className="pt-[160px] lg:pt-[260px]" />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
