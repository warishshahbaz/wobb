import React, { useEffect, useState } from "react";
import firstMp4 from "../asserts/first.mp4";
import secondMp4 from "../asserts/second.mp4";
import thirdMp4 from "../asserts/third.mp4";
import CompanyLogo from "../utils/logo";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight / 2; // 50% of the viewport height
      setIsScrolled(scrollY > viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full py-4 px-8 flex justify-between items-center z-50 transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-60" : "bg-transparent"
        }`}
      >
        {/* Brand Name */}
        <div className="text-2xl font-bold">
          <CompanyLogo />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <button className="hover:underline text-white ">Login</button>
          <button className="hover:underline text-white ">Brand</button>
        </div>
      </nav>

      {/* Hero Section */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={secondMp4}
      ></video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Wobb</h1>
        <p className="text-lg">
          Discover and apply to exciting influencer campaigns.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
