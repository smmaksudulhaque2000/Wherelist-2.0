import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTag,
  FaInfoCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MostRecent = ({ items }) => {
  const currentDate = new Date();

  const sortedItems = items
    .filter((item) => item.status !== "Recovered")
    .map((item) => ({
      key: item._id,
      ...item,
      dateDifference: Math.abs(new Date(item.dateLost) - currentDate),
    }))
    .sort((a, b) => a.dateDifference - b.dateDifference)
    .slice(0, 6);

  return (
    <div className="mt-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center w-4/4 lg:w-3/4 mx-auto">
          Most Recent Lost & Found Items
        </h2>
        <p className="text-lg lg:text-xl text-gray-500 mb-6 text-center w-4/4 lg:w-3/4 mx-auto">
          Browse through the most recent lost and found items posted by users in
          your area. Whether you've misplaced something valuable or found an
          item that belongs to someone else, this platform helps you reconnect
          with lost belongings. Join the community in helping return lost items
          or locating belongings you've lost. Every post brings someone one step
          closer to finding what they've been searching for. Explore the
          listings and make a difference by being part of this compassionate
          exchange.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedItems.map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
            }}
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-60 rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 flex items-center">
              <FaInfoCircle className="mr-2 text-blue-500" /> {item.title}
            </h4>
            <p className="font-bold text-gray-500 mb-2 flex items-center">
              <FaTag className="mr-2 text-green-500" /> {item.postType}
            </p>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-sm text-gray-500 mb-2 flex items-center">
              <FaTag className="mr-2 text-purple-500" /> {item.category}
            </p>
            <p className="text-sm text-gray-500 mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-500" /> {item.location}
            </p>
            <p className="text-sm text-gray-500 mb-2 flex items-center">
              <FaCalendarAlt className="mr-2 text-yellow-500" />{" "}
              {new Date(item.dateLost).toLocaleDateString()}
            </p>
            <Link to={`/items/${item._id}`}>
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
              >
                View Details
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
      <Link to={"/items"} className="flex justify-center">
        <button className="w-1/4 p-2 btn-outline border-1 border-b-2 font-bold text-xl mt-5 rounded-xl shadow-md">
          See All
        </button>
      </Link>
    </div>
  );
};

export default MostRecent;
