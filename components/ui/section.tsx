import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  return (
    <section ref={ref} className={className}>
      <span
        className={`block h-fit ease-in-out transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}>
        {children}
      </span>
    </section>
  );
}
