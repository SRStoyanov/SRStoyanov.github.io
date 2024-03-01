import React from "react";
import { Figma } from "lucide-react";
import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";

export type ProjectProps = {
  title: string;
  description: string;
  figmaLink: string;
  repoLink: string;
  liveLink: string;
  techStack: string[];
  image: string;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  figmaLink,
  repoLink,
  liveLink,
  techStack,
  image,
}) => {
  return (
    <div className="pb-40">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-3/5">
          <img className="w-full shadow-lg" src={image} alt={title} />
        </div>
        <div className="w-full md:w-2/5 md:pl-0 mt-4 md:mt-0">
          <h3 className="h3">{title}</h3>
          <div className="bg-primary rounded-lg p-4">
            <p className="p">{description}</p>
          </div>
          <ul className="flex flex-wrap my-6 list-none [&>li]:mt-2">
            {techStack.map((tech, index) => (
              <li
                key={index}
                className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="bg-accent rounded-lg p-4 inline-block">
            <ul className="flex space-x-4">
              <li>
                <a href={figmaLink}>
                  <Figma />
                </a>
              </li>
              <li>
                <a href={repoLink}>
                  <Github />
                </a>
              </li>
              <li>
                <a href={liveLink}>
                  <ExternalLink />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
