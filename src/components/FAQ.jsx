import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "How does this website work?", answer: "You can post information about lost or found items. Others can view the posts and contact you if they have relevant information." },
    { question: "How can I create a new post?", answer: "Simply log in to your account and click on the 'New Post' option. Fill out the form with all necessary details and submit it." },
    { question: "How can I contact someone regarding a post?", answer: "Every post contains contact details of the person who posted it. Use the provided information to reach out to them." },
    { question: "Is it necessary to create an account to post?", answer: "Yes, creating an account is mandatory to ensure that all posts are verified and genuine." },
    { question: "How can I edit or delete my post?", answer: "Go to your dashboard, find the post you want to edit or delete, and click the corresponding button." },
    { question: "What should I do if I find a lost item?", answer: "Create a 'Found Item' post with detailed information and your contact details so the rightful owner can reach out." },
    { question: "Is there any moderation for the posts?", answer: "Yes, all posts are reviewed by our team to ensure that they meet our guidelines and prevent misuse." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mt-10">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 mt-10 text-center w-4/4 lg:w-3/4 mx-auto">Frequently Asked Questions</h2>
          <p className="text-lg lg:text-xl text-gray-500 mb-6 text-center w-4/4 lg:w-3/4 mx-auto">
          Find answers to the most common questions about using this platform. Whether you're looking for guidance on posting lost or found items, understanding our policies, or learning how to contact item owners, we've got you covered. Browse through frequently asked questions to make the most of your experience on our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 ${
                activeIndex === index ? "shadow-lg" : "shadow"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-gray-500 text-3xl" />
                ) : (
                  <FiChevronDown className="text-gray-500 text-3xl" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ${
                  activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
