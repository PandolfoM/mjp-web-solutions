import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card/2 h-9 mt-[100px] flex items-center px-7 shrink-0">
      <p className="text-xxs opacity-50 lg:text-xs">
        &copy; {currentYear} MJP Web Solutions.
      </p>
    </footer>
  );
}

export default Footer;
