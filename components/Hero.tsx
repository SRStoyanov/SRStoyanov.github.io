import React from "react";
import { Socials } from "@/components//Socials";

const Hero = () => {
  return (
    <div className="my-36 md:my-60">
      <h2 className="h2">Hi, my name is</h2>
      <h1 className="h1">
        Sava Stoyanov. <br />I create things for the web.
      </h1>
      <div className="bg-primary rounded-lg p-4 my-10">
        <p className="p">
          I&apos;m a software engineer building (and occasionally designing)
          digital experiences. I&apos;m also a poet and a political scientist.
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Hero;
