import React from "react";
import Project, { ProjectProps } from "./Project";

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "EveryPoem",
      description:
        "Inspired by OuLiPo in general and Raymond Queneau's Hundred Thousand Billion Poems in particular, this work houses 30-to-the-power-of-8 poems, all following a similar structure and all about love. It is also the first website I've created on my own, written in vanilla JS.",
      repoLink: "-",
      liveLink: "https://www.everypoem.com",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/public/EveryPoem-tight.png",
    },
    {
      title: "VoteVis v.Alpha",
      description:
        "VoteVis is a data visualization tool that aggregates election polling of the April 2023 Bulgarian parliamentary elections and draws that on a char. It is a work in progress, and I am currently working on the next version, which will be written in Svelte and d3. The Alpha version seen here is written in vanilla JS.",
      repoLink: "-",
      liveLink: "https://www.votevis.org",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/public/VoteVis.png",
    },
    // Add more projects here...
  ];

  return (
    <div className="py-40">
      <h2 className="h2">Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
