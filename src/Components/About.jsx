import aboutImg from '../assets/About.jpg';
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            Your trusted shipping & logistics company in Dubai. We provide reliable,
            fast, and safe delivery around the globe.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Learn More</button>
        </div>
        <div>
          <img src={aboutImg} alt="About" className="rounded shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;