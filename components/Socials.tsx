import React from "react";
import { MailButton } from "@/components/ui/mail-button";
import { LinkedInButton } from "@/components/ui/linkedin-button";
import { GithubButton } from "@/components/ui/github-button";
import { CodepenButton } from "@/components/ui/codepen-button";
// import { DribbbleButton } from "@/components/ui/dribbble-button";

export function Socials() {
  return (
    <div className="">
      <ul className="flex flex-wrap space-x-2 my-6 list-none [&>li]:mt-2">
        <li className="inline-flex ">
          <MailButton />
        </li>
        <li className="inline-flex ">
          <LinkedInButton />
        </li>
        <li className="inline-flex ">
          <GithubButton />
        </li>
        <li className="inline-flex ">
          <CodepenButton />
        </li>
        {/* <li className="inline-flex">
          <DribbbleButton />
        </li> */}
      </ul>
    </div>
  );
}
