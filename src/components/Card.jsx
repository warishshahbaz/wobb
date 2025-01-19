import { motion } from "framer-motion";

const CampaignCard = ({ campaign }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-2xl overflow-hidden p-6 flex flex-col items-center group transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Payment Type */}
      <motion.div
        className={`absolute top-2 left-2 px-4 py-1 rounded-full text-xs font-bold shadow-md ${
          campaign.payout === "Barter"
            ? "bg-gradient-to-r from-green-400 to-green-500 text-white"
            : "bg-gradient-to-r from-blue-400 to-blue-500 text-white"
        }`}
        whileHover={{ scale: 1.1 }}
      >
        {campaign.payout}
      </motion.div>

      {/* Slot Count */}
      <motion.div
        className="absolute top-2 right-2 bg-gradient-to-r from-purple-400 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md"
        whileHover={{ scale: 1.1 }}
      >
        {campaign.filledSlots}/{campaign.totalSlots} Slots
      </motion.div>

      {/* Centered Image */}
      <motion.div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-400 shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
        <img
          src={campaign.image}
          alt={campaign.brandName}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Brand Name */}
      <motion.h2
        className="text-xl font-extrabold text-gray-800 mb-2 tracking-wide group-hover:text-blue-500 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
      >
        {campaign.brandName}
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
      >
        {campaign.description}
      </motion.p>

      {/* Button */}
      <motion.button
        className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply Now
      </motion.button>
    </motion.div>
  );
};

export default CampaignCard;
