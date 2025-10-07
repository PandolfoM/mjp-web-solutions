import React from "react";
import VerticalCard from "../cards/verticalcard";
import { jetBrains } from "@/app/fonts";
import { IconCircleCheck } from "@tabler/icons-react";
import Button from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  orientation: "horizontal" | "vertical";
  className?: string;
};

const cards = [
  {
    title: "Standard",
    description:
      "Ideal for individuals or small businesses seeking a simple, effective, and professional web presence.",
    price: "2,000",
    options: [
      "Up to 3 pages",
      "Yearly Maintenance",
      "SEO Setup",
      "Contact Form",
      "Mobile responsive design",
    ],
  },
  {
    title: "Premium",
    description:
      "Designed for growing businesses that need advanced features, enhanced performance, and greater flexibility.",
    price: "5,000",
    options: [
      "Up to 6 pages",
      "Site Analytics",
      "Yearly or Biannually Maintenance",
      "Priority Support",
      "Social Media Integration",
    ],
  },
  {
    title: "Pro",
    description:
      "Our most comprehensive package, tailored for professionals and enterprises needing custom solutions and top-tier functionality.",
    price: "9,500",
    options: [
      "Unlimited pages",
      "Site Analytics",
      "Custom Scheduled Maintenance",
      "Custom API Integrations",
      "E-commerce Functionality",
    ],
  },
];

function Plans({ orientation, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-start flex-nowrap gap-[15px] overflow-x-auto relative",
        orientation === "horizontal"
          ? "flex-row overflow-x-auto"
          : "flex-col items-center overflow-visible",
        className
      )}>
      {cards.map((card, i) => (
        <VerticalCard
          key={i}
          className={`
            ${
              i === 2 && orientation === "horizontal"
                ? "mr-7"
                : i === 0 && orientation === "horizontal"
                ? "ml-7"
                : ""
            }
              relative
          `}>
          <>
            <div className="pt-[15px] px-[15px] min-h-[10.5rem] relative flex flex-col justify-between lg:h-56">
              <span>
                <h6 className="text-left font-bold text-md lg:text-lg">
                  {card.title}
                </h6>
                <p
                  className={`${jetBrains.className} opacity-75 text-sm pb-[15px] lg:text-md`}>
                  {card.description}
                </p>
              </span>
              <h6 className="text-left font-bold text-md">${card.price}+</h6>
            </div>
            <hr className="w-full h-px border-none bg-white/5" />
            <div className="pb-[15px] px-[15px] flex flex-col gap-[5px]">
              {card.options.map((o, i) => (
                <div key={i} className="flex gap-[10px] items-center">
                  <IconCircleCheck className="w-[15px] h-[15px] min-w-[15px]" />
                  <p
                    className={`${jetBrains.className} text-sm opacity-75 lg:text-md`}>
                    {o}
                  </p>
                </div>
              ))}
            </div>
            <div className="px-[15px] w-full absolute bottom-0 pb-[15px]">
              <Link
                href={{
                  pathname: "/contact",
                  query: {
                    plan: card.title,
                  },
                }}>
                <Button text="Select Plan" className="w-full" />
              </Link>
            </div>
          </>
        </VerticalCard>
      ))}
    </div>
  );
}

export default Plans;
