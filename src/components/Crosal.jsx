import React, { useEffect, useRef } from "react";
import hero from "../asserts/hero.png";
import mobil from "../asserts/Mobil-logo.jpg";
import shell from "../asserts/shell.webp";
import mcDonald from "../asserts/mc-donald-logo.jpg";
import sportofy from "../asserts/sportify.jpg";
import subaru from "../asserts/Subaru.png";

const InfiniteScrollBrands = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; // Scrolls 1px per step
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset for seamless scrolling
        }
      }
    };

    const interval = setInterval(scroll, 20); // Adjust speed by changing interval duration
    return () => clearInterval(interval);
  }, []);

  const brands = [
    { name: "Hero", icon: hero },
    { name: "Mobil", icon: mobil },
    { name: "shell", icon: shell },
    { name: "mcdonald", icon: mcDonald },
    { name: "Sportify", icon: sportofy },
    { name: "Subru", icon: subaru },
  ];

  return (
    <div className=" py-6 lg:h-[300px] h-[300px] gap-y-4  mt-6 bg-white flex flex-col justify-center ">
      <p className="text-center lg:text-xl text-[16px] font-semibold text-gray-400 ">
        Trusted by 5000 Agencies and D2C Companies
      </p>
      <div className="  py-6 flex justify-center">
        <div
          ref={scrollContainerRef}
          className="flex lg:gap-x-[102px] gap-x-[20px] lg:w-[80%] w-[90%] overflow-hidden whitespace-nowrap items-center"
        >
          {[...brands, ...brands].map((brand, index) => (
            <img
              key={index}
              src={brand.icon}
              className=" lg:w-[120px] lg:h-[100px] object-contain w-[80px] "
              alt={brand.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollBrands;
