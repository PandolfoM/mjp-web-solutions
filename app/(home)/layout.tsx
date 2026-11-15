import { Outlet } from "react-router";
import Footer from "@/components/navigation/footer";
import Navigation from "@/components/navigation/navigation";

export default function HomeLayout() {
  return (
    <>
      <Navigation />
      <span className="pt-[160px] lg:pt-[260px]" />
      <Outlet />
      <Footer />
    </>
  );
}
