"use client";

import { jetBrains } from "@/app/fonts";
import React, { useState } from "react";
import Button from "../ui/button";
import { IconLayoutGrid } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="flex items-center justify-between h-[50px] px-7 z-50 bg-background fixed w-full">
        <div>
          <h5 className="text-sm">MJP</h5>
          <h6 className={`${jetBrains.className} text-xs opacity-75`}>
            Web Solutions
          </h6>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Button textSize="text-sm" />
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconLayoutGrid height={35} width={35} className="opacity-75" />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 75 }}
            exit={{ y: -110 }}
            className="bg-background border-b-2 border-primary flex flex-col gap-3 px-7 pb-4 z-10">
            <a className={`${jetBrains.className} font-bold text-md`}>Home</a>
            <a className={`${jetBrains.className} font-bold text-md`}>Plans</a>
            <a className={`${jetBrains.className} font-bold text-md`}>About</a>
            <a className={`${jetBrains.className} font-bold text-md`}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
