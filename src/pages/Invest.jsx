import { useEffect } from "react";
import { motion } from "framer-motion";
import HeaderSidebar from "../components/headerSidebar";
import JoinNow from "../components/buttons/JoinNow";
import SearchInput from "../components/input/SearchInput";
import SeeAll from "../components/buttons/SeeAll";
import Card4 from "../components/card/Card4";
import Progress from "../components/utils/Progress";
import Videos from "../components/videos";

const btnItems = ["Application", "Web App", "Platform"];

const Upload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HeaderSidebar>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <p className="w-9 h-9 rounded-full flex justify-center items-center border-fourthly border-2">
            <i className="fa-regular fa-dollar-sign text-2xl text-fourthly"></i>
          </p>
          <h3 className="text-fourthly font-medium">Invest</h3>
        </div>
        <h5 className="font-medium">Tokens: 31</h5>
      </div>
      <div className="relative mt-10">
        <img
          src="/images/star.jpg"
          className="rounded-3xl object-cover h-full w-full absolute"
        />
        <div className="relative p-10 text-firstly">
          <div className="font-semibold">
            <h4>Birdshot Algorithm</h4>
            <h2 className="mt-5">
              Earn company share by contributing{" "}
              <br className="hidden md:block" /> in marketing
            </h2>
          </div>
          <JoinNow />
        </div>
      </div>
      <div className="mt-10 flex items-center flex-wrap lg:flex-nowrap justify-between gap-5">
        <SearchInput className={"w-full min-w-32"} />
        <div className="flex items-center gap-1 sm:gap-3 w-full flex-wrap sm:flex-nowrap">
          {btnItems.map((el, index) => (
            <motion.p
              whileTap={{ scale: 0.9 }}
              className="text-xl font-medium border-2 border-fourthly rounded-full min-w-36 w-full px-5 py-2 text-center bg-firstly cursor-pointer"
              key={index}
            >
              {el}
            </motion.p>
          ))}
        </div>
        <SeeAll className="w-28 mx-auto text-center" />
      </div>
      <div className="mt-5 flex items-center justify-between gap-5 flex-wrap lg:flex-nowrap">
        <Card4 />
        <Card4 />
        <Card4 />
      </div>
      <div className="mt-28">
        <h2 className="font-semibold">Bumb + App Review</h2>
        <div className="mt-8 flex justify-between items-center gap-10 flex-wrap lg:flex-nowrap">
          <img
            src="/images/appreview.jpg"
            className="rounded-3xl w-full lg:w-7/12"
          />
          <div className="w-full">
            <h2>Video Number 8</h2>
            <h4 className="font-medium mt-5 lg:mt-12">
              Upload 10 different videos for 10 days with brand new youtube
              channel
            </h4>
            <div className="flex items-center gap-4 mt-5">
              <h3 className="font-medium">12 tokens</h3>
              <h5 className="font-medium">(in total)</h5>
            </div>
            <Progress className="mt-10" />
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              className="btn1 mt-10"
            >
              Submit day 8
            </motion.button>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <h3 className="font-semibold">Channel Verification</h3>
        <div className="mt-8 flex items-center gap-10 flex-wrap md:flex-nowrap">
          <img
            src="/images/appreview.jpg"
            className="rounded-3xl w-full md:min-w-96 md:w-4/12"
          />
          <div className="w-full md:w-auto">
            <h1 className="font-medium">Channel Name</h1>
            <p className="font-medium text-thirdly mt-5">
              jonathan20240101@gmail.com
            </p>
            <p className="font-medium text-thirdly mt-5">
              Made at 2024-01-01
              <br />
              Verified at 2024-01-02
            </p>
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              className="btn2 mt-5 w-full"
            >
              Complete
            </motion.button>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <h3 className="font-semibold">Videos</h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
          <Videos />
        </div>
      </div>
      <div>
        <div className="mt-28 flex flex-wrap lg:flex-nowrap justify-between gap-5">
          <div className="w-full lg:w-[20%] space-y-5">
            <div className="relative">
              <img
                src="/images/star.jpg"
                className="rounded-3xl object-cover h-56 lg:h-[280px] w-full absolute"
              />
              <div className="flex justify-center items-center h-56 lg:h-[280px] relative">
                <div className="text-firstly text-center">
                  <h1 className="font-semibold">59</h1>
                  <h3 className="mt-5">Managers</h3>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/star.jpg"
                className="rounded-3xl object-cover h-56 lg:h-[180px] w-full absolute"
              />
              <div className="flex justify-center items-center h-56 lg:h-[180px] relative">
                <div className="text-firstly text-center font-semibold">
                  <h4>Lorem Ipsum</h4>
                  <h3 className="mt-5">Lorem Ipsum</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-[50%]">
            <img
              src="/images/star.jpg"
              className="rounded-3xl object-cover h-[480px] w-full absolute"
            />
            <div className="relative p-10 space-y-8">
              <div className="flex items-center gap-5">
                <img src="/images/number1.jpg" className="w-28 rounded-3xl" />
                <h4 className="text-firstly">Number</h4>
              </div>
              <div className="flex items-center gap-5">
                <img src="/images/number2.jpg" className="w-28 rounded-3xl" />
                <h4 className="text-firstly">Number</h4>
              </div>
              <div className="flex items-center gap-5">
                <img src="/images/number3.jpg" className="w-28 rounded-3xl" />
                <h4 className="text-firstly">Number</h4>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-[30%]">
            <img
              src="/images/star.jpg"
              className="rounded-3xl object-cover h-56 lg:h-[480px] w-full absolute"
            />
            <div className="flex justify-center items-center h-56 lg:h-[480px] relative">
              <div className="text-firstly text-center">
                <p className="text-9xl font-semibold">259</p>
                <h2 className="mt-5">Uploads</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-5 mt-5">
          <div className="relative w-full lg:w-[70%]">
            <img
              src="/images/star.jpg"
              className="rounded-3xl object-cover h-full w-full absolute"
            />
            <div className="relative p-10 text-firstly">
              <div className="font-semibold">
                <h4>Birdshot Algorithm</h4>
                <h2 className="mt-5">
                  Earn company share by contributing in marketing
                </h2>
              </div>
              <JoinNow />
            </div>
          </div>
          <div className="relative w-full lg:w-[30%]">
            <img
              src="/images/text.jpg"
              className="rounded-3xl object-cover h-72 lg:h-[290px] w-full absolute"
            />
            <div className="flex justify-center items-center h-72 lg:h-[290px] relative">
              <div className="text-firstly text-center">
                <h2 className="font-semibold">Refferals</h2>
                <h4 className="mt-5">Refferals</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderSidebar>
  );
};

export default Upload;
