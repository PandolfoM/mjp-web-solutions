import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export default function Section({
  children,
  className,
  amount,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: amount || 0.7 });

  return (
    <section ref={ref}>
      <span
        className={cn(
          `block h-fit ease-in-out transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`,
          className
        )}>
        {children}
      </span>
    </section>
  );
}
