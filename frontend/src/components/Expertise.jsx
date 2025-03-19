import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaRegCheckCircle, FaClock,  } from 'react-icons/fa';

const Expertise = () => {
  const expertiseData = [
    { activity: 'Accountability', percentage: 85 },
    { activity: 'On-time Delivery', percentage: 90 },
    { activity: 'Customer Satisfaction', percentage: 95 },
    { activity: 'Transparency', percentage: 87 },
  ];

  const shipmentData = {
    waterShipments: {
      value: 1044,
      description:
        'Through sea transport, we ensure the safe and efficient delivery of large-scale shipments, minimizing environmental impact and supporting global trade by connecting remote ports with major markets worldwide.',
    },
    airShipments: {
      value: 15750,
      description:
        'Leveraging the speed and precision of air freight, we guarantee timely delivery of high-priority shipments, ensuring that businesses and individuals receive their goods exactly when they need them, no matter the distance.',
    },
    landShipments: {
      value: 55750,
      description:
        'Our land transport services provide a reliable solution for regional deliveries, seamlessly connecting businesses and communities while emphasizing safety, cost-effectiveness, and punctuality.',
    },
  };

  const [counts, setCounts] = useState({
    water: 0,
    air: 0,
    land: 0,
  });

  const { ref: barRef, inView: barInView } = useInView({ threshold: 0.2 });
  const { ref: countRef, inView: countInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (countInView) {
      const waterInterval = animateCount('water', shipmentData.waterShipments.value);
      const airInterval = animateCount('air', shipmentData.airShipments.value);
      const landInterval = animateCount('land', shipmentData.landShipments.value);

      return () => {
        clearInterval(waterInterval);
        clearInterval(airInterval);
        clearInterval(landInterval);
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
        OUR EXPERTISE AND HISTORY
      </h3>
      <div className="flex justify-between items-start space-x-4">
  
        <div className="flex-2 pr-4">
          <h2 className="text-lg text-gray-600 italic mt- mb-3">
            "Building a reputation of trust and reliability is key to success!"
          </h2>
          <div className="flex flex-col space-y-8 mt-2">
            <FaRegCheckCircle className="text-1xl text-gray-600" />
            <FaClock className="text-1xl text-gray-600" />
          </div>
        </div>

    
        <div className="flex-2 w-full">
          {expertiseData.map((data) => (
            <div key={data.activity} className="mb-6" ref={barRef}>
              <div className="flex justify-between">
                <span className="text-1xl font-curly px-2 text-gray-600">{data.activity}</span>
                <span className="text-1xl font-curly text-gray-600">{data.percentage}%</span>
              </div>
              <div className="bg-gray-300 h-3 rounded-full overflow-hidden">
                <div
                  className='h-full bg-blue-400 transition-all duration-1000 ease-linear'
                  style={{ width: barInView ? `${data.percentage}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-14" ref={countRef}>
        <div className="flex justify-around space-x-6">
          <div className="w-1/3">
            <p className="text-3xl text-blue-500 font-semibold">{counts.water}</p>
            <p className="text-sm mt-2">{shipmentData.waterShipments.description}</p>
            <h4 className="text-sm font-bold mt-2">Water Shipments</h4>
          </div>
          <div className="w-1/3">
            <p className="text-3xl text-blue-500 font-semibold">{counts.air}</p>
            <p className="text-sm mt-2">{shipmentData.airShipments.description}</p>
            <h4 className="text-sm font-bold mt-2">Air Shipments</h4>
          </div>
          <div className="w-1/3">
            <p className="text-3xl text-blue-500 font-semibold">{counts.land}</p>
            <p className="text-sm mt-2">{shipmentData.landShipments.description}</p>
            <h4 className="text-sm font-bold mt-2">Land Shipments</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;