import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#7B61FF]/[2%] h-9 mt-[100px] flex items-center px-7 flex-shrink-0">
      <p className="text-xxs opacity-50 lg:text-xs">
        &copy; {currentYear} MJP Web Solutions.
      </p>
    </footer>
  );
}

export default Footer;
