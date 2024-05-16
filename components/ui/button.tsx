import React from "react";

type Props = {
  text?: string;
  className?: string;
  textSize?: string;
};

function Button({ text, className, textSize }: Props) {
  return (
    <button className={`rounded-sm p-0.5 bg-gradient-to-br to-90% from-primary to-secondary ${className}`}>
      <div className={`bg-background rounded-sm px-3 py-1 w-full h-full ${textSize}`}>{text ? text : "Get Started"}</div>
    </button>
  );
}

export default Button;
