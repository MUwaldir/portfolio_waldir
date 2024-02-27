import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "1",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.",
    image: "https://source.unsplash.com/300x200/?random",
    link: "#",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Project 2",
    description:
      "Curabitur ullamcorper ultricies nisi. Nam eget dui et nisi vestibulum interdum. In hac habitasse platea dictumst. Sed bibendum ultrices ante facilisis.",
    image: "https://source.unsplash.com/300x200/?random",
    link: "#",
    tech: ["React", "Firebase"],
  },
  {
    id: "3",
    title: "Project 3",
    description:
      "Nullam scelerisque, velit volutpat lacus pellentesque eleifend, lorem ipsum dolor sit amet consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.",
    image: "https://source.unsplash.com/300x200/?random",
    link: "#",
    tech: [],
  },
  {
    id: "4",
    title: "Project 4",
    description:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
    image: "https://source.unsplash.com/300x200/?random",
    link: "#",
    tech: ["Python", "Django", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-extrabold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.image}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
