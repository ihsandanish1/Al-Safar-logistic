const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                <form className="bg-white p-6 rounded shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" className="p-2 border rounded" />
                        <input type="email" placeholder="Email" className="p-2 border rounded" />
                    </div>
                    <textarea placeholder="Message" className="w-full mt-4 p-2 border rounded"></textarea>
                    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
