import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/toaster";

// Wraps every page. The page's <head> (title, share tags, icons) is static,
// in index.html.
export default function RootLayout() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
