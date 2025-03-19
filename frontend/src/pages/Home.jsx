import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ChatWidget from '../components/widget.jsx';
import Expertise from '../components/Expertise.jsx';
import BuiltByUs from '../components/Builtbyus.jsx';
import WhyUs from '../components/WhyUs.jsx';
import OurMission from '../components/OurMission.jsx';
import CallToAction from '../components/Call_To_Action.jsx';
import ImageCarousel from '../components/BackgroundImage.jsx';
import ServiceCarousel from '../components/ServiceCarousel.jsx';

const strengths = [
    { 
        title: 'Website | Web App Development',
        description: 'This breathtaking landscape captures the essence of nature’s beauty. A perfect escape into tranquility and peace.',
        image: '/development.jpg',
        link: '/services/web-development'
    },
    {
        title: 'Mobile App Development',
        description: 'Experience the architectural beauty and the blend of history with modern elegance.',
        image: '/mobile2.png',
        link: '/services/mobile-development'
    },
    {
        title: 'Cloud Services',
        description: 'Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.',
        image: 'cloud.jpg',
        link: '/services/cloud-services'
    },
    {
        title: 'Product | Graphics Design',
        description: 'Explore vibrant cityscapes filled with energy, innovation, and cultural diversity.',
        image: 'graphics.avif',
        link: '/services/graphics-design'
    },
    {
        title: 'Motion Graphics | 3D Animation',
        description: 'Our dedicated customer support team is available 24/7 to assist with any questions or concerns, ensuring a smooth experience.',
        image: '3d2.gif',
        link: '/services/motion-graphics'
    },
    {
        title: 'Software Development Training',
        description: 'We offer international shipping, allowing you to send packages across the globe with ease.',
        image: 'training1.png',
        link: '/services/software-training'
    },
    {
        title: 'Crypto | Paypal | Fiat Exchange',
        description: 'We are committed to sustainability and employ eco-friendly packaging and delivery practices to reduce our environmental impact.',
        image: 'exchange.jpg',
        link: '/services/crypto-exchange'
    },
    {
        title: 'Software Management',
        description: 'We can take up your existing software project and provide support and maintenance services to keep it running smoothly.',
        image: 'management.jpg',
        link: '/services/software-management'
    },
];

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-custom-bg3 bg-cover bg-fixed min-h-screen">
            <div className="flex-grow">
                <ImageCarousel />
                <h2 className="text-center mt-4 p-6 text-gray-900">
                    At Codesino, we create web and mobile applications, cloud solutions, and enterprise software to power businesses. Our motion design and animation enhance branding, while software training develops future tech talent. From digital solutions to financial exchanges, we shape the future of technology.
                </h2>
                <CallToAction />
                <ServiceCarousel />
                <WhyUs />
                <OurMission />

                <div className="home-content text-center mt-20 px-4">
                    <h3 className="text-1xl font-bold mt-6 text-gray-600">Our Services</h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-2 mt-2">
                        {strengths.map((strength, index) => (
                            <div key={index} className="text-center bg-custom-bg2 p-4 rounded-lg shadow-lg">
                                <img src={strength.image} alt={strength.title} className="w-100 h-100 mx-auto" />
                                <h4 className="text-1xl text-blue-500 font-bold font-curly mt-2">{strength.title}</h4>
                                <p className="text-sm mt-2">{strength.description}</p>
                                <Link to={strength.link} className="text-blue-500 font-semibold text-sm mt-4 inline-block">Learn More</Link>
                            </div>
                        ))}
                    </div>
                </div>
                
                <BuiltByUs />
                <Expertise />
            </div>

            <Header />
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default Home;
