import React from 'react';

const OurMission = () => {
    const strengths = [
        { 
            title: 'Software Development',
            description: 'Build scalable and innovative web and mobile applications.',
            image: '/software.jpg'
        },
        {
            title: 'Emerging Technologies',
            description: 'Leverage AI and blockchain technologies for future-proof solutions.',
            image: '/emerging.jpg'
        },
        {
            title: 'FinTech Solutions',
            description: 'Deliver seamless financial transaction solutions, including crypto and fiat exchange.',
            image: '/fintech.png'
        },
        {
            title: 'Education',
            description: 'Provide top-tier software development training programs.',
            image: '/education.webp'
        },
        {
            title: 'Skill Empowerment',
            description: 'Empower aspiring developers with real-world technical skills.',
            image: '/empower.webp'
        },
        {
            title: 'Client-Centric Solution',
            description: 'Foster a client-centric approach for tailored digital solutions.',
            image: '/centric.jpeg'
        },
        {
            title: 'Business Growth & Strategy',
            description: 'Drive business growth through cutting-edge tech strategies.',
            image: '/growth.jpg'
        },
        {
            title: 'Excellence & Innovation',
            description: 'Maintain excellence, precision, and innovation in every project.',
            image: '/innovation.webp'
        },
        {
            title: 'Practical Learning',
            description: 'Bridge the gap between learning and practical application in tech.',
            image: '/practical.jpg'
        },
        {
            title: 'Business Scaling & Innovation',
            description: 'Help businesses scale, innovate, and dominate their industries.',
            image: '/scaling.webp'
        },
    ];

    return (
        <div className="home-content text-center mt-10 px-4">
            <h3 className="text-1xl font-bold mt-20 text-gray-600">Our Mission</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 mt-4">
                {strengths.map((strength, index) => (
                    <div key={index} className="text-center p-4 rounded-lg shadow-lg bg-blue-400">
                        <img
                            src={strength.image}
                            alt={strength.title}
                            className="w-full h-auto mx-auto"
                        />
                        <h4 className="text-xl font-bold text-gray-100">{strength.title}</h4>
                        <p className="text-sm mt-2 text-gray-200">{strength.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurMission;
