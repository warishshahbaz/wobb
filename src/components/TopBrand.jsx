import React from "react";
import { motion } from "framer-motion";
import firstImg from "../asserts/topbrand.webp";
import secondImg from "../asserts/image5.webp";

const TopBrand = () => {
  return (
    <div className="px-4 py-2 lg:h-[90vh] ">
      <h1 className="lg:text-2xl text-xl text-gray-400 font-bold text-center py-3">
        How to Collaborate With Brands
      </h1>
      <div className="flex w-full justify-between lg:flex-row flex-col 2xl:px-8 px-4 py-5">
        {/* Left Image with Animation */}
        <motion.div
          className=" w-[100%] lg:w-[50%] p-4"
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={secondImg}
            className=" lg:rounded-tr-[100px] rounded-tr-[40px] lg:rounded-bl-[100px] rounded-bl-[40px] "
            alt="topbrand"
          />
        </motion.div>

        {/* Right Image with Animation */}
        <motion.div
          className=" w-[100%] lg:w-[50%] flex justify-center items-center p-4 rounded-2xl "
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={firstImg}
            width={"80%"}
            alt="topbrand"
            className=" lg:rounded-tr-[100px] rounded-tr-[40px] lg:rounded-bl-[100px] rounded-bl-[40px] "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TopBrand;
