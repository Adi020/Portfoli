import { isMobile } from "react-device-detect";

const Contact = () => {
  return (
    <section
      className={`${
        isMobile ? "" : "fade-transition"
      } z-10 sm:px-[10%] max-[640px]:px-[5%] flex bg-[#27262660] backdrop-blur-[30px] w-full justify-center`}
    >
      <div className=" text-white gap-7 py-9 lg:gap-[40px] flex flex-col items-center justify-center">
        <p className="text-slate-400 sm:text-4xl text-start max-[640px]:text-3xl min-[1200px]:text-[46px] font-FontTitle">
          ¡Contact Me!
        </p>
        <p className="text-slate-400 text-center font-WorkSans max-w-[600px] min-[1500px]:max-w-[700px] font-info">
          If you have an interesting project in mind or if you are looking for
          collaborators for a project, do not hesitate to contact me. I am open
          to exciting opportunities and willing to take on new challenges.
        </p>
        <a
          className="hover:scale-105 border min-[1200px]:text-[20px] border-slate-400 text-slate-400 rounded-md px-3 btn"
          href="mailto:adrian.camacho.zotelo@gmail.com"
          target="_blank"
        >
          Click here
        </a>
      </div>
    </section>
  );
};

export default Contact;
