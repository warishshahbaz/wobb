import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";  // Importing an icon for the login button
import "tailwindcss/tailwind.css";

const Header = () => {
  // State to track scroll position for applying shadow
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 bg-transparent  py-4 px-6 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <div className="flex justify-between items-center">
        {/* Left side: Brand Icon with increased size for larger screens */}
        <div className="text-xl font-bold md:text-3xl">
          <span className="">Wobb</span>
        </div>
        
        {/* Right side: Login and Brand Section */}
        <div className="flex items-center gap-4 ">
          <a href="#" className="text-sm hidden md:block ">Brands</a>
          <button
            className="flex items-center w-[100px] bg-blue-600 py-2 px-2 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            <FaSignInAlt className="" />
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
