import Footer from "@/components/navigation/footer";
import Navigation from "@/components/navigation/navigation";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <span className="pt-[160px] lg:pt-[260px]" />
      {children}
      <Footer />
    </>
  );
}
