import { Link } from "react-router-dom";
import lostItem1 from "../assets/images/story.jpg";
import lostItem2 from "../assets/images/story2.jpg";
import lostItem3 from "../assets/images/story3jpeg.jpeg";
import Marquee from "react-fast-marquee";

const Story = () => {
  return (
    <div className="mt-10">
      <section id="stories-of-impact ">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4  text-center w-4/4 lg:w-3/4 mx-auto">
              Lost and Found Stories
            </h2>
            <p className="text-lg lg:text-xl text-gray-500 mb-6 text-center w-4/4 lg:w-3/4 mx-auto">
              Explore the inspiring stories of lost items being reunited with
              their rightful owners. These real-life accounts highlight the
              impact of kindness and community in bringing hope and happiness to
              those who thought their belongings were gone forever. Be part of
              this journey of rediscovery and connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={lostItem1}
                alt="Lost Item Story"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  A Wallet Reunited
                </h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                    A heartfelt journey of a lost wallet returned with
                    everything intact...
                  </p>
                </Marquee>
                <Link
                  to="/wallet-story"
                  className="text-blue-600 hover:underline mt-4 block"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={lostItem2}
                alt="Lost Item Story"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  A Missing Pet's Return
                </h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                    The emotional reunion of a family and their beloved dog...
                  </p>
                </Marquee>
                <Link
                  to="/pet-story"
                  className="text-blue-600 hover:underline mt-4 block"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={lostItem3}
                alt="Lost Item Story"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  The Lost Necklace
                </h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                    An heirloom necklace found and returned to its grateful
                    owner...
                  </p>
                </Marquee>
                <Link
                  to="/necklace-story"
                  className="text-blue-600 hover:underline mt-4 block"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to={"/addItems"} className="flex justify-center">
              <button className="w-2/4 lg:w-1/4 p-2 btn-outline border-0 border-b-2 font-bold text-xl rounded-xl shadow-md">
                Post Lost / Found Items
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
