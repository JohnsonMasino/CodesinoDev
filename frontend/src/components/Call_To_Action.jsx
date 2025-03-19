import React, { useState } from "react";

const CallToAction = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setSuccessMessage(""); // Reset message when reopening
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulate sending message
        setTimeout(() => {
            setSuccessMessage("Your message has been sent successfully!");
            setIsOpen(false); // Close modal after success
        }, 1000);
    };

    return (
        <div className="text-center relative mt-12 mb-8">
            {/* CTA Button */}
            <h2 className="text-1xl font-bold mt-4 text-gray-600">
                Ready to Get Started?
            </h2>
            <button 
                onClick={toggleModal}
                className="bg-blue-500 text-white text-sm mt-4 font-bold py-2 px-6 rounded-xl shadow-lg hover:bg-blue-600 transition duration-300"
            >
                Send a Request
            </button>

            {/* Success Message */}
            {successMessage && (
                <div className="text-green-600 font-bold mt-4">
                    {successMessage}
                </div>
            )}

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
                        <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">
                            Schedule a Proposal
                        </h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <textarea 
                                placeholder="What do you need ?" 
                                rows="4"
                                required
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                            <button 
                                type="submit" 
                                className="w-full bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-blue-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                        <button 
                            onClick={toggleModal} 
                            className="absolute top-2 right-4 text-gray-600 hover:text-gray-900"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CallToAction;
