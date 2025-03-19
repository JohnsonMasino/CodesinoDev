import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const sections = [
  {
    title: 'Quick Links',
    items: [
      { title: 'Home', link: '/home' },
      { title: 'About', link: '/about' },
      { title: 'Contact', link: '/contact' },
      { title: 'Blog', link: '/blog' },
    ],
  },
  {
    title: 'Services',
    items: [
      { title: 'Walkthrough', link: '/contact' },
      { title: 'Contact', link: '/contact' },
      { title: 'Documentation', link: '/contact' },
      { title: 'About', link: '/about' },
      { title: 'Chat', link: '/chat' },
    ],
  },
  {
    title: 'Topics',
    items: [
      { title: 'Air', link: 'https://en.wikipedia.org/wiki/Freight_transport' },
      { title: 'Water', link: 'https://en.wikipedia.org/wiki/Cargo_ship' },
      { title: 'Land', link: 'https://en.wikipedia.org/wiki/Land_transport' },
      { title: 'Rail', link: 'https://en.wikipedia.org/wiki/Rail_transport' },
    ],
  },
];

const socialItems = [
  {
    title: 'Facebook',
    icon: FaFacebook,
    link: 'https://facebook.com/',
  },
  {
    title: 'Instagram',
    icon: FaInstagram,
    link: 'https://instagram.com/',
  },
  {
    title: 'Twitter',
    icon: FaTwitter,
    link: 'https://twitter.com/',
  },
  {
    title: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://linkedin.com/',
  },
];

// Notification Component
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

const Footer = () => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubscription = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setNotification('');
    try {
      const response = await axios.post(
        'https://kargoline-shipping-com-1-tczb.onrender.com/subscribe/',
        { email }
      );
      setNotification('Subscription Successful!');
      setEmail('');
    } catch (error) {
      setNotification('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Notification message={notification} onClose={() => setNotification('')} />
      <footer className="w-full mt-24 bg-head text-black-300 py-y px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-grey-600 py-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase font-curly pt-1 text-[13px] text-gray-900">
                {section.title}
              </h6>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="py-1 text-gray-900 hover:text-red-200 cursor-pointer text-[12px]"
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 pt-8 md:pt-1 text-gray-900">
            <p className="font-bold uppercase text-[13px]">
              Subscribe to our newsletter
            </p>
            <p className="py-4 text-gray-900 text-[13px]">
              The latest updates and articles sent directly to your email
            </p>
            <form
              className="flex flex-col sm:flex-row"
              onSubmit={handleSubscription}
            >
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mr-4 rounded-md mb-4"
                required
              />
              <button
                type="submit"
                className="p-4 mb-4 border-2 border- py-1 rounded-lg text-[12px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col max-w-[1240px] py-4 mx-auto justify-between sm:flex-row text-center text-gray-800 text-[14px]">
          <p className="mb-4">&copy; 2025 Codesino Dev Inc. All rights reserved.</p>
          <div className="flex justify-between mr-20 sm:w-[300px] pt- text-2xl">
            {socialItems.map((x, index) => (
              <a
                key={index}
                href={x.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-300 text-[16px] cursor-pointer"
              >
                <x.icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
