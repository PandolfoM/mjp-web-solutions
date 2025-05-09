"use client";

import Section from "@/components/ui/section";
import React from "react";

function QR() {
  return (
    <div>
      <div className="h-dvh flex flex-col flex-1 items-center justify-center relative text-center">
        <Section>
          <h3
            className={`text-[3rem] font-black bg-primary py-1 px-5 text-background mb-5`}>
            WELCOME
          </h3>
          <span className="block animate-bounce duration-1000 text-xl">👇</span>
        </Section>
      </div>
    </div>
  );
}

export default QR;
