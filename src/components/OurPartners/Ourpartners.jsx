import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import { motion } from "framer-motion";

const partnersData = [
  {
    id: 1,
    image: partner1,
    name: "Valspar",
  },
  {
    id: 2,
    image: partner2,
    name: "Minwax",
  },
  {
    id: 3,
    image: partner3,
    name: "Dulicolor",
  },
  {
    id: 4,
    image: partner4,
    name: "Krylon",
  },
];

export const Ourpartners = () => {
  return (
    <div className="my-24 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">
        Our <span className="text-secondaryOrange">Partners</span>
      </h2>
      <div className="flex justify-center items-center m-auto gap-10">
        {partnersData.map((partner) => (
          <motion.div
          initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
          key={partner.id} className="text-center w-[250px]">
            <img src={partner.image} alt={partner.name} className="w-40 h-auto mx-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
