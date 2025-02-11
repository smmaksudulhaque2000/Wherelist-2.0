import { Link } from "react-router-dom";
import { FaRegSadTear } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white p-5">
      <div className="text-center">
        <FaRegSadTear className="text-8xl text-red-400 animate-pulse mb-5" />
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="p-4 m-4 mx-auto text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 text-center w-full"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
