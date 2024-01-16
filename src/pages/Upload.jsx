import { motion } from "framer-motion";
import HeaderSidebar from "../components/headerSidebar";
import Videos from "../components/videos";
import User from "../components/icons/User";

const Upload = () => {
  return (
    <HeaderSidebar>
      <div>
        <h2 className="font-semibold">Bumb + App Review</h2>
        <div className="mt-8 flex justify-between items-center gap-10 flex-wrap lg:flex-nowrap">
          <img
            src="/images/appreview.jpg"
            className="rounded-3xl w-full sm:w-7/12"
          />
          <div>
            <h2>SNS App Review</h2>
            <h4 className="font-medium mt-5 lg:mt-12">
              Upload 10 different videos for 10 days with brand new youtube
              channel
            </h4>
            <div className="flex items-center gap-4 mt-5">
              <h3 className="font-medium">12 tokens</h3>
              <h5 className="font-medium">(in total)</h5>
            </div>
            <div className="flex items-center mt-5 justify-between">
              <User className={"mt-3"} />
              <div className="flex items-center gap-3">
                <i className="fa-thin fa-heart border-thirdly border-2 p-1.5 rounded-full"></i>
                <h4 className="font-semibold">120</h4>
              </div>
            </div>
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              className="btn1 mt-10"
            >
              Start Mission
            </motion.button>
          </div>
        </div>
      </div>
      <div className="mt-28 space-y-20">
        <div>
          <h3 className="font-semibold">Description</h3>
          <div className="mt-8 flex justify-between items-center gap-10 flex-wrap lg:flex-nowrap">
            <img
              src="/images/appreview.jpg"
              className="rounded-3xl w-full sm:w-4/12 mr-auto"
            />
            <div>
              <h2>First, make a new channel and account.</h2>
              <p className="font-medium text-thirdly mt-5">
                Email must be made following the description for verification.
                After Google account is made, YouTube channel and TikTok account
                must be made.
                <br />
                ex) Use “washermachine20240101@gmail.com” to make Google
                account.
              </p>
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                className="btn2 mt-5"
              >
                Complete
              </motion.button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 flex-wrap lg:flex-nowrap">
            <div>
              <h2>Second, upload videos on it.</h2>
              <p className="font-medium text-thirdly mt-5">
                Email must be made following the description for verification.
                After Google account is made, YouTube channel and TikTok account
                must be made.
                <br />
                ex) Use “washermachine20240101@gmail.com” to make Google
                account.
              </p>
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                className="btn2 mt-5"
              >
                Complete
              </motion.button>
            </div>
            <img
              src="/images/appreview.jpg"
              className="rounded-3xl w-full sm:w-4/12 mr-auto"
            />
          </div>
        </div>
        <div>
          <div className="mt-8 flex justify-between items-center gap-10 flex-wrap lg:flex-nowrap">
            <img
              src="/images/appreview.jpg"
              className="rounded-3xl w-full sm:w-4/12 mr-auto"
            />
            <div>
              <h2>First, make a new channel and account.</h2>
              <p className="font-medium text-thirdly mt-5">
                Email must be made following the description for verification.
                After Google account is made, YouTube channel and TikTok account
                must be made.
                <br />
                ex) Use “washermachine20240101@gmail.com” to make Google
                account.
              </p>
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                className="btn2 mt-5"
              >
                Complete
              </motion.button>
            </div>
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
    </HeaderSidebar>
  );
};

export default Upload;
