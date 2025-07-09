// src/components/clients.jsx
const Clients = () => {
  return (
    <section id="clients" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Meet Our Clients</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <img src="./src/assets/client1.png" className="h-12" alt="Client 1" />
        <img src="./src/assets/client2.png" className="h-12" alt="Client 2" />
      </div>
    </section>
  );
};

export default Clients;