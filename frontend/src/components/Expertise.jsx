import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Expertise = () => {
  const expertiseData = [
    { activity: 'Innovation &Creativity 🚀', percentage: 85 },
    { activity: 'Excellence & Quality 💎', percentage: 90 },
    { activity: 'Collaboration & Growth 🤝', percentage: 95 },
    { activity: 'Customer Focused 🎯', percentage: 100 },
  ];

  const expertiseDetails = {
    Innovation: {
      value: 85,
      description:
        'At Codesino, we foster creativity by developing cutting-edge, scalable solutions that drive technological advancement and innovation.',
    },
    Excellence: {
      value: 90,
      description:
        'We prioritize high-quality, efficient, and maintainable code, ensuring the best user experience and seamless performance.',
    },
    Collaboration: {
      value: 95,
      description:
        'We believe in teamwork and knowledge sharing, working together to build impactful digital solutions and empower the tech community.',
    },
    CustomerFocus: {
      value: 100,
      description:
        'Our solutions are tailored to meet real-world needs, providing technology that enhances user experience and business growth.',
    },
  };

  const [counts, setCounts] = useState({
    innovation: 0,
    excellence: 0,
    collaboration: 0,
    customerFocus: 0,
  });

  const { ref: containerRef, inView } = useInView({ threshold: 0.2 });
  const { ref: countRef, inView: countInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (countInView) {
      const innovationInterval = animateCount('innovation', expertiseDetails.Innovation.value);
      const excellenceInterval = animateCount('excellence', expertiseDetails.Excellence.value);
      const collaborationInterval = animateCount('collaboration', expertiseDetails.Collaboration.value);
      const customerFocusInterval = animateCount('customerFocus', expertiseDetails.CustomerFocus.value);

      return () => {
        clearInterval(innovationInterval);
        clearInterval(excellenceInterval);
        clearInterval(collaborationInterval);
        clearInterval(customerFocusInterval);
      };
    }
  }, [countInView]);

  const animateCount = (type, target) => {
    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newValue = prevCounts[type] + Math.ceil(target / 100);
        if (newValue >= target) {
          clearInterval(interval);
          return { ...prevCounts, [type]: target };
        }
        return { ...prevCounts, [type]: newValue };
      });
    }, 30);
    return interval;
  };

  return (
    <div className="p-8">
      <h3 className="text-1xl text-center text-gray-600 font-bold mt-4 mb-8">
        Our Core Values
      </h3>
      <div className="flex justify-between items-start space-x-4">
        <div className="flex-2 pr-4">
          <h2 className="text-1xl text-gray-600 italic mt-4 mb-8">
            "Empowering innovation, bridging learning with real-world tech, and building scalable
            digital solutions for the future. At Codesino, we turn ideas into impact." 🚀
          </h2>
          <h2 className="text-1xl text-gray-600 italic mt-4 mb-8">
            "Building the future with code—scalable apps, innovative solutions, and real-world
            tech empowerment. At Codesino, we make technology work for you."
          </h2>
          <h2 className="text-1xl text-gray-600 italic mt-4 mb-3">
            "Innovate. Educate. Elevate. At Codesino, we develop solutions that empower
            businesses, developers, and the future of technology." 🚀
          </h2>
        </div>

        <div className="flex-2 w-full mt-10" ref={containerRef}>
          <div className="flex justify-center items-end space-x-6 h-64">
            {expertiseData.map((data, index) => (
              <div key={index} className="relative w-16 flex flex-col items-center">
                <div className="w-full h-52 bg-gray-300 rounded-full overflow-hidden flex items-end">
                  <div
                    className="w-full bg-blue-400 transition-all duration-1000 ease-linear flex justify-center items-center text-white font-bold"
                    style={{ height: inView ? `${data.percentage}%` : '0%' }}
                  >
                    {data.percentage}%
                  </div>
                </div>
                <span className="text-sm text-gray-600 mt-2 text-center">{data.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-14" ref={countRef}>
        <div className="flex justify-around space-x-6">
          {Object.entries(expertiseDetails).map(([key, value]) => (
            <div key={key} className="w-1/3">
              <p className="text-3xl text-blue-500 font-semibold">{counts[key.charAt(0).toLowerCase() + key.slice(1)]}%
              </p>
              <p className="text-sm mt-2">{value.description}</p>
              <h4 className="text-sm font-bold mt-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
