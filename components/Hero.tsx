import React from "react";
import { MailButton } from "@/components/ui/mail-button";

const Hero = () => {
  return (
    <div className="my-60">
      <h2 className="h2">Hi, my name is</h2>
      <h1 className="h1">
        Sava Stoyanov. <br />I create things for the web.
      </h1>
      <div className="bg-primary rounded-lg p-4 my-10">
        <p className="p">
          I'm a software engineer building (and occasionally designing) digital
          experiences. I'm also a poet and a political scientist.
        </p>
      </div>
      <MailButton />
    </div>
  );
};

export default Hero;
