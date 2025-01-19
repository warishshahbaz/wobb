import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">WOBB</h2>
            <p className="text-sm text-gray-400">
              Empowering connections through our platform. Join us to explore
              endless opportunities.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Contact
            </a>
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} wobb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
