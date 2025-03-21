import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatWidget from '../components/widget.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ImageCarousel from '../components/BackgroundImage.jsx';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const contactDetails = [
    {
        title: 'Head Office',
        description: 'Our head office is the central hub for all our operations, ensuring seamless coordination and support for all your logistics needs. Located in the heart of the city, it is easily accessible and equipped with a dedicated team to assist you with inquiries, bookings, and follow-ups.',
        address: '250 Deansgate, Manchester, M3 4LY, United Kingdom',
        email: 'support@kargoline-shipping.com',
        image: 'air.webp'
    },
    {
        title: 'Customer Support',
        description: 'Our customer support team is here to provide prompt and effective assistance. Whether you have questions about your shipment, need help with documentation, or want to lodge a complaint, our team is available 24/7 to ensure your satisfaction. Reach out to us through any of the channels below.',
        email: 'support@kargoline-shipping.com',
        image: 'home5.jpg'
    },
    {
        title: 'Branch Offices',
        description: 'Our branch offices are strategically located to bring our services closer to you. Each branch operates with the same commitment to excellence, offering comprehensive logistics solutions tailored to your local needs. Visit any of our branches for personalized assistance and inquiries.',
        address: 'Various locations nationwide. Find the nearest branch on our website.',
        email: 'support@kargoline-shipping.com',
        image: 'branch.jpg'
    },
    {
        title: 'Get in Touch Online',
        description: 'Prefer online communication? Use our contact form on this page or connect with us on social media. Our digital team is quick to respond to your queries and provide updates about our services.',
        email: 'support@kargoline-shipping.com',
        socialMedia: {
            facebook: 'facebook.com',
            twitter: 'x.com',
            instagram: 'instagram.com'
        },
        image: 'contact.jpg'
    }
];

const Notification = ({ message, onClose }) => {
    if (!message) return null;

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [message, onClose]);

    return (
        <div className="fixed top-0 left-0 right-0 bg-green-400 text-white text-center py-2 z-50">
            {message}
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');
    try {
        const response = await axios.post('https://kargoline-shipping-com-1-tczb.onrender.com/inquiries/', formData);
        setResponseMessage('Message sent successfully. We will get back to you soon!');
        setFormData({ name: '', email: '', message: '' });
    } catch (error) {
        setResponseMessage('Failed to send the message. Please try again later.');
    } finally {
         setIsSubmitting(false);
    }
};

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-custom-bg1 bg-cover bg-fixed">
            <Notification message={responseMessage} onClose={() => setResponseMessage('')} />

            <div className="flex-grow">
                <ImageCarousel />
                <div className="contact-content px-8 py-16">

                <h1 className="text-2xl font-bold text-center text-blue-500 mt-8 mb-4">GET IN TOUCH</h1>
                    <p className="text-center text-1xl font-bold font-curly text-gray-600 mb-12">
                    Reach us anytime—locally, online, or through our support team—for seamless service.
                    </p>
 
                    <div className="grid gap-12">
                        {contactDetails.map((contact, index) => (
                            <div key={index} className="contact-item bg-custom-bg2 shadow-md rounded-lg overflow-hidden">
                                <img
                                    src={contact.image}
                                    alt={contact.title}
                                    className="w-full h-100 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-1xl font-bold font-curly text-blue-500 mb-1 text-center">
                                        {contact.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {contact.description}
                                    </p>
                                    <div className="contact-info text-gray-700">
                                        {contact.address && (
                                            <p className="text-sm mb-2">
                                                <strong>Address:</strong> {contact.address}
                                            </p>
                                        )}
                                        {contact.email && (
                                            <p className="text-sm mb-2">
                                                <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-500">{contact.email}</a>
                                            </p>
                                        )}
                                        {contact.socialMedia && (
                                            <div className="social-media flex justify-center gap-4 mt-4">
                                                <a href={`https://${contact.socialMedia.facebook}`} className="text-blue-500"><FaFacebook /></a>
                                                <a href={`https://${contact.socialMedia.twitter}`} className="text-blue-500"><FaTwitter /></a>
                                                <a href={`https://${contact.socialMedia.instagram}`} className="text-blue-500"><FaInstagram /></a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h1 className="text-2xl font-bold text-center text-blue-500 mt-24 mb-4">CONTACT US</h1>
                    <p className="text-center text-1xl font-bold font-curly text-gray-600 mb-12">
                        If you have any questions, feel free to reach out to us.
                    </p>
                    
                    <div className="contact-form bg-custom-bg2 shadow-md rounded-lg p-6 mb-2 max-w-lg mx-auto">
                        <h2 className="text-1xl font-bold font-curly text-gray-800 mb-6 text-center">Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name" className="block text-sm text-gray-700 mb-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded mb-4"
                                required
                            />
                            
                            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded mb-4"
                                required
                            />
                            
                            <label htmlFor="message" className="block text-sm text-gray-700 mb-2">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border rounded mb-4"
                                required
                            />
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-500 text-sm text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-700">
                            Or send us a mail at <a href="mailto:support@kargoline-shipping.com" className="text-blue-500 font-bold hover:underline">support@kargoline-shipping.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <Header />
            <Footer />
            <ChatWidget />
        </div>
    );
};

export default Contact;