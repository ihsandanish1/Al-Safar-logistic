const Navbar = () => {
    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-800">Al-Safar Logistic</h1>
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li><a href="#about" className="hover:text-blue-600">About</a></li>
                    <li><a href="#services" className="hover:text-blue-600">Services</a></li>
                    <li><a href="#clients" className="hover:text-blue-600">Clients</a></li>
                    <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
