import heroBg from '../assets/hero-bg.jpg';
const Hero = () => {
    return (
        <section
            className="relative bg-cover bg-center h-screen text-white"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-xl">Reliable Global Logistics Powered from the UAE</h1>
                <form className="bg-white text-black p-6 rounded shadow-md w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Get a Quote</h2>
                    <input type="text" placeholder="Name" className="w-full p-2 mb-3 border rounded" />
                    <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded" />
                    <textarea placeholder="Message" className="w-full p-2 mb-3 border rounded"></textarea>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Hero;
