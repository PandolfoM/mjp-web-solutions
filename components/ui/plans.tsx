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
      "A perfect choice for individuals or businesses needing a straightforward and effective web presence.",
    price: "3,000",
    options: ["Up to 3 pages", "Notion board", "Test URL"],
  },
  {
    title: "Premium",
    description:
      "A comprehensive solution for growing businesses seeking advanced features and enhanced performance.",
    price: "5,500",
    options: [
      "Unlimited pages",
      "Notion board",
      "Monthly Maintenance",
      "Test URL",
    ],
  },
  {
    title: "Pro",
    description:
      "An all-inclusive package designed for professionals and enterprises requiring top-tier functionality and custom solutions.",
    price: "9,500",
    options: [
      "Unlimited pages",
      "Notion board",
      "Monthly Maintenance",
      "Test URL",
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
                  <IconCircleCheck className="w-[15px] h-[15px]" />
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
