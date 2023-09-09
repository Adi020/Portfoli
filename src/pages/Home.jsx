import Contact from "../components/home/Contact";
import ContainerInformation from "../components/home/PageContainer";
import Introduction from "../components/home/Introduction";
import transition from "../components/Effects/Transition";
import "./../pages/style/Home.css";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-[5%] max-[639px]:gap-[120px] min-[639px]:gap-[200px] w-[100%] text-white justify-center max-[639px]:pt-[110px] pt-[130px] pb-24 items-center">
        <Introduction />
        <ContainerInformation />
      </div>
      <Contact />
    </div>
  );
};

export default transition(Home);
