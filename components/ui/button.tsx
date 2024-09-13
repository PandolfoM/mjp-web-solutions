import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  text?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

function Button({ text, className, type, disabled }: Props) {
  return (
    <button
      type={type}
      className={cn("p-1 px-3 font-bold custom-border", className)}
      disabled={disabled}>
      {text ? text : "Get Started"}
    </button>
  );
}

export default Button;
