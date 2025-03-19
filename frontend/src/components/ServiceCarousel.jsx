import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageWithText = () => {
    const slides = [
        {
            title: "Website | Web App Development",
            image: "/webapp.webp",
            description: "This breathtaking landscape captures the essence of nature's beauty. A perfect escape into tranquility and peace.",
        },
        {
            title: "Mobile App Development",
            image: "/mobile1.png",
            description: "Experience the architectural beauty and the blend of history with modern elegance.",
        },
        {
            title: "Cloud Services",
            image: "/cloud.webp",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
        {
            title: "Product | Graphics Design",
            image: "/product.avif",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
        {
            title: "Motion Graphics | 3D Animation",
            image: "/3d.gif",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
        {
            title: "Software Development Training",
            image: "/training.png",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
        {
            title: "Crypto | Paypal | Fiat Exchange",
            image: "/crypto.avif",
            description: "Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.",
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="flex flex-col items-center p-6 space-y-6">
            <div className="text-center mt-6">
                <h3 className="text-1xl font-bold mt-4 text-gray-600">Takea Quick Glimpse Of Our Services</h3>
            </div>
            <motion.div
                key={currentIndex}
                className="bg-blue-400 shadow-lg rounded-lg overflow-hidden max-w-4xl w-full 
                           flex flex-col md:flex-row" // Stack on mobile, row on larger screens
                initial={{ opacity: 0, x: 100 }} // Slide in from the right
                animate={{ opacity: 1, x: 0 }}  
                exit={{ opacity: 0, x: -100 }}  
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img 
                        src={slides[currentIndex].image} 
                        alt={slides[currentIndex].title} 
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-200 text-center md:text-left">
                        {slides[currentIndex].title}
                    </h2>
                    <p className="text-gray-300 mt-3 text-lg text-center md:text-left">
                        {slides[currentIndex].description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default ImageWithText;
