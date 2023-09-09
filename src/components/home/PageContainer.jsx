import { isMobile } from "react-device-detect";

const ContainerInformation = () => {
  return (
    <section className="max-w-[1500px] max-[900px]:w-[97%] min-[900px]:w-[100%] max-[639px]:gap-[100px] min-[639px]:gap-[150px] flex flex-wrap">
      <section
        className={`${
          isMobile ? "" : "fade-transition"
        } z-10 flex justify-center items-center w-[100%] container_responsive`}
      >
        <div className="flex flex-col first_container_info rs:pr-[10%]">
          <p className="pb-5 min-[2000px]:max-w-[500px] max-w-[600px] font-bold font__title font-FontTitle">
            <span className=" text-blue-600 ">Last landing</span> and website
            projects
          </p>
          <p className="text-slate-300 max-w-[600px] font-WorkSans font-info text-shadow">
            I’m probably the most passionate developer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
        </div>

        <div className="relative sm:w-auto flex max-[780px]:w-[90%] max-[780px]:h-[90%] min-h-[300px] max-w-[400px] min-[780px]:min-h-[320px] min-[780px]:max-w-[440px]">
          <img
            className="z-10 max-[400px]:w-auto"
            src="./Images/decoration/backgrounds/mask.webp"
            alt="image"
          />
          <img
            className={`${
              isMobile ? "" : "fade-transition"
            } z-20 absolute h-[72%] w-[65%] top-0 left-0 right-0 bottom-16 m-auto rounded-3xl`}
            src="./Images/decoration/backgrounds/movil.webp"
            alt="Svg"
          />
          <img
            className="z-10 absolute h-[20%] w-[68%] min-[400px]:left-20 bottom-11 right-0 m-auto"
            src="./Images/decoration/backgrounds/Ellipse.png"
            alt="Svg"
          />
        </div>
      </section>

      <section
        className={`${
          isMobile ? "" : "fade-transition"
        } z-10 flex justify-center items-center w-[100%] second_container_info`}
      >
        <div className="z-10 flex flex-col justify-center items-start rs:pl-[10%]">
          <p className="pb-5 font-FontTitle min-[2000px]:max-w-[500px] font-bold font__title">
            <span className=" text-blue-600 ">Build</span> a whole new world
          </p>
          <p className=" text-slate-300 font-WorkSans max-w-[600px] font-info text-shadow">
            Through web programming. Turn your ideas into reality and bring your
            digital visions to life on this exciting journey towards creating
            engaging and interactive experiences.
          </p>
        </div>

        <div className="relative sm:w-auto flex max-[780px]:w-[90%] max-[780px]:h-[90%] min-h-[300px] max-w-[400px] min-[780px]:min-h-[320px] min-[780px]:max-w-[440px]">
          <img
            className="z-10 max-[400px]:w-auto"
            src="./Images/decoration/backgrounds/mask.webp"
            alt="image"
          />
          <img
            className={`${
              isMobile ? "" : "fade-transition"
            } z-20 absolute h-[80%] w-[60%] max-[450px]:bottom-14 -top-0 left-6 right-0 bottom-16 m-auto rounded-3xl`}
            src="./Images/decoration/backgrounds/Code.webp"
            alt="Svg"
          />
          <img
            className="z-10 absolute h-[25%] w-[68%] max-[450px]:left-5 left-0 bottom-9 right-20 m-auto"
            src="./Images/decoration/backgrounds/EllipseDesktop.png"
            alt="Svg"
          />
        </div>
      </section>
    </section>
  );
};

export default ContainerInformation;
