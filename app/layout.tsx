import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import { inter } from "./fonts";
import Footer from "@/components/navigation/footer";
import { Toaster } from "@/components/ui/toaster";

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
