import ScrolleableSecction from "../Effects/ScrolleableSection";
import { handleCreateItem } from "../../utils/createItem";
import { isMobile } from "react-device-detect";
import { useImageLoad } from "../../hooks/useImageLoad";

const data1 = [
  {
    src: "./Images/decoration/Icons/icon.svg",
    alt: "Svg",
    text: "Experience the world through VR glasses",
  },
  {
    src: "./Images/decoration/Icons/Frame.svg",
    alt: "Svg",
    text: "View all your surrounding with 360°",
  },
  {
    src: "./Images/decoration/Icons/controller.svg",
    alt: "Svg",
    text: "Incredible gaming experience",
  },
  {
    src: "./Images/decoration/Icons/businessplan.svg",
    alt: "Svg",
    text: "Making meetings and tours easier",
  },
];

const items = handleCreateItem(data1);

const Introduction = () => {
  const { imgRef, handleImageLoad } = useImageLoad();
  return (
    <section className="w-full max-w-[2000px] gap-14 flex justify-center flex-col items-center">
      <article
        className={`${
          isMobile ? "" : "fade-transition"
        } w-full max-[780px]:items-center max-[780px]:flex-col flex max-w-[2000px] justify-center mx-auto min-[780px]:flex-row-reverse max-[800px]:gap-[5%] min-[800px]:gap-[10%]`}
      >
        <article className="flex justify-center relative z-30 min-[780px]:min-w-[400px] max-[780px]:max-w-[500px]">
          <img
            ref={imgRef}
            onLoad={handleImageLoad}
            className="pt-6"
            src="./Images/decoration/Robot.webp"
            alt="image"
          />

          {/* movil */}
          <img
            className="min-[780px]:hidden absolute h-[11%] top-12 left-0"
            src="./Images/decoration/movil/Ellipse-movil.svg"
            alt="Svg"
          />
          <img
            className="min-[780px]:hidden absolute left-10 h-[5%]"
            src="./Images/decoration/movil/Ellipse-2-movil.svg"
            alt="Svg"
          />
          <img
            className="min-[780px]:hidden absolute right-7 h-[10%]"
            src="./Images/decoration/movil/Ellipse-3-movil.svg"
            alt="Svg"
          />

          {/* escritorio */}
          <img
            className="max-[780px]:hidden absolute h-[11%] top-16 left-0"
            src="./Images/decoration/Ellipse.svg"
            alt="Svg"
          />
          <img
            className="max-[780px]:hidden absolute left-16 h-[5%]"
            src="./Images/decoration/Ellipse2.png"
            alt="Svg"
          />
          <img
            className="max-[780px]:hidden absolute right-20 h-[10%]"
            src="./Images/decoration/Ellipse3.png"
            alt="Svg"
          />
        </article>

        <article className="z-10 flex flex-col justify-center items-start">
          <p className="sm:pb-3 max-[639px]:pb-4 font-FontTitle min-[3000px]:max-w-[600px] font-bold font__title">
            <span className="text-blue-600">Hi!</span> I’am a backend developed.
          </p>
          <p className="text-slate-300 max-w-[700px] min-[3000px]:max-w-[740px] font-WorkSans font-info text-shadow">
            I’m probably the most passionate developer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
          <button className="btn mt-4 border px-3 border-slate-200 rounded-md hover:scale-105">
            Click here
          </button>
        </article>
      </article>

      <ScrolleableSecction items={items[0]} />
    </section>
  );
};

export default Introduction;
