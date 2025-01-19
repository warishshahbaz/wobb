import React from "react";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import CampaignCard from "./components/Card";
import HeroSection from "./components/Header";
import TopBrand from "./components/TopBrand";
import logo1 from "./asserts/logo1.jpg"
import logo2 from "./asserts/logo2.jpg"
import logo3 from "./asserts/logo3.jpg"
import logo4 from "./asserts/logo4.png"
import logo5 from "./asserts/logo5.jpg"
import Footer from "./components/Footer";
import InfiniteScrollBrands from "./components/Crosal";






const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Header /> */}
      <HeroSection />
      <h3 className="text-2xl font-bold my-6 text-center text-gray-400 " >Trending Campaigns for Influencers</h3>
      <main className="p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </main>
      <InfiniteScrollBrands />
      <TopBrand />
      <Footer />
    </div>
  );
};

export default HomePage;

const campaigns = [
  {
    id: 1,
    brandName: "GlowCare Skincare",
    payout: "Barter",
    progress: 30,
    totalSlots: 10,
    filledSlots: 3,
    description:
      "Promote our new range of organic skincare products and share your glowing results.",
    image: logo1,
  },
  {
    id: 2,
    brandName: "FitFlex",
    payout: "Fixed Pay",
    progress: 75,
    totalSlots: 20,
    filledSlots: 15,
    description: "Show off your fitness journey with our premium workout gear.",
    image: logo2,
  },
  {
    id: 3,
    brandName: "Sip & Brew",
    payout: "Refund",
    progress: 50,
    totalSlots: 8,
    filledSlots: 4,
    description:
      "Celebrate mornings with our gourmet coffee blends and share your experience.",
    image: logo3,
  },
  {
    id: 4,
    brandName: "EcoBag Co.",
    payout: "Barter",
    progress: 90,
    totalSlots: 10,
    filledSlots: 9,
    description:
      "Go green with our stylish eco-friendly bags. Share your sustainable style tips!",
    image: logo4,
  },
  {
    id: 5,
    brandName: "UrbanThreads",
    payout: "Fixed Pay",
    progress: 40,
    totalSlots: 15,
    filledSlots: 6,
    description:
      "Style up with our trendy streetwear collection and inspire your audience.",
    image: logo5,
  },
];
