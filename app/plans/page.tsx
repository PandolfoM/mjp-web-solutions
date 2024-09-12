"use client";

import Plans from "@/components/ui/plans";
import Section from "@/components/ui/section";
import React from "react";
import { jetBrains } from "../fonts";
import Link from "next/link";

function PlansPage() {
  return (
    <div className="flex flex-col gap-[100px] px-7 flex-1 items-center">
      <Section className="text-center">
        <h1 className="text-lg font-bold text-center lg:text-xl">
          Discover the Perfect Plan for You
        </h1>
        <p className={`${jetBrains.className} text-sm opacity-75 lg:text-md`}>
          If one of our plans doesn't fit, let's create the perfect one
          together.{" "}
          <Link href="/contact" className="underline hover:no-underline">
            Contact us today!
          </Link>
        </p>
      </Section>

      <Section amount={0.1}>
        <Plans
          orientation="vertical"
          className="md:flex-row md:overflow-auto"
        />
      </Section>
    </div>
  );
}

export default PlansPage;
