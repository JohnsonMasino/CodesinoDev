import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ImageCarousel from '../components/BackgroundImage.jsx';

const services = [
    {
        title: 'Package Delivery',
        description: 'Our package delivery service ensures that your parcels reach their destination quickly and safely. With a network of reliable couriers and advanced tracking systems, we provide end-to-end visibility of your shipments. Whether you\'re sending a small package locally or delivering across continents, we prioritize efficiency, affordability, and care. Our commitment to excellence means that we handle every package as if it were our own, offering insurance options and flexible delivery windows to suit your needs. From door-to-door delivery to specialized handling of fragile items, we tailor our services to meet every requirement, ensuring peace of mind with every shipment.',
        image: 'home7.webp'
    },
    {
        title: 'Freight Shipping',
        description: 'Our freight shipping service is designed for businesses and individuals who need to move large quantities of goods efficiently. Whether by air, sea, or land, we provide comprehensive solutions that include cargo handling, customs support, and timely deliveries. With partnerships spanning major carriers and shipping lines, we ensure competitive pricing and reliable transit times. Our expert team handles the complexities of freight logistics, from route optimization to documentation, so you can focus on your core business. Whether it’s full container loads (FCL), less-than-container loads (LCL), or oversized cargo, our solutions are scalable, secure, and tailored to your specific needs.',
        image: 'air.webp'
    },
    {
        title: 'Land Shipping',
        description: 'Our land shipping service offers flexible and cost-effective transportation solutions for domestic and cross-border shipments. With a fleet of modern vehicles, including trucks and trailers, we ensure safe and timely delivery of goods. Whether it’s full truckload (FTL) or less-than-truckload (LTL), our services cater to various needs. Our real-time tracking and route optimization guarantee efficiency and transparency, while our team of experienced drivers ensures your cargo is handled with the utmost care. From industrial goods to perishable items, our land shipping solutions are tailored to meet your unique requirements.',
        image: 'land.jpg'
    },
    {
        title: 'Water Shipping',
        description: 'Our water shipping service provides reliable and economical solutions for transporting large volumes of cargo over long distances. Utilizing a global network of shipping lines and ports, we handle full container loads (FCL), less-than-container loads (LCL), and specialized cargo with ease. Our services include cargo consolidation, documentation, and customs clearance, ensuring a hassle-free experience. With advanced container tracking and 24/7 customer support, we keep you informed every step of the way. Whether you’re moving industrial machinery, raw materials, or consumer goods, our water shipping solutions are designed to meet the highest standards of efficiency and safety.',
        image: 'ship.avif'
    },
    {
        title: 'Warehousing',
        description: 'Our state-of-the-art warehousing facilities provide secure, efficient, and organized storage solutions for your goods. With climate-controlled options and advanced inventory management systems, we ensure your products are stored in optimal conditions. Our warehousing services cater to a variety of industries, offering flexible storage durations, cross-docking, and fulfillment services. Our facilities are strategically located for easy access to major transportation hubs, reducing transit times and costs. Whether you need long-term storage or temporary holding for just-in-time deliveries, our warehousing solutions provide the reliability and flexibility your business needs.',
        image: 'home8.jpg'
    },
    {
        title: 'Customs Clearance',
        description: 'Navigating customs regulations can be complex and time-consuming, but with our customs clearance service, we make it seamless for you. Our team of experienced customs brokers ensures that your shipments comply with all relevant regulations, avoiding delays and penalties. We handle the preparation of documentation, tariff classification, and duty calculation, providing you with complete transparency throughout the process. Our global expertise ensures smooth clearance in any region, helping you move your goods across borders with ease. With our customs clearance services, you can trust that your shipments will be delivered on time and hassle-free, allowing you to focus on your business.',
        image: 'custom.jpg'
    }
];

const Services = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-custom-bg1 bg-cover bg-fixed">
            <div className="flex-grow">
                <ImageCarousel />
                <div className="services-content px-8 py-16">
                    <h1 className="text-2xl font-bold text-center text-blue-500 mt-2 mb-6">OUR SERVICES</h1>
                    <div className="grid gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="service-item">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h- object-cover rounded-md mb-8"
                                />
                                <h2 className="text-1xl font-bold font-curly text-blue-500 mb-2 text-center">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Header />
            <Footer />
        </div>
    );
};

export default Services;