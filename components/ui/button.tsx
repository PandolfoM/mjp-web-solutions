import React from "react";

type Props = {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined
};

function Button({ text, className, type }: Props) {
  return (
    <button type={type} className={`[border-image:linear-gradient(to_bottom_right,#F300AE,#8E39C5)_1] border-2 border-solid border-transparent bg-transparent p-1 font-bold ${className}`} >
      {text ? text : "Get Started"}
    </button>
  );
}

export default Button;
