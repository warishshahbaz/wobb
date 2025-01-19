import firstMp4 from "../asserts/first.mp4";
import secondMp4 from "../asserts/second.mp4";
import thirdMp4 from "../asserts/third.mp4";
import CompanyLogo from "../utils/logo";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full  bg-opacity-70 text-white py-4 px-8 flex justify-between items-center z-50">
        {/* Brand Name */}
        <div className="text-2xl font-bold">
          <CompanyLogo />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <button className="hover:underline">Login</button>
          <button className="hover:underline">Brand</button>
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
