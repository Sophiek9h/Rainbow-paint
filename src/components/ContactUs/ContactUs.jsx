// import React from 'react'
import map from "../../assets/world-map.png";
import { motion } from "framer-motion";

export const ContactUs = () => {
  return (
    <div className="container my-28 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8">
        {/* form section */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-4xl text-GeryColor font-serif font-bo"
          >
            Contact Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full"
            />
            <input
              type="text"
              placeholder="zipcode"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="primary-btn w-full"
          >
            {" "}
            Send {" "}
          </motion.button>
        </div>
        {/* map section */}
        <div className="col-span-1">
          <motion.img 
          initial={{ opacity: 0, scale: 0.5}}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1,
          }}
          src={map} alt="map" className="w-full sm:w-[500px] mx-auto" />
        </div>
      </div>
    </div>
  );
};
