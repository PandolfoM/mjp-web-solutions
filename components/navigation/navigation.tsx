"use client";

import { jetBrains } from "@/app/fonts";
import React, { useState } from "react";
import Button from "../ui/button";
import { IconLayoutGrid } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import { cn } from "@/lib/utils";

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 z-10 flex justify-center w-full pt-4 px-4 overscroll-contain -translate-x-1/2 max-w-[1200px]",
        isOpen && "min-h-screen max-h-screen pb-6"
      )}>
      <div
        className={cn(
          "w-full h-14 p-4 overflow-hidden bg-gradient-to-t from-[rgba(12,13,26,0.7)] to-[rgba(10,11,21,0.9)] backdrop-blur-sm border border-[hsla(0,0%,100%,.06)] rounded-2xl shadow-navbar transition-[height] duration-300 ease-in-out will-change-auto lg:h-[76px] lg:items-center lg:flex",
          isOpen && "h-[300px]"
        )}>
        <div className="flex items-center justify-between w-full relative">
          <Link
            href="/"
            className="flex text-sm items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
            <Image
              src={logo}
              alt="mjp web solutions logo"
              className="h-6 w-6 lg:w-8 lg:h-8 aspect-square"
            />
            <p className={`${jetBrains.className} lg:text-md`}>
              MJP Web Solutions
            </p>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className={`${jetBrains.className} font-bold text-md transition-all duration-200 ease-in-out py-3 px-2 text-white/50 hover:text-white`}>
              Home
            </Link>
            <Link
              href="/plans"
              className={`${jetBrains.className} font-bold text-md transition-all duration-200 ease-in-out py-3 px-2 text-white/50 hover:text-white`}>
              Plans
            </Link>
            <Link
              href="/contact"
              className={`${jetBrains.className} font-bold text-md transition-all duration-200 ease-in-out py-3 px-2 text-white/50 hover:text-white`}>
              Contact
            </Link>
          </div>

          <div
            className={cn(
              "relative w-6 h-4 cursor-pointer transition-all duration-500 ease-in-out translate-y-0 rotate-0 will-change-auto lg:hidden",
              isOpen && "rotate-180"
            )}
            onClick={toggleMenu}>
            <div
              className={cn(
                "top-[10%] absolute left-1/2 w-full h-px bg-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 will-change-auto",
                isOpen && "top-[50%] -rotate-45"
              )}></div>
            <div
              className={cn(
                "top-[50%] absolute left-1/2 w-full h-px bg-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 will-change-auto",
                isOpen && "opacity-0"
              )}></div>
            <div
              className={cn(
                "top-[90%] absolute left-1/2 w-full h-px bg-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 will-change-auto",
                isOpen && "top-[50%] rotate-45"
              )}></div>
          </div>
        </div>

        {/* Content */}
        <section className="flex flex-col gap-1 pt-12 pb-8 select-none lg:hidden">
          <Link
            href="/"
            onClick={toggleMenu}
            className={`${jetBrains.className} font-bold text-md transition-all duration-200 ease-in-out py-3 px-2 text-white/50 hover:text-white`}>
            Home
          </Link>
          <Link
            href="/plans"
            onClick={toggleMenu}
            className={`${jetBrains.className} font-bold text-md transition-all duration-200 ease-in-out py-3 px-2 text-white/50 hover:text-white`}>
            Plans
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className={`${jetBrains.className} font-bold text-md transition-all duration-200 ease-in-out py-3 px-2 text-white/50 hover:text-white`}>
            Contact
          </Link>
        </section>
      </div>
    </nav>
  );
}

export default Navigation;
