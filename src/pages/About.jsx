import transition from "../components/Effects/Transition";
import photo from "../../public/Images/decoration/backgrounds/photo.webp";
import { isMobile } from "react-device-detect";
import React, { useEffect, useRef } from "react";
import { useImageLoad } from "../hooks/useImageLoad";

const About = () => {
  const { imgRef, handleImageLoad } = useImageLoad();

  return (
    <section className="flex px-[5%] max-[639px]:gap-[120px] min-[639px]:gap-[200px] pb-24 min-h-screen w-[100%] text-white max-[639px]:pt-[110px] pt-[130px] justify-center">
      <div className=" z-10 max-w-[2000px] text-white w-full gap-8 flex flex-col items-center">
        <div className="z-10 flex w-[100%] max-w-[1700px] sm:w-full justify-start">
          <h3 className=" text-gray-400 text-6xl font-FontTitle font-semibold typing-animation max-[400px]:text-5xl max-[350px]:text-[43px] pb-4">
            About me
          </h3>
        </div>

        <div className="flex flex-wrap max-w-[1400px] justify-center w-full gap-10">
          <p
            className={`${
              isMobile ? "" : "fade-transition"
            } text-shadow text-3xl font-info font-light font-WorkSans`}
          >
            <span className="text-blue-500 text-3xl font-bold">¡HI! </span>
            i'm
            <span className=" text-red-500 text-3xl font-bold"> Fabio </span>
            and i'm excited to start my career in the world of programming. I am
            an enthusiast who is passionate about learning and exploring new
            technologies..
          </p>

          <div
            className={`${
              isMobile ? "" : "fade-transition"
            } gap-[10%] max-[980px]:gap-8 min-[981px]:px-[5%] flex max-[980px]:flex-col-reverse items-center justify-center`}
          >
            <div className="rounded-3xl w-full  max-[640px]:rounded-3xl max-[640px]:p-2 bg-[url('../../public/Images/decoration/backgrounds/P.jpg')] flex justify-center p-4 overflow-hidden">
              <p className="w-[90%] min-[980px]:max-w-[650px] text-center z-10 text-shadow text-3xl font-info font-light font-WorkSans">
                Although I am in my first steps in the field of programming, I
                am committed to my growth and development. My main focus so far
                has been web development, where I gained a basic understanding
                of HTML, React, CSS, and JavaScript.
              </p>
            </div>

            <div className="min-[981px]:pr-[2%] rounded-3xl flex flex-col items-center gap-5 max-w-[600px]">
              <div className="w-[90%] bg-[url('../../public/Images/decoration/backgrounds/fondo.jpg')] rounded-s-full rounded-tr-full max-[400px]:w-full">
                <img
                  ref={imgRef}
                  className="opacity-80"
                  src={photo}
                  onLoad={handleImageLoad}
                  alt="photo"
                />
              </div>
              <button className="btn font-WorkSans hover:scale-105 border border-blue-600 rounded-2xl px-4 py-[2px]">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default transition(About);
