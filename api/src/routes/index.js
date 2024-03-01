// const { Router } = require("express");
import {Router} from "express";
const router = Router();
// ---------------- estado api -------------------
router.get("/", (req, res) => {
  res.send("¡Bienvenido a la API!");
});
// rutas portfolio
// router.get("/projects", function (req, res) {
//   res.send( [
//     {
//       id: "1",
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
//       id: "2",
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
//       id: "3",
//       title: "Project 3",
//       description:
//         "Nullam scelerisque, velit volutpat lacus pellentesque eleifend, lorem ipsum dolor sit amet consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.",
//       images: [
//         "https://source.unsplash.com/300x200/?backend",
//         "https://source.unsplash.com/300x200/?server",
//         "https://source.unsplash.com/300x200/?database",
//       ],
//       link: "#",
//       tech: ["Python", "Django", "PostgreSQL"],
//       type: "backend",
//     },
//     {
//       id: "4",
//       title: "Project 4",
//       description:
//         "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
//       images: [
//         "https://source.unsplash.com/300x200/?code",
//         "https://source.unsplash.com/300x200/?programming",
//         "https://source.unsplash.com/300x200/?backend",
//       ],
//       link: "#",
//       tech: ["Python", "Django", "PostgreSQL"],
//       type: "backend",
//     },
//     {
//         id: "5",
//         title: "Project 1",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.",
//         images: [
//           "https://source.unsplash.com/300x200/?technology,code",
//           "https://source.unsplash.com/300x200/?programming",
//           "https://source.unsplash.com/300x200/?development",
//         ],
//         link: "#",
//         tech: ["React", "Node.js", "PostgreSQL"],
//         type: "frontend",
//       },
//       {
//         id: "6",
//         title: "Project 2",
//         description:
//           "Curabitur ullamcorper ultricies nisi. Nam eget dui et nisi vestibulum interdum. In hac habitasse platea dictumst. Sed bibendum ultrices ante facilisis.",
//         images: [
//           "https://source.unsplash.com/300x200/?coding",
//           "https://source.unsplash.com/300x200/?programming",
//           "https://source.unsplash.com/300x200/?development",
          
//         ],
//         link: "#",
//         tech: ["React", "Firebase"],
//         type: "frontend",
//       },
//       {
//         id: "7",
//         title: "Project 1",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.",
//         images: [
//           "https://source.unsplash.com/300x200/?technology,code",
//           "https://source.unsplash.com/300x200/?programming",
//           "https://source.unsplash.com/300x200/?development",
//         ],
//         link: "#",
//         tech: ["React", "Node.js", "PostgreSQL"],
//         type: "frontend",
//       },
//       {
//         id: "8",
//         title: "Project 2",
//         description:
//           "Curabitur ullamcorper ultricies nisi. Nam eget dui et nisi vestibulum interdum. In hac habitasse platea dictumst. Sed bibendum ultrices ante facilisis.",
//         images: [
//           "https://source.unsplash.com/300x200/?coding",
//           "https://source.unsplash.com/300x200/?programming",
//           "https://source.unsplash.com/300x200/?development",
          
//         ],
//         link: "#",
//         tech: ["React", "Firebase"],
//         type: "frontend",
//       },
//   ]);
// });


// module.exports = router;
export default router;