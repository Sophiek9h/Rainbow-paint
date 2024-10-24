import React from "react";
import bgImage from "../../assets/bg-slate.png";
import paintMain from "../../assets/paintbucket.png";
import { Navbar } from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImageStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export const Hero = () => {
  const [sidebar, setSideBar] = React.useState(false);

  return (
    <main style={bgImageStyle}>
      <section className="relative min-h-[750px] w-full:">

        <div className="container">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} setSideBar={setSideBar} />

          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[800px] ">

            {/* first text section */}
            <div className="text-NightColor mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.6,
                }}
                className="text-7xl leading-tight ml-14 font-custom text-secondaryOrange"
              >
                Rainbow Paint
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl">20 Years of Color</h2>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut id, soluta beatae optio magni nam ratione
                    perspiciatis odit quaerat.
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-GeryColor"></div>
              </motion.div>
            </div>

            {/* second image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3,
                }}
                src={paintMain}
                alt="Hero Image"
                className="relative z-40 h-[400px] md:h-[400px] img-shadow"
              />

              {/* big text section */}
              <div className="absolute -top-20 left-[200px] z-[1]">
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.6,
                  }}
                  className="text-[140px] scale-150 font-bold text-GeryColor/40 leading-none opacity-25 "
                >
                  Rainbow Paint
                </motion.h1>
              </div>
            </div>

            {/* third div section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="hidden lg:block text-NightColor mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-semibold leading-tight ml-14">
                Rainbow Paint
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl">Serving 10 Countries</h2>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aut id, soluta beatae optio magni nam ratione
                    perspiciatis odit quaerat.
                  </p>
                </div>
                <div className="absolute -top-6 -right-9 w-[250px] h-[190px] bg-GeryColor "></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* sidebar section */}
       {sidebar && (
        <div className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-secondaryOrange/80 to-secondaryOrange/80 backdrop-blur-sm z-10">
        <div className="w-full h-full flex flex-col text-white justify-center items-center gap-6">
          {/* line */}
          <div className="w-[1px] h-[70px] bg-white"></div>

          {/* social icons */}
          <div className="inline-block p-2 rounded-full border border-white cursor-pointer text-2xl">
            <FaFacebookF />
          </div>
          <div className="inline-block p-2 rounded-full border border-white cursor-pointer text-2xl">
            <FaTwitter />
          </div>
          <div className="inline-block p-2 rounded-full border border-white cursor-pointer text-2xl">
            <FaInstagram />
          </div>

          {/* line */}
          <div className="w-[1px] h-[70px] bg-white"></div>
        </div>
      </div>
       )}

      </section>
    </main>
  );
};
