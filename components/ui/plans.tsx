import React from "react";
import VerticalCard from "../cards/verticalcard";
import { jetBrains } from "@/app/fonts";
import { IconCircleCheck } from "@tabler/icons-react";

const cards = [
  {
    title: "Standard",
    description:
      "A perfect choice for individuals or businesses needing a straightforward and effective web presence.",
    price: "3,000",
    options: ["Up to 3 pages", "Notion board"],
  },
  {
    title: "Premium",
    description:
      "A comprehensive solution for growing businesses seeking advanced features and enhanced performance.",
    price: "5,500",
    options: ["Unlimited pages", "Notion board", "Monthly Maintenance"],
  },
  {
    title: "Pro",
    description:
      "An all-inclusive package designed for professionals and enterprises requiring top-tier functionality and custom solutions.",
    price: "9,500",
    options: ["Unlimited pages", "Notion board", "Monthly Maintenance"],
  },
];

function Plans() {
  return (
    <div className="flex items-start flex-nowrap gap-[15px] overflow-x-auto relative overflow-hidden">
      {cards.map((card, i) => (
        <VerticalCard key={i} className={i === 2 ? "mr-7": i === 0 ? "ml-7" : ""}>
          <>
            <div className="pt-[15px] px-[15px]">
              <h6 className="text-left font-bold text-md">{card.title}</h6>
              <p
                className={`${jetBrains.className} opacity-75 text-sm pb-[15px]`}>
                {card.description}
              </p>
              <h6 className="text-left font-bold text-md">${card.price}/m</h6>
            </div>
            <hr className="w-full h-px border-none bg-white/5" />
            <div className="pb-[15px] px-[15px] flex flex-col gap-[5px]">
              {card.options.map((o, i) => (
                <div key={i} className="flex gap-[10px] items-center">
                  <IconCircleCheck className="w-[15px] h-[15px]" />
                  <p className={`${jetBrains.className} text-sm opacity-75`}>
                    {o}
                  </p>
                </div>
              ))}
            </div>
          </>
        </VerticalCard>
      ))}
    </div>
  );
}

export default Plans;
