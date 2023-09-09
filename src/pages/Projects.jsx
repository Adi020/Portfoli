import transition from "../components/Effects/Transition";
import "./style/Projects.css";
import ScrolleableSecction from "../components/Effects/ScrolleableSection";
import weather from "../../public/ProjectsPreview/Clima.webp";
import usersConsult from "../../public/ProjectsPreview/ConsultaDeUsuarios.webp";
import ramdomPhrase from "../../public/ProjectsPreview/FraseRandom.jpg";
import shoppingCart from "../../public/ProjectsPreview/Carrito.webp";
import pokedex from "../../public/ProjectsPreview/Pokedex.webp";
import { handleCreateItem } from "../utils/createItem";
import { isMobile } from "react-device-detect";
import { useDispatch } from "react-redux";
import { setImageLoaded } from "../store/slices/imageLoading";
import { useEffect, useRef } from "react";
import { useImageLoad } from "../hooks/useImageLoad";

const data = [
  {
    src: weather,
    title: "Weather app by location",
    link: "https://entregable-gen26-2.netlify.app/",
    repository: "https://github.com/Adi020/Weather-app/tree/main",
    technologies: "React & CSS",
  },
  {
    src: usersConsult,
    title: "App to add and remove users",
    link: "https://entregable4-gen-26-react.netlify.app/",
    repository: "https://github.com/Adi020/Add-users-app",
    technologies: "React & Tailwind/CSS",
  },
  {
    src: ramdomPhrase,
    title: "App of phrases and random images",
    link: "https://entregable-gen26.netlify.app/",
    repository: "https://github.com/Adi020/App-phrase-random",
    technologies: "React & Tailwind/CSS",
  },
  {
    src: shoppingCart,
    title: "Shopping cart",
    link: "https://mi-ccarrito-de-compras.netlify.app/",
    repository: "https://github.com/Adi020/Carrito.de.compras",
    technologies: "HTML, JavaScript & CSS",
  },
  {
    src: pokedex,
    title: "Query app with pokemon filter via API",
    link: "https://pokedex-proyectt.netlify.app/",
    repository: "https://github.com/Adi020/Pokedex",
    technologies: "React & Tailwind/CSS",
  },
];

const items = handleCreateItem(data);

const Projects = () => {
  const { imgRef, handleImageLoad } = useImageLoad();
  return (
    <section className="pb-[10%] flex flex-wrap justify-center mx-auto items-center max-[640px]:pt-[110px] pt-36 gap-16 max-w-[2000px]">
      <ScrolleableSecction items={items[0]} links={items[1]} />

      <div className="z-10 flex w-[100%] max-w-[1700px] sm:w-[80%] max-[1740px]:mr-[5%]  max-[640px]:pl-[5%] justify-start">
        <h3 className=" text-gray-400 text-6xl font-semibold pb-4 typing-animation max-[400px]:text-5xl max-[350px]:text-[43px] font-FontTitle">
          My projects
        </h3>
      </div>

      <section
        className={`${
          isMobile ? "" : "fade-transition"
        } z-10 flex justify-center h-auto max-w-[1500px] backdrop-blur-[30px] flex-wrap bg-[#27262660] rounded-3xl py-8 min-[1500px]:w-[100%] gap-y-[60px] sm:gap-x-[4%]`}
      >
        {data.map((item, index) => (
          <article
            className={`relative flex port-box box-shadow overflow-hidden rounded-2xl min-h-[250px] max-[640px]:max-h-[300px] ${
              /*estilos de ultimo proyecto*/
              index === data.length - 1 && index % 2 === 0
                ? "latest--project"
                : /*estilos invertidos cada 2 elementos y reiniciar cada 4 elementos*/
                Math.floor(index / 2) % 2 === 0
                ? index % 2 === 0
                  ? "par--project"
                  : "odd--project"
                : index % 2 === 0
                ? "odd--project"
                : "par--project"
            }`}
            key={index}
          >
            <div className="w-full h-full port-image">
              <img className="object-cover" src={item.src} onLoad={handleImageLoad} ref={imgRef} alt="image" />
            </div>

            <div className="absolute flex flex-col text-center justify-center port-content h-[100%] w-[100%] background">
              <p className=" text-slate-300 text-2xl pb-3 font-bold">
                {item.title}
              </p>

              <p className="text-slate-300 pb-3 font-medium">
                <span className=" text-blue-400 font-semibold">
                  technologies used:
                </span>
                {item.technologies}
              </p>

              <div className="flex justify-evenly items-center">
                <div className="flex justify-around items-center flex-col">
                  <a
                    className="text-4xl"
                    href={item.repository}
                    target="_blank"
                  >
                    <i className="bx bxl-github icon-git duration-500 hover:rounded-full"></i>
                  </a>

                  <a
                    className=" text-xl font-bold text-blue-300 hover:text-blue-400"
                    href={item.repository}
                    target="_blank"
                  >
                    Repository
                  </a>
                </div>

                <div className="flex justify-center items-center flex-col">
                  <a className="text-4xl" href={item.link} target="_blank">
                    <i className="bx bxl-netlify icon duration-500 hover:rounded-full"></i>
                  </a>
                  <a
                    className=" text-xl font-bold text-blue-300 hover:text-blue-400"
                    href={item.link}
                    target="_blank"
                  >
                    WebSite
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default transition(Projects);
