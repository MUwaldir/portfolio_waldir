import SocialLink from "../components/SocialLink";

const AboutPage = () => {
  return (
    <div className="flex-grow py-16">
      <section className="py-12 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 hover:text-blue-600 transition duration-300">
          ¡Hola, soy Waldir!
        </h1>
      </section>

      <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/3 md:px-10">
          <img
            src="https://source.unsplash.com/300x200/?random"
            alt="Profile Picture"
            className="w-full h-64 object-cover rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Waldir Merjildo</h2>
          <p className="text-gray-600">System Ingenier</p>
          <div className="flex space-x-2 mt-4">
            <SocialLink
              href="https://twitter.com/johndoe"
              icon={
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"
                  />
                </svg>
              }
              className="text-gray-500 hover:text-gray-700"
            />
            <SocialLink
              href="https://github.com/johndoe"
              icon={
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              }
              className="text-gray-500 hover:text-gray-700"
            />
            <SocialLink
              href="mailto:muwaldir@gmail.com"
              icon={
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                </svg>
              }
              className="text-gray-500 hover:text-gray-700 "
            />
            <SocialLink
             href="https://wa.me/51959277088?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F"
              icon={
                <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              }
              className="text-gray-500 hover:text-gray-700"
            />
          </div>
        </div>
        <div className="md:w-2/3 text-justify px-2">
          <p className="text-lg text-gray-700 ">
            Soy un apasionado desarrollador Full Stack con una sólida formación
            en Ingeniería de Sistemas y una amplia experiencia en tecnologías
            tanto en el frontend como en el backend. A lo largo de mi carrera,
            he trabajado con una variedad de herramientas y lenguajes,
            incluyendo Python, JavaScript, y bases de datos relacionales y no
            relacionales.
          </p>
          <p className="text-lg text-gray-700">
            He adquirido conocimientos a través de cursos en plataformas
            reconocidas como Platzi, así como completando un bootcamp intensivo
            de desarrollo Full Stack en HENRY. Aunque mi experiencia laboral es
            limitada, estoy comprometido con el aprendizaje continuo y estoy
            emocionado por enfrentar nuevos desafíos y oportunidades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
