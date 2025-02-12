import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Footer = () => {
    const handleSubscribe = () => {
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully subscribed to our newsletter.',
            icon: 'success',
            confirmButtonText: 'Great!',
            confirmButtonColor: '#4CAF50',
        });
    };

    return (
        <div className="bg-gray-600 text-white flex flex-col justify-center items-center gap-10 py-16 mt-10 px-4 md:px-10">
            <div className="flex flex-wrap gap-6 justify-center">
                <a href="https://www.facebook.com/maksudulhaque2000" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300">
                    <FaFacebook className="text-4xl hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.instagram.com/maksudulhaque2000/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-300">
                    <FaInstagram className="text-4xl hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act&gar=WzEyMF0" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors duration-300">
                    <FaGoogle className="text-4xl hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://x.com/smmaksudulhaque" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                    <FaTwitter className="text-4xl hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.youtube.com/@smmaksudulhaque" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors duration-300">
                    <FaYoutube className="text-4xl hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/maksudulhaque2000/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors duration-300">
                    <FaLinkedin className="text-4xl hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com/smmaksudulhaque2000" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
                    <FaGithub className="text-4xl hover:scale-110 transition-transform duration-300" />
                </a>
            </div>

            <div className="flex flex-wrap gap-10 justify-center py-8 text-lg text-center">
                <div className="flex flex-col items-center">
                    <FaPhoneAlt className="text-3xl mb-2 text-blue-400" />
                    <span>+880 1518474975</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaEnvelope className="text-3xl mb-2 text-red-600" />
                    <span>smmaksudulhaque2000@gmail.com</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaMapMarkerAlt className="text-3xl mb-2 text-green-500" />
                    <span>Rayerbag, Dhaka-1362</span>
                </div>
            </div>

            <div className="flex flex-col items-center text-center px-4">
                <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-lg mb-6">Stay updated with the latest news and offers! Enter your email to subscribe.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 rounded-md text-black w-full sm:w-auto"
                    />
                    <button 
                        onClick={handleSubscribe} 
                        className="btn-outline border-b-2 bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-md">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-center">
                <a className="font-semibold hover:text-gray-300 transition-colors duration-300" href="#about">About Us</a>
                <a className="font-semibold hover:text-gray-300 transition-colors duration-300" href="#announcements">Our Services</a>
                <a className="font-semibold hover:text-gray-300 transition-colors duration-300" href="#">Privacy Policy</a>
                <a className="font-semibold hover:text-gray-300 transition-colors duration-300" href="#faq">FAQ</a>
            </div>

            <div className="py-4 text-center">
                <h3 className="text-sm font-medium">
                    <span className="font-bold">©</span> WhereIsIt Website, 2025. All rights reserved.
                </h3>
            </div>
        </div>
    );
};

export default Footer;
