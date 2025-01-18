import React from "react";
import "tailwindcss/tailwind.css";
import firstMp4 from "./asserts/first.mp4"
import secondMp4 from "./asserts/second.mp4"
import thirdMp4 from "./asserts/third.mp4"
import Header from "./components/Header";


const campaigns = [
  {
    id: 1,
    brandName: "GlowCare Skincare",
    payout: "Barter",
    progress: 30,
    totalSlots: 10,
    filledSlots: 3,
    description: "Promote our new range of organic skincare products and share your glowing results.",
    image: "https://via.placeholder.com/150/FFB6C1/000000?text=GlowCare",
  },
  {
    id: 2,
    brandName: "FitFlex",
    payout: "Fixed Pay",
    progress: 75,
    totalSlots: 20,
    filledSlots: 15,
    description: "Show off your fitness journey with our premium workout gear.",
    image: "https://via.placeholder.com/150/87CEFA/000000?text=FitFlex",
  },
  {
    id: 3,
    brandName: "Sip & Brew",
    payout: "Refund",
    progress: 50,
    totalSlots: 8,
    filledSlots: 4,
    description: "Celebrate mornings with our gourmet coffee blends and share your experience.",
    image: "https://via.placeholder.com/150/F5DEB3/000000?text=Sip&Brew",
  },
  {
    id: 4,
    brandName: "EcoBag Co.",
    payout: "Barter",
    progress: 90,
    totalSlots: 10,
    filledSlots: 9,
    description: "Go green with our stylish eco-friendly bags. Share your sustainable style tips!",
    image: "https://via.placeholder.com/150/98FB98/000000?text=EcoBag+Co.",
  },
  {
    id: 5,
    brandName: "UrbanThreads",
    payout: "Fixed Pay",
    progress: 40,
    totalSlots: 15,
    filledSlots: 6,
    description: "Style up with our trendy streetwear collection and inspire your audience.",
    image: "https://via.placeholder.com/150/FFD700/000000?text=UrbanThreads",
  },
];

const CampaignCard = ({ campaign }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <img
        src={campaign.image}
        alt={campaign.brandName}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{campaign.brandName}</h2>
        <p className="text-sm text-gray-600 mb-2">{campaign.description}</p>
        <div className="flex items-center justify-between mb-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              campaign.payout === "Barter"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {campaign.payout}
          </span>
          <span className="text-gray-500 text-sm">
            {campaign.filledSlots}/{campaign.totalSlots} Slots Filled
          </span>
        </div>
        <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500"
            style={{ width: `${campaign.progress}%` }}
          ></div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    </div>
  );
};



const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={secondMp4}
      ></video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Wobb</h1>
        <p className="text-lg">Discover and apply to exciting influencer campaigns.</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <HeroSection />
      <main className="p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
