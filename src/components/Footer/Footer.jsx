import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTelegram, FaGoogle } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-secondaryOrange text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center">
          {/* Column 1 - Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Rainbow Paint</h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, 
              praesentium ab atque? Quidem maxime, numquam dolores.
            </p>
            <p className="flex justify-center md:justify-center items-center mb-2">
              <FaPhoneAlt className="mr-2" /> +1 (123) 456-0000
            </p>
            <p className="flex justify-center md:justify-center items-center">
              <FaMapMarkerAlt className="mr-2" /> Malawi
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact us</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3 - Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-center space-x-4 mb-4 text-2xl">
              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebookF className="hover:text-gray-300" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaInstagram className="hover:text-gray-300" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTelegram className="hover:text-gray-300" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaGoogle className="hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm">
          <p>Copyright © 2024 Rainbow Paint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
