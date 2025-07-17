const Clients = () => {
  return (
    <section id="clients" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Meet Our Clients</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">


        <div className="bg-blue-200 rounded-2xl p-6 w-80 text-left shadow-md">
          <div className="flex items-center mb-3">
            <img
              src="./src/assets/Client1.jpg"
              alt="Client 1"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Amit Desai</h3>
              <p className="text-sm text-gray-700">01-22-2025</p>
            </div>
          </div>


          <div className="flex mb-3">
            <img src="./src/assets/Star 1.svg" alt="star" className="w-5 h-5 text-yellow-500" />
            <img src="./src/assets/Star 1.svg" alt="star" className="w-5 h-5 text-yellow-500 ml-1" />
            <img src="./src/assets/Star 1.svg" alt="star" className="w-5 h-5 text-yellow-500 ml-1" />
            <img src="./src/assets/Star 1.svg" alt="star" className="w-5 h-5 text-yellow-500 ml-1" />
          </div>

          <p className="text-sm text-gray-800">
            Incredible service from start to finish. Al Safar handled our international
            shipments flawlessly — clear communication, on-time delivery, and no hidden surprises.
          </p>
        </div>


        <div className="bg-blue-200 rounded-2xl p-6 w-80 text-left shadow-md">
          <div className="flex items-center mb-3">
            <img
              src="./src/assets/Client2.jpg"
              alt="Client 2"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Fatima Noor</h3>
              <p className="text-sm text-gray-700">01-29-2025</p>
            </div>
          </div>


          <div className="flex mb-3">
            <img src="./src/assets/Star 1.svg" alt="star" className="w-5 h-5 text-yellow-500" />
            <img src="./src/assets/Star 1.svg" alt="star" className="w-5 h-5 text-yellow-500 ml-1" />
            <img src="./src/assets/Star 1.svg" alt="star" className="w-5 h-5 text-yellow-500 ml-1" />
            <img src="./src/assets/Star 1.svg" alt="star" className="w-5 h-5 text-yellow-500 ml-1" />
          </div>

          <p className="text-sm text-gray-800">
            After trying multiple freight companies, we finally found a reliable partner in Al Safar.
            Their attention to detail and proactive updates make a huge difference.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Clients;
