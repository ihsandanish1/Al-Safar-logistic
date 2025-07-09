// src/components/services.jsx
const Services = () => {
  return (
    <section id="services" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-12">Our Services</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Sea Freight</h3>
          <p>Cost-effective shipping across continents.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
          <p>Fast & reliable global deliveries.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Warehousing</h3>
          <p>Safe & secure storage solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;