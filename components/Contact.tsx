import React from "react";
import { Socials } from "@/components//Socials";

const Contact = () => {
  return (
    <div className="pb-40">
      <h2 className="h2">Contact</h2>
      <div className="bg-primary rounded-lg p-4 mb-10">
        <p className="p">
          I'm very much looking for new opportunities and connections, so don't
          hesitate to reach out if you have something in mind!
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Contact;
