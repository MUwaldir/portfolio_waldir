import { useEffect } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import SkillsList from "../components/SkillsList";

const HomePage = () => {
  const skills = [
    { name: "HTML5", iconUrl: "https://simpleicons.org/icons/html5.svg" },
    { name: "CSS3", iconUrl: "https://simpleicons.org/icons/css3.svg" },
    {
      name: "JavaScript",
      iconUrl: "https://simpleicons.org/icons/javascript.svg",
    },
    { name: "React.js", iconUrl: "https://simpleicons.org/icons/react.svg" },
    { name: "Angular", iconUrl: "https://simpleicons.org/icons/angular.svg" },

    {
      name: "Node.js",
      iconUrl: "https://simpleicons.org/icons/nodedotjs.svg",
    },
    {
      name: "Express.js",
      iconUrl: "https://simpleicons.org/icons/express.svg",
    },
    { name: "MongoDB", iconUrl: "https://simpleicons.org/icons/mongodb.svg" },
    { name: "MySQL", iconUrl: "https://simpleicons.org/icons/mysql.svg" },
    {
      name: "PostgreSQL",
      iconUrl: "https://simpleicons.org/icons/postgresql.svg",
    },
    { name: "Firebase", iconUrl: "https://simpleicons.org/icons/firebase.svg" },
    { name: "GraphQL", iconUrl: "https://simpleicons.org/icons/graphql.svg" },
    {
      name: "TypeScript",
      iconUrl: "https://simpleicons.org/icons/typescript.svg",
    },
    { name: "Redux", iconUrl: "https://simpleicons.org/icons/redux.svg" },

    { name: "SASS", iconUrl: "https://simpleicons.org/icons/sass.svg" },
    {
      name: "Bootstrap",
      iconUrl: "https://simpleicons.org/icons/bootstrap.svg",
    },
    {
      name: "Tailwind CSS",
      iconUrl: "https://simpleicons.org/icons/tailwindcss.svg",
    },
  ];


  return (
    <div className="flex-grow ">
      {/* <section className="py-12 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 hover:text-blue-600 transition duration-300">
        Bienvenido a mi portfolio
      </h1>
      <p className="text-gray-600">
        Soy un programador full stack con experiencia en diferentes
        tecnologías y herramientas.
      </p>
    </section> */}
      {/* <section className="py-12 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 hover:text-blue-600 transition duration-300">
          ¡Hola, soy Waldir!
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Soy un apasionado desarrollador Full Stack con una sólida formación en
          Ingeniería de Sistemas y una amplia experiencia en tecnologías tanto
          en el frontend como en el backend. A lo largo de mi carrera, he
          trabajado con una variedad de herramientas y lenguajes, incluyendo
          Python, JavaScript, y bases de datos relacionales y no relacionales.
        </p>
        <p className="text-gray-600 max-w-lg mx-auto mt-4">
          He adquirido conocimientos a través de cursos en plataformas
          reconocidas como Platzi, así como completando un bootcamp intensivo de
          desarrollo Full Stack en HENRY. Aunque mi experiencia
          laboral es limitada, estoy comprometido con el aprendizaje continuo y
          estoy emocionado por enfrentar nuevos desafíos y oportunidades.
        </p>
      </section> */}
      {/* <section className="py-12 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 hover:text-blue-600 transition duration-300">
          Hola, soy un desarrollador full stack con experiencia en diferentes tecnologías y herramientas.
        </h1>
        <p className="text-gray-600">
          Me gradué de Ingeniería de Sistemas y he tomado cursos en desarrollo web profesional y en la plataforma Platzi. También completé un bootcamp de desarrollo full stack en Henry. Actualmente, tengo poca experiencia en el mundo laboral, pero estoy buscando nuevas oportunidades para aplicar mis habilidades y seguir aprendiendo.
        </p>
      </section> */}
      {/* <section className="py-12 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 hover:text-blue-600 transition duration-300">
          ¡Hola, soy Waldir!
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Soy un apasionado desarrollador Full Stack con una sólida formación en
          Ingeniería de Sistemas y una amplia experiencia en tecnologías tanto
          en el frontend como en el backend. A lo largo de mi carrera, he
          trabajado con una variedad de herramientas y lenguajes, incluyendo
          Python, JavaScript, y bases de datos relacionales y no relacionales.
        </p>
        <p className="text-gray-600 max-w-lg mx-auto mt-4">
          He adquirido conocimientos a través de cursos en plataformas
          reconocidas como Platzi, así como completando un bootcamp intensivo de
          desarrollo Full Stack en HENRY. Aunque mi experiencia laboral es
          limitada, estoy comprometido con el aprendizaje continuo y estoy
          emocionado por enfrentar nuevos desafíos y oportunidades.
        </p>
      </section> */}
       <section className="py-12 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 hover:text-blue-600 transition duration-300">
          ¡Bienvenido a mi portfolio!
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Soy un apasionado desarrollador Full Stack con experiencia en una variedad de tecnologías tanto en el frontend como en el backend. Echa un vistazo a mis habilidades y proyectos a continuación.
        </p>
      </section>

      <div className="mx-auto max-w-4xl">
        <SkillsList skills={skills} />
      </div>
      <Projects />
    </div>
  );
};

export default HomePage;
