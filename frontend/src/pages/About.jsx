import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Widget from '../components/widget.jsx';
import ImageCarousel from '../components/BackgroundImage.jsx';
import Builtbyus from '../components/Builtbyus.jsx';

const teamMembers = [
    { name: 'Johnbosco Smith', role: 'CEO & Founder', image: 'ceo.jpg' },
    { name: 'Jane Smith', role: 'Chief Operations Officer', image: 'coo.png' },
    { name: 'David Johnson', role: 'Head of Logistics', image: 'logistics.jpg' },
    { name: 'Isiuzor Annabel', role: 'Customer Support Manager', image: 'support.jpg' },
    { name: 'Michael Brown', role: 'Marketing Specialist', image: 'marketing.jpg' },
    { name: 'Sarah Chen', role: 'Finance Manager', image: 'finance.jpg' },
];

const AboutUs = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-custom-bg1 bg-cover bg-fixed">
            <div className="flex-grow">
                <ImageCarousel />

                <div className="text-center my-10">
                    <h2 className="text-2xl font-bold text-blue-500">MEET OUR TEAM</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 px-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center bg-custom-bg2 p-4 rounded-lg shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-40 h-40 mx-auto rounded-full"
                                />
                                <h3 className="text-xl font-bold mt-4 text-gray-700">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-8 py-16 bg-custom-bg2">
                    <h2 className="text-2xl font-bold text-center text-blue-500 mb-10">ABOUT KARGOLINE</h2>
                    <section className="mb-12">
                        <h3 className="text-1xl font-bold font-curly text-blue-500 mb-1">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                        At CargoLine, our mission is to simplify and enhance the logistics and shipment
                        experience for individuals and businesses worldwide. We aim to provide secure,
                        reliable, and eco-friendly shipping solutions that meet the unique needs of our customers. 
                        From inception to delivery, our focus is on creating seamless, innovative processes 
                        that redefine customer satisfaction. Every step of our logistics process is carefully 
                        designed to prioritize efficiency, sustainability, and precision. CargoLine remains 
                        committed to adopting cutting-edge technology, building resilient partnerships, 
                        and fostering trust with our customers, ensuring that their cargo is handled with 
                        the utmost care and professionalism. We also take pride in fostering relationships 
                        that go beyond mere transactions, providing personalized services that guarantee 
                        long-term satisfaction. As we continue to grow, our mission evolves with a 
                        focus on bridging gaps in global logistics, offering unparalleled customer-centric 
                        services. Our ultimate goal is to set new standards of excellence, building 
                        a better-connected and more sustainable world.
                        </p>
                    </section>
                    <section className="mb-12">
                        <h3 className="text-1xl font-bold font-curly text-blue-500 mb-1">Our History</h3>
                        <p className="text-gray-600 leading-relaxed">
                        Founded in 1790, CargoLine started as a small courier service dedicated to bridging
                        the gap in local logistics. Over the years, we have expanded our operations to
                        cover international shipping, offering a seamless experience for clients across the globe. 
                        Our journey began with a modest vision but has since grown into a global enterprise 
                        thanks to our unwavering commitment to excellence and innovation. Over the past two 
                        decades, we have continually adapted to the changing demands of the industry, 
                        embracing technology and customer feedback to enhance our services. From revolutionizing 
                        local delivery routes to introducing state-of-the-art tracking systems, CargoLine has 
                        been at the forefront of industry advancements. Our history is a testament to our 
                        resilience and dedication, marked by milestones of success that include strategic 
                        expansions, awards, and accolades. Through it all, our core principle remains unchanged: 
                        to deliver excellence in every package we handle. Today, CargoLine's legacy continues 
                        as we shape the future of logistics with the same passion and determination that 
                        defined our early days.
                        </p>
                    </section>
                    <section className="mb-12">
                        <h3 className="text-1xl font-bold font-curly text-blue-500 mb-1">Our Values</h3>
                        <p className="text-gray-600 leading-relaxed">
                        We believe in transparency, efficiency, and customer satisfaction. Our team is committed
                        to upholding these values by delivering services that exceed expectations and build lasting
                        relationships with our clients. Integrity lies at the heart of everything we do, and it 
                        drives our commitment to act ethically and responsibly in every interaction. Efficiency 
                        ensures that we not only meet but exceed customer expectations, delivering on time and 
                        with unmatched precision. We prioritize collaboration, fostering teamwork that brings 
                        together diverse perspectives to create innovative solutions. Customer satisfaction 
                        serves as our ultimate benchmark, guiding every decision we make and every service 
                        we offer. At CargoLine, we also champion sustainability as a core value, constantly 
                        seeking ways to minimize environmental impact through eco-friendly practices. Together, 
                        these values form the foundation of our company, shaping our culture and inspiring 
                        our employees to achieve excellence every day.
                        </p>
                    </section>
                    <section className="mb-12">
                        <h3 className="text-1xl font-bold font-curly text-blue-500 mb-1">Our Services</h3>
                        <p className="text-gray-600 leading-relaxed">
                        CargoLine offers a wide range of services, including speedy delivery, secure packaging,
                        real-time tracking, and global shipping. Whether you need to send a local package or an
                        international shipment, our state-of-the-art systems ensure a smooth process from start
                        to finish. We specialize in custom-tailored logistics solutions, catering to individual 
                        and business needs alike. Our services are backed by advanced technology, enabling 
                        real-time updates and seamless coordination for every shipment. With an extensive 
                        network of partners and facilities, we provide unparalleled reach and reliability 
                        across continents. CargoLine also prioritizes affordability, delivering premium 
                        services without compromising cost-efficiency. Whether it’s a last-minute delivery 
                        or a complex supply chain solution, our services are designed to deliver peace of mind 
                        every time. From packaging innovations to advanced transportation techniques, we are 
                        committed to driving logistics forward and making shipping simpler, faster, and more 
                        accessible for everyone.
                        </p>
                    </section>
                    <section className="mb-12">
                        <h3 className="text-1xl font-bold font-curly text-blue-500 mb-1">Sustainability Efforts</h3>
                        <p className="text-gray-600 leading-relaxed">
                        As part of our commitment to environmental stewardship, we employ eco-friendly practices
                        in our operations. From using sustainable packaging materials to optimizing delivery
                        routes for fuel efficiency, CargoLine is dedicated to reducing its carbon footprint. 
                        Our sustainability initiatives extend beyond the operational level, embracing green 
                        energy sources and reducing waste across the supply chain. We actively invest in 
                        renewable energy projects and partner with organizations that share our vision for 
                        a greener planet. Sustainability is not just a goal for us; it’s a core principle that 
                        drives innovation and decision-making at every level. By incorporating sustainable 
                        practices, we ensure that our services remain environmentally responsible without 
                        compromising quality or efficiency. Together with our partners and customers, we 
                        strive to create a logistics future that is both resilient and eco-friendly.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-1xl font-bold font-curly text-blue-500 mb-1">Customer Focus</h3>
                        <p className="text-gray-600 leading-relaxed">
                        At the heart of CargoLine is our dedication to customer satisfaction. Our 24/7 customer
                        support team is always ready to address your concerns and ensure a seamless shipping
                        experience. Your trust and satisfaction are our greatest rewards. Our customer-first 
                        approach goes beyond addressing complaints or resolving issues; it encompasses every 
                        interaction, from the first inquiry to the final delivery. By consistently exceeding 
                        expectations, we aim to turn customers into long-term partners and advocates of our 
                        brand. Every feedback we receive shapes our improvement strategy, driving us to innovate 
                        and deliver unparalleled service excellence.
                        </p>
                    </section>
                </div>
                < Builtbyus />
            </div>

            <Header />
            <Footer />
            <Widget />
        </div>
    );
};

export default AboutUs;