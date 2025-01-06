
import { BsTwitterX } from "react-icons/bs";
import { SiG2 } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Sections */}
                <div className="grid grid-cols-2 px-4 sm:grid-cols-3 md:grid-cols-4 gap-8  md:text-left">
                    {/* Product Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Product</h3>
                        <ul className="grid grid-cols-1 gap-1  md:gap-2 text-gray-400">
                            <li><a href="#" className="hover:underline">Trust</a></li>
                            <li><a href="#" className="hover:underline">AI Studio</a></li>
                            <li><a href="#" className="hover:underline">Code Generation</a></li>
                            <li><a href="#" className="hover:underline">AI Animations</a></li>
                            <li><a href="#" className="hover:underline">Knowledge Graphs</a></li>
                            <hr className="border-gray-600 my-4 w-32 mr-[90px] md:w-20 mx-auto md:mx-0" />
                            <li><a href="#" className="hover:underline">Take a product tour</a></li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="grid grid-cols-1 gap-1  md:gap-2 text-gray-400">
                            <li><a href="#" className="hover:underline">Guides</a></li>
                            <li><a href="#" className="hover:underline">AI blog</a></li>
                            <li><a href="#" className="hover:underline">AI templates</a></li>
                            <li><a href="#" className="hover:underline">Generative AI</a></li>
                            <li><a href="#" className="hover:underline">Style guide template</a></li>
                            <hr className="border-gray-600 my-4 mr-[90px] w-32 md:w-20 mx-auto md:mx-0" />
                            <li><a href="#" className="hover:underline">Try for free</a></li>
                            <li><a href="#" className="hover:underline">Request a demo</a></li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="grid grid-cols-1 gap-1  md:gap-2 text-gray-400">
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Partners</a></li>
                            <li><a href="#" className="hover:underline">Legal hub</a></li>
                            <li><a href="#" className="hover:underline">Newsroom</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="grid grid-cols-1 gap-1  md:gap-2 text-gray-400">
                            <li><a href="#" className="hover:underline">Status</a></li>
                            <li><a href="#" className="hover:underline">Help center</a></li>
                            <li><a href="#" className="hover:underline">Developer docs</a></li>
                        </ul>
                    </div>
                </div>

                {/* Email Subscription Section */}
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-2xl font-semibold text-white">Get the latest updates about content and AI</p>
                        <p className=" text-md md:text-xl font-light text-white mt-1">Subscribe to Writer's Brief</p>
                    </div>

                    <div className="flex w-full md:w-auto items-center rounded-3xl overflow-hidden bg-gray-800 border border-gray-600 focus-within:ring-2 focus-within:ring-purple-500">
                        <input
                            type="email"
                            placeholder="Add your email*"
                            className="w-full md:w-64 px-4 py-3 bg-transparent text-white focus:outline-none"
                        />
                        <button className="bg-[#63116E] border border-[#5551FF]   text-white rounded-3xl w-[200px] md:w-[140px] px-2 py-4  ">
                            <FaArrowRightLong  />
                        </button>
                    </div>
                </div>



                {/* Footer Bottom Section */}
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                    <p className="text-sm">© 2024 Zordie AI</p>
                    <div className="flex justify-center space-x-6">
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-white hover:text-gray-400 w-10 p-3 rounded-[50%] bg-gray-800">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400 w-10 p-3 rounded-[50%] bg-gray-800">
                                <BsTwitterX />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400 w-10 p-3 rounded-[50%] bg-gray-800">
                                <SiG2 />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                        <a href="#" className="hover:underline">Your Privacy Choices |</a>
                        <a href="#" className="hover:underline">Terms |</a>
                        <a href="#" className="hover:underline">Privacy</a>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;