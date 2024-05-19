"use client";

import HorizontalCard from "@/components/cards/horizontalcard";
import Hero from "@/components/ui/hero";
import IconNext from "@/app/assets/player-track-next.svg";
import IconMessage from "@/app/assets/message.svg";
import Plans from "@/components/ui/plans";
import { jetBrains } from "./fonts";
import Button from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/ui/section";

export default function Home() {
  return (
    <main className="flex flex-col gap-[100px]">
      <Section>
        <Hero />
      </Section>
      <Section className="px-7">
        <h4 className="text-primary text-xs font-bold">WHAT WE DO</h4>
        <h3 className="font-bold text-lg mb-[25px]">
          {`Here's how we deliver high quality products`}
        </h3>
        <div className="flex flex-col gap-[10px]">
          <HorizontalCard
            svg={IconNext}
            title="Performace"
            subtitle="We use the latest technologies and best practices to ensure optimal performance for our websites."
          />
          <HorizontalCard
            svg={IconMessage}
            title="Communication"
            subtitle="Effective communication is crucial for maintaining design consistency."
          />
        </div>
      </Section>
      <Section>
        <h4 className="text-primary text-xs font-bold pl-7">OUR PLANS</h4>
        <h3 className="font-bold text-lg mb-[25px] pl-7">
          Plans to suit every need and budget
        </h3>
        <Plans orientation="horizontal" />
      </Section>
      <Section className="text-center px-7">
        <h3 className="text-lg font-bold">Ready to start?</h3>
        <p
          className={`${jetBrains.className} opacity-75 text-sm pb-[25px]`}>{`Contact us today! Let's create an outstanding website together.`}</p>
        <Link href="/contact">
          <Button className="w-[200px]" />
        </Link>
      </Section>
    </main>
  );
}
