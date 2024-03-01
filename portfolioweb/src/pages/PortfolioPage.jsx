import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const PortfolioPage = () => {
  // const projects = [
  //   {
  //     id: "1",
  //     title: "Project 1",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.",
  //     images: [
  //       "https://source.unsplash.com/300x200/?technology,code",
  //       "https://source.unsplash.com/300x200/?programming",
  //       "https://source.unsplash.com/300x200/?development",
  //     ],
  //     link: "#",
  //     tech: ["React", "Node.js", "PostgreSQL"],
  //     type: "frontend",
  //   },
  //   {
  //     id: "2",
  //     title: "Project 2",
  //     description:
  //       "Curabitur ullamcorper ultricies nisi. Nam eget dui et nisi vestibulum interdum. In hac habitasse platea dictumst. Sed bibendum ultrices ante facilisis.",
  //     images: [
  //       "https://source.unsplash.com/300x200/?coding",
  //       "https://source.unsplash.com/300x200/?programming",
  //       "https://source.unsplash.com/300x200/?development",

  //     ],
  //     link: "#",
  //     tech: ["React", "Firebase"],
  //     type: "frontend",
  //   },
  //   {
  //     id: "3",
  //     title: "Project 3",
  //     description:
  //       "Nullam scelerisque, velit volutpat lacus pellentesque eleifend, lorem ipsum dolor sit amet consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.",
  //     images: [
  //       "https://source.unsplash.com/300x200/?backend",
  //       "https://source.unsplash.com/300x200/?server",
  //       "https://source.unsplash.com/300x200/?database",
  //     ],
  //     link: "#",
  //     tech: ["Python", "Django", "PostgreSQL"],
  //     type: "backend",
  //   },
  //   {
  //     id: "4",
  //     title: "Project 4",
  //     description:
  //       "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
  //     images: [
  //       "https://source.unsplash.com/300x200/?code",
  //       "https://source.unsplash.com/300x200/?programming",
  //       "https://source.unsplash.com/300x200/?backend",
  //     ],
  //     link: "#",
  //     tech: ["Python", "Django", "PostgreSQL"],
  //     type: "backend",
  //   },
  //   {
  //       id: "5",
  //       title: "Project 1",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.",
  //       images: [
  //         "https://source.unsplash.com/300x200/?technology,code",
  //         "https://source.unsplash.com/300x200/?programming",
  //         "https://source.unsplash.com/300x200/?development",
  //       ],
  //       link: "#",
  //       tech: ["React", "Node.js", "PostgreSQL"],
  //       type: "frontend",
  //     },
  //     {
  //       id: "6",
  //       title: "Project 2",
  //       description:
  //         "Curabitur ullamcorper ultricies nisi. Nam eget dui et nisi vestibulum interdum. In hac habitasse platea dictumst. Sed bibendum ultrices ante facilisis.",
  //       images: [
  //         "https://source.unsplash.com/300x200/?coding",
  //         "https://source.unsplash.com/300x200/?programming",
  //         "https://source.unsplash.com/300x200/?development",

  //       ],
  //       link: "#",
  //       tech: ["React", "Firebase"],
  //       type: "frontend",
  //     },
  //     {
  //       id: "7",
  //       title: "Project 1",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.",
  //       images: [
  //         "https://source.unsplash.com/300x200/?technology,code",
  //         "https://source.unsplash.com/300x200/?programming",
  //         "https://source.unsplash.com/300x200/?development",
  //       ],
  //       link: "#",
  //       tech: ["React", "Node.js", "PostgreSQL"],
  //       type: "frontend",
  //     },
  //     {
  //       id: "8",
  //       title: "Project 2",
  //       description:
  //         "Curabitur ullamcorper ultricies nisi. Nam eget dui et nisi vestibulum interdum. In hac habitasse platea dictumst. Sed bibendum ultrices ante facilisis.",
  //       images: [
  //         "https://source.unsplash.com/300x200/?coding",
  //         "https://source.unsplash.com/300x200/?programming",
  //         "https://source.unsplash.com/300x200/?development",

  //       ],
  //       link: "#",
  //       tech: ["React", "Firebase"],
  //       type: "frontend",
  //       destacado:false
  //     },
  // ];
  const [projects, setProjects] = useState([]);
  const [projectsFronted, setProjectsFronted] = useState([]);

  const [projectsBackend, setProjectsBackend] = useState([]);
  useEffect(() => {

    if(projects.length > 0) {
      setProjectsFronted(projects.filter(
        (project) => project.type === "frontend"
      ))
      setProjectsBackend(projects.filter(
        (project) => project.type === "backend"
      ))
    }
  }, [projects]);


  
    // const frontendProjects = projects.filter(
    //   (project) => project.type === "frontend"
    // );
    // const backendProjects = projects.filter(
    //   (project) => project.type === "backend"
    // );

 


  const URLAPI = "http://localhost:3000/api/projects";
  useEffect(() => {
    const getData = () => {
      fetch(URLAPI)
        .then((response) => response.json())
        .then((data => setProjects(data)))
        .catch((error) => console.error(error));
    };
    
    getData();
  }, []);
  console.log(projects)


  return (
    <div className="container mx-auto py-16 px-10">
      <h1 className="text-3xl font-extrabold text-center mb-8">
        Frontend Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
         {projectsFronted.length>0 ?( projectsFronted.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))):(<h2>no hay proyectos</h2>) }
      </div>
      <h1 className="text-3xl font-extrabold text-center my-8">
        Backend Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {projectsBackend.length>0 ?( projectsBackend.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))):(<h2>no hay proyectos</h2>) }
      </div>
    </div>
  );
};

export default PortfolioPage;
