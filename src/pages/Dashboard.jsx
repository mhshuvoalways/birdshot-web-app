import { motion } from "framer-motion";
import HeaderSidebar from "../components/headerSidebar";
import Card1 from "../components/card/Card1";
import Card2 from "../components/card/Card2";
import Card3 from "../components/card/Card3";
import JoinNow from "../components/buttons/JoinNow";
import SeeAll from "../components/buttons/SeeAll";

const items = [
  {
    id: 1,
    image: "/images/mobile.png",
    title: "Video Upload",
    icon: "fa-thin fa-heart",
  },
  {
    id: 2,
    image: "/images/mobile.png",
    title: "App Review",
    icon: "fa-thin fa-heart",
  },
];

const Dashboard = () => {
  return (
    <HeaderSidebar>
      <div className="flex justify-between gap-10 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[70%]">
          <div className="bg-fourthly text-firstly rounded-3xl p-10 relative">
            <img src="icons/star.png" className="absolute right-0 top-0 w-28" />
            <h5 className="font-medium">Birdshot Algorithm</h5>
            <h2 className="mt-1 font-semibold">
              Earn company share by contributing{" "}
              <br className="hidden md:block" /> in marketing
            </h2>
            <JoinNow />
          </div>
          <div className="flex justify-between items-center gap-3 mt-8 lg:flex-nowrap flex-wrap">
            <Card1 />
            <Card1 />
            <Card1 />
          </div>
          <div className="flex justify-between items-center mt-10">
            <h4 className="font-semibold">Hot Companies</h4>
            <SeeAll />
          </div>
          <div className="flex items-center sm:flex-nowrap flex-wrap gap-4 mt-5">
            <Card2 />
            <Card2 />
          </div>
        </div>
        <div className="w-full lg:w-[30%] bg-firstly rounded-3xl">
          <div className="flex items-center justify-between gap-4 px-7 pt-7">
            <h4 className="font-semibold">New Companies</h4>
            <i className="fa-solid fa-ellipsis-vertical text-3xl text-thirdly cursor-pointer"></i>
          </div>
          <Card2 />
          <div className="px-7">
            <h4 className="font-semibold mt-5">How to?</h4>
            <div className="bg-sixthly p-5 rounded-3xl space-y-5 my-5">
              {items.map((el) => (
                <div
                  className="flex justify-between items-center gap-2"
                  key={el.id}
                >
                  <img
                    src={el.image}
                    className="w-20 lg:w-4/12 rounded-2xl border-fourthly border-2"
                  />
                  <div>
                    <motion.p
                      whileTap={{
                        scale: 0.9,
                      }}
                      className="font-semibold"
                    >
                      {el.title}
                    </motion.p>
                    <p className="text-thirdly">{el.title}</p>
                  </div>
                  <i className={el.icon}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-10">
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Most Reward Companies</h4>
            <SeeAll />
          </div>
          <div className="flex items-center md:flex-nowrap flex-wrap gap-4 mt-5">
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Hot Companies</h4>
            <SeeAll />
          </div>
          <div className="flex items-center md:flex-nowrap flex-wrap gap-4 mt-5">
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">In Progress</h4>
            <SeeAll />
          </div>
          <div className="flex items-center md:flex-nowrap flex-wrap gap-4 mt-5">
            <Card3 />
            <Card3 />
            <Card3 />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Saved</h4>
            <SeeAll />
          </div>
          <div className="flex items-center md:flex-nowrap flex-wrap gap-4 mt-5">
            <Card3 />
            <Card3 />
            <Card3 />
          </div>
        </div>
      </div>
    </HeaderSidebar>
  );
};

export default Dashboard;
