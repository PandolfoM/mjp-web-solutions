import { jetBrains } from "@/app/fonts";
import Image from "next/image";
import React from "react";

type Props = {
  svg: string;
  title: string;
  subtitle: string;
};

function HorizontalCard({ svg, title, subtitle }: Props) {
  return (
    <div className="h-52 flex flex-col items-center justify-center gap-[15px] bg-gradient-radial to-80% from-card/[10%] to-card/[2%] rounded-[10px] py-[25px] px-10">
      <Image src={svg} alt=""/>
      <h6 className="text-center font-bold text-md">{title}</h6>
      <p className={`text-center opacity-75 text-sm ${jetBrains.className}`}>
        {subtitle}
      </p>
    </div>
  );
}

export default HorizontalCard;
