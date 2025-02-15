import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Navbar = ({ sidebar, setSideBar }) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase font-mono"
          >
            Rainbow<span className="text-secondaryOrange">Paint.</span>
          </motion.h1>

          {/* hamburger section */}
          <div onClick={() => setSideBar(!sidebar)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Define PropTypes for the component
Navbar.propTypes = {
  sidebar: PropTypes.bool.isRequired, 
  setSideBar: PropTypes.func.isRequired,
};
