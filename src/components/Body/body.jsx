import "../Body/body.css";
import blob from "/blobs.png";
import blobR from "/blobR.png";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import Blur_heroImage from "./blur_edc_group.webp";
import heroImage from "./edc_group.webp";
import Image from "../Image";

function Body() {
  // These variants define the initial and hover states for the text
  // The `show` state is the initial state, and the `hover` state is the state when the text is hovered over
  const upvarient = {
    show: {
      y: 0,
      opacity: 1,
    },
    hover: {
      y: -40,
      opacity: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  const downvarient = {
    show: {
      y: 40,
      opacity: 0,
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  return (
    <div className="h-screen p-0 w-full m-0">
      <div className="sm:h-full relative h-screen w-screen bg-no-repeat sm:w-full p-0 m-0 box-border bg-center flex flex-col b-body justify-center items-center bg-cover ">
        <div className="absolute inset-0 ">
          <Image
            src={heroImage}
            blurSrc={Blur_heroImage}
            alt="Hero Image"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))]"></div>
        </div>
        <div className="heading w-full flex justify-center items-center">
          <h1 className="text-center tracking-tighter [word-spacing:0.09em] text-3xl md:text-5xl lg:text-6xl uppercase text-white font-bold">
            <motion.div
              initial="show"
              whileHover="hover"
              className="overflow-hidden cursor-default lg:h-14 relative"
            >
              <motion.div className="absolute inset-0" variants={upvarient}>
                Igniting the innovation
              </motion.div>
              <motion.div variants={downvarient}>
                Igniting the innovation
              </motion.div>
            </motion.div>
            <motion.div
              initial="show"
              whileHover="hover"
              className="overflow-hidden h-24 cursor-default lg:h-14 relative"
            >
              <motion.div className="absolute  inset-0" variants={upvarient}>
                within upcoming ground breakers.
              </motion.div>
              <motion.div variants={downvarient}>
                within upcoming ground breakers.
              </motion.div>
            </motion.div>
          </h1>
        </div>
        <div
          className="group duration-150 ease-in-out cursor-pointer hover:bg-[whitesmoke]  rounded-[10px] text-2xl border border-white  hover:scale-110 backdrop-blur-sm text-black h-auto"
          onClick={() => {
            scroller.scrollTo("our_stats", {
              smooth: true,
              duration: 500,
              offset: -70,
            });
          }}
        >
          <div className="flex justify-center items-center">
            <button className="group-hover:text-black px-8 py-1.5 text-white transition ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <img alt="Blob 1" loading="lazy" src={blob} className="blob1" />
      <img alt="Blob 2" loading="lazy" src={blob} className="blob2" />
      <img alt="Blob 3" loading="lazy" src={blobR} className="blob3" />
      <img alt="Blob 4" loading="lazy" src={blob} className="blob4" />
      <img alt="Blob 5" loading="lazy" src={blobR} className="blob5" />
      <img alt="Blob 6" loading="lazy" src={blobR} className="blob6" />
    </div>
  );
}

export default Body;
