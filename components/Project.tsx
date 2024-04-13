import React from "react";
import { Figma, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export type ProjectProps = {
  title: string;
  description: string;
  repoLink: string;
  liveLink: string;
  techStack: string[];
  image: string;
  showRepoLink: boolean;
  showLiveLink: boolean;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  repoLink,
  liveLink,
  techStack,
  image,
  showRepoLink,
  showLiveLink,
}) => {
  return (
    <div className="pb-40">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-3/5">
          <Image
            className="w-full shadow-lg rounded-lg"
            src={image}
            alt={title}
            width={500}
            height={300}
            unoptimized={true}
          />
        </div>
        <div className="w-full md:w-2/5 md:pl-0 mt-4 md:mt-0 flex flex-col justify-between">
          <div>
            <h3 className="h3">{title}</h3>
            <ul className="flex flex-wrap mt-2 mb-6 list-none [&>li]:mt-2">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary rounded-lg p-4">
            <p className="p">{description}</p>
          </div>

          <ul className="flex flex-wrap space-x-2 my-4 list-none [&>li]:mt-2">
            {showRepoLink && (
              <li className="inline-flex">
                <Button variant="accent">
                  <a href={repoLink}>
                    <Github className="h-4 w-4 " />
                  </a>
                </Button>
              </li>
            )}
            {showLiveLink && (
              <li className="inline-flex">
                <Button variant="accent">
                  <a href={liveLink}>
                    <ExternalLink className="h-4 w-4 " />
                  </a>
                </Button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
