const WhyChoose = () => {
    return (
        <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Al Safar Factors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-blue-100 p-6 rounded shadow">
                        <h3 className="font-semibold mb-2">Reliable</h3>
                        <p>We guarantee on-time delivery every time.</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded shadow">
                        <h3 className="font-semibold mb-2">Affordable</h3>
                        <p>Best rates in the region with top service.</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded shadow">
                        <h3 className="font-semibold mb-2">Secure</h3>
                        <p>Your cargo is safe with our tracking system.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
