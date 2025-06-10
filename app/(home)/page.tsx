"use client";

import { useRef } from "react";
import HorizontalCard from "@/components/cards/horizontalcard";
import Hero from "@/components/ui/hero";
import IconNext from "@/app/assets/player-track-next.svg";
import IconMessage from "@/app/assets/message.svg";
import Plans from "@/components/ui/plans";
import { jetBrains } from "../fonts";
import Button from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/ui/section";
import Marquee from "@/components/ui/marquee";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import maneeley from "@/app/assets/maneeley-logo.svg";
import heenakapadia from "@/app/assets/heenakapadia.svg";
import dunkin from "@/app/assets/dunkin.svg";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const sitesArr = [
  {
    name: "Maneeleys",
    url: "https://maneeleys.com",
    img: maneeley,
  },
  {
    name: "Heena Kapadia",
    url: "https://www.heenakapadialaw.com/",
    img: heenakapadia,
  },
  {
    name: "Dunkin'",
    url: "https://www.gadonut.com/",
    img: dunkin,
  },
];

export default function Home() {
  const routeTo = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 0.8 }),
  ]);

  // const plugin = useRef(AutoScroll({}));

  return (
    <main className="flex flex-col gap-[100px] lg:max-w-[1200px] lg:m-auto lg:gap-[300px]">
      <Section>
        <Hero />
      </Section>
      <Section className="px-7">
        <h4 className="text-primary text-xs font-bold lg:text-sm">
          WHAT WE DO
        </h4>
        <h3 className="font-bold text-lg mb-[25px] lg:text-xl">
          Here's how we deliver high quality products
        </h3>
        <div className="flex flex-col gap-[10px] lg:flex-row lg:justify-center">
          <HorizontalCard
            svg={IconNext}
            title="Performace"
            subtitle="We use the latest technologies and best practices to ensure optimal performance for our websites."
            className="lg:w-1/2"
          />
          <HorizontalCard
            svg={IconMessage}
            title="Communication"
            subtitle="Effective communication is crucial for maintaining design consistency."
            className="lg:w-1/2"
          />
        </div>
      </Section>
      <Section>
        <h4 className="text-primary text-xs font-bold pl-7 lg:text-sm">
          Clients
        </h4>
        <h3 className="font-bold text-lg mb-[25px] pl-7 lg:text-xl">
          Trusted by leading companies
        </h3>
        <div className="relative flex overflow-x-hidden bg-background">
          {/* <Marquee /> */}
          <div className="m-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-x touch-pinch-zoom ml-0">
                {sitesArr.map((site, index) => (
                  <div className="flex-grow-0 flex-shrink-0 mx-8" key={index}>
                    <Image
                      src={site.img}
                      alt={site.name}
                      className="h-20 w-52 transition-all duration-300 opacity-50 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal cursor-pointer"
                      onClick={() => routeTo(site.url)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <Carousel
            plugins={[plugin, Autoplay({ jump: false, stopOnLastSnap: false })]}
            // onMouseEnter={plugin.stop}
            // onMouseLeave={plugin.reset}
            className="">
            <CarouselContent>
              {sitesArr.map((site, index) => (
                <CarouselItem key={index} className="w-fit">
                  <Image
                    src={site.img}
                    alt={site.name}
                    className="h-20 w-52 transition-all duration-300 opacity-50 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal cursor-pointer"
                    onClick={() => routeTo(site.url)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel> */}
        </div>
      </Section>
      <Section>
        <h4 className="text-primary text-xs font-bold pl-7 lg:text-sm">
          OUR PLANS
        </h4>
        <h3 className="font-bold text-lg mb-[25px] pl-7 lg:text-xl">
          Plans to suit every need and budget
        </h3>
        <div className="flex justify-center">
          <Plans orientation="horizontal" />
        </div>
      </Section>
      <Section className="text-center px-7">
        <h3 className="text-lg font-bold lg:text-xl">Ready to start?</h3>
        <p
          className={`${jetBrains.className} opacity-75 text-sm pb-[25px] lg:text-md`}>
          Contact us today! Let's create an outstanding website together.
        </p>
        <Link href="/contact">
          <Button className="w-[200px]" />
        </Link>
      </Section>
    </main>
  );
}
