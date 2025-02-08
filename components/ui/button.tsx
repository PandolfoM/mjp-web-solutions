import { cn } from "@/lib/utils";
import React, { ReactNode, forwardRef } from "react";

type Props = {
  text?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: ReactNode;
  [key: string]: any;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ text, className, type, disabled, onClick, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn("p-1 px-3 font-bold custom-border", className)}
        disabled={disabled}
        onClick={onClick}
        {...props}>
        {children ? children : text ? text : "Get Started"}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
