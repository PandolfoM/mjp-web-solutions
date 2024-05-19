"use client";

import { jetBrains } from "@/app/fonts";
import React, { useState } from "react";
import Button from "../ui/button";
import { IconLayoutGrid } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="flex items-center justify-between h-[50px] px-7 z-50 bg-background fixed w-full">
        <Link href="/">
          <h5 className="text-sm leading-3">MJP</h5>
          <h6 className={`${jetBrains.className} text-xs opacity-75 leading-3`}>
            Web Solutions
          </h6>
        </Link>
        <div className="flex items-center justify-end gap-4">
          <Link href="/contact">
            <Button className="text-sm" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconLayoutGrid height={35} width={35} className="opacity-75" />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 30 }}
            exit={{ y: -130 }}
            className="bg-background border-b-2 border-primary flex flex-col gap-3 px-7 pt-7 pb-4 z-10 fixed w-full">
            <Link
              href="/"
              onClick={closeMenu}
              className={`${jetBrains.className} font-bold text-md`}>
              Home
            </Link>
            <Link
              href="/plans"
              onClick={closeMenu}
              className={`${jetBrains.className} font-bold text-md`}>
              Plans
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`${jetBrains.className} font-bold text-md`}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
