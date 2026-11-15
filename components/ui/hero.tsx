import React from "react";
import Button from "./button";
import { Link } from "react-router";

function Hero() {
  return (
    <section className="text-center px-7">
      <h1 className="font-bold text-lg lg:text-xl">
        Creating your Digital Presence.
      </h1>
      <p
        className={`font-jetbrains text-sm opacity-75 pb-[25px] lg:text-md`}>
        Unlock the potential of your brand with a strong digital presence that
        speaks to your audience and drives engagement.
      </p>
      <Link to="/contact">
        <Button className="w-[230px] h-[35px]" />
      </Link>
    </section>
  );
}

export default Hero;
