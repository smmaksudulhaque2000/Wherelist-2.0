import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div className="relative w-full h-[40rem]">
      <img
        src={image}
        alt={text}
        className="absolute inset-0 w-full h-full object-fill"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">{text}</h1>
          <br />
          <Link
            to="/addItems"
            className="px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Add Your Lost Or Found Item
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
