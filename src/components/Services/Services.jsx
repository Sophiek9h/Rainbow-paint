// import React from 'react'
import { motion } from "framer-motion";
import image1 from "../../assets/a.png";

const data = [
  {
    id: 1,
    image: image1,
    title: "Paint Jobs",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
  },
  {
    id: 2,
    image: image1,
    title: "Color Consultation",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
  },
  {
    id: 3,
    image: image1,
    title: "Paint Mixing",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
  },
];

const cardVarient = {
  hidden: { opacity: 0, y: 20 },
  visible: {
     opacity: 1,
      y: 0, 
    transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
      },
    },

};

const containerVarient = {
  hidden: { opacity: 1 },
  visible: { opacity: 1,
  transition: {
    delay: 0.6,
    staggerChildren: 0.4,
  },
},
};

export const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-primaryBrown"
        >
          Our <span className="text-secondaryOrange">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="text-sm opacity-50"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          praesentium natus amet?
        </motion.p>
      </div>

      {/* card section */}
      <motion.div
        variants={containerVarient}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {data.map((Services, id) => (
          <motion.div
            variants={cardVarient}
            key={id}
            className="text-center p-8 space-y-6"
          >
            <div className="flex justify-center items-center m-auto">
              <img
                src={Services.image}
                alt={Services.title}
                className="img-shadow"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-secondaryOrange">
                {Services.title}
              </h1>
              <p className="text-primaryBrown text-sm">{Services.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
