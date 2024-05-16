import React from "react";

type Props = {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined
};

function Button({ text, className, type }: Props) {
  return (
    <button type={type} className={`p-1 px-3 font-bold custom-border ${className}`} >
      {text ? text : "Get Started"}
    </button>
  );
}

export default Button;
