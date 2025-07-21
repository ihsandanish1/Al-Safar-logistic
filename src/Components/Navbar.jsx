import logo from '../assets/logo.svg';
import globeIcon from '../assets/Group1.svg';
import phoneIcon from '../assets/Vector.svg';

const Navbar = () => {
    return (
        <nav className="bg-transparent absolute top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">


                <img
                    src={logo}
                    alt="Al-Safar Logo"
                    className="w-[78px] h-[48px] flex-shrink-0"
                />

                <ul className="hidden md:flex space-x-8 font-medium">
                    <li><a href="#home" className="hover:text-blue-300">Home</a></li>
                    <li><a href="#services" className="hover:text-blue-300">Service</a></li>
                    <li><a href="#about" className="hover:text-blue-300">About</a></li>
                    <li><a href="#blog" className="hover:text-blue-300">Blog</a></li>
                    <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
                </ul>


                <div className="hidden md:flex items-center space-x-4">


                    <div className="flex items-center space-x-1">
                        <img src={globeIcon} alt="Language" className="w-5 h-5" />
                        <span>EN</span>
                    </div>


                    <button className="flex px-4 py-[14px] justify-center items-center gap-2 rounded-xl border border-white bg-transparent text-white hover:bg-white hover:text-[#004E92]">
                        <img src={phoneIcon} alt="Call" className="w-4 h-4" />
                        Talk To Expert
                    </button>


                    <button className="flex h-12 px-6 justify-center items-center gap-2 rounded-xl border-2 border-[#004E92] bg-[#004E92] text-white hover:bg-[#003d73]">
                        Log in
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
