import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import bannerImg from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="min-h-[80vh] text-center  lg:w-8/12 mx-auto mt-5 space-y-5 ">
      <h2 className="font-bold text-3xl ">
        We Build <br /> <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p>
        At PH-Play-Store, we creaft innovative apps designed to make everyday
        life simpler, samrter, and more exciting. Our goal is to turn your ideas
        digital experience that truly make an impact
      </p>
      <div className="flex justify-center gap-2">
        <button className="btn">
          <FaGooglePlay /> Play Store
        </button>
        <button className="btn">
          <FaAppStore /> App Store
        </button>
      </div>
      <img className="lg:w-[80%] mx-auto" src={bannerImg} />
    </div>
  );
};

export default Banner;
