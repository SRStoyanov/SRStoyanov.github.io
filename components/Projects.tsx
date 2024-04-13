import React from "react";
import Project, { ProjectProps } from "./Project";

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Cinebuzz",
      description:
        "Cinebuzz is a simplified clone of the movie reviewing site letterboxd. It lets authenticated users read, write, edit and delete (CRUD) movie reviews, and lets non-authenticated users just read them. It gets the movie data from themoviedb.org's API. Cinebuzz is written in Angular, uses Tailwind for styling, Firebase authentication and a Firestore database.",
      repoLink: "https://github.com/SRStoyanov/cinebuzz",
      liveLink: "https://cinebuzz-34f85.web.app",
      techStack: ["Angular", "TypeScript", "Tailwind", "Firebase"],
      image: "/cinebuzz.PNG",
      showRepoLink: true,
      showLiveLink: true,
    },
    {
      title: "MTG Marketplace",
      description:
        'MTG Marketplace is a mock online marketplace for Magic: The Gathering (MTG) cards. It lets authenticated users upload their own MTG cards and put them up for sale, with all CRUD operations (create, read, update, delete) available, as well as "buy" cards uploaded by other users. Without authentication, any guest user can see all of the MTG cards available for purchase on the website, and can Login or Register. MTG Marketplace is written in React, uses Firebase authentication and a Firestore database. It gets the card data from the Gatherer API.',
      repoLink: "https://github.com/SRStoyanov/MTG-Marketplace",
      liveLink: "https://mtg-marketplace-110b0.web.app",
      techStack: ["React", "JavaScript", "Firebase"],
      image: "/mtg-marketplace.PNG",
      showRepoLink: true,
      showLiveLink: true,
    },
    {
      title: "VoteVis (Alpha)",
      description:
        "VoteVis is a data visualization tool that aggregates election polling of the April 2023 Bulgarian parliamentary elections and draws that on a char. It is a work in progress, and I am currently working on the next version, which will be written in Svelte and d3. The Alpha version seen here is written in vanilla JS.",
      repoLink: "-",
      liveLink: "https://vote-vis-alpha.vercel.app",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/VoteVis.PNG",
      showRepoLink: false,
      showLiveLink: true,
    },
    {
      title: "EveryPoem",
      description:
        "Inspired by OuLiPo in general and Raymond Queneau's Hundred Thousand Billion Poems in particular, this work houses 30-to-the-power-of-8 poems, all following a similar structure and all about love. It is also the first website I've created on my own, written in vanilla JS.",
      repoLink: "-",
      liveLink: "https://www.everypoem.com",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/EveryPoem-tight.PNG",
      showRepoLink: false,
      showLiveLink: true,
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
