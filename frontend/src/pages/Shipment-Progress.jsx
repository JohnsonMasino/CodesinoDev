import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import ChatWidget from '../components/widget.jsx';

const ShipmentProgress = () => {
  const location = useLocation();
  const trackingData = location.state?.trackingData;
  const [shipmentData, setShipmentData] = useState(trackingData || null);
  const [loading, setLoading] = useState(!trackingData);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShipmentData = async () => {
      if (!trackingData) {
        setLoading(true);
        setError(null);

        try {
          const response = await fetch(
            `https://kargoline-shipping-com-1-tczb.onrender.com/track-shipment/${trackingData?.tracking_id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch shipment data");
          }
          const data = await response.json();
          setShipmentData(data);
        } catch (err) {
          setError(err.message || "An error occurred while fetching shipment data");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchShipmentData();
  }, [trackingData]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-custom-bg1 bg-cover">
        <div className="mt-10 mb-8">
          <img
            src="truck.png"
            alt="Loading"
            className="mx-auto w-50 h-5 filter brightness-50"
          />
        </div>
        <div className="border-2 border-red-500 px-6 py-3 text-gray-500 font-semibold text-lg">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-custom-bg1 bg-cover">
        <div className="mt-10 mb-8">
          <img
            src="/images/error.png"
            alt="Error"
            className="mx-auto w-40 h-40 filter brightness-75"
          />
        </div>
        <div className="border-2 border-red-500 px-6 py-3 text-red-600 font-semibold text-lg">
          {error}
        </div>
      </div>
    );
  }

  if (!shipmentData) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-custom-bg1 bg-cover">
        <div className="mt-10 mb-8">
          <img
            src="/images/no-data.png"
            alt="No Data"
            className="mx-auto w-40 h-40 filter brightness-75"
          />
        </div>
        <div className="border-2 border-yellow-500 px-6 py-3 text-gray-500 font-semibold text-lg">
          No shipment data found for the provided tracking code.
        </div>
      </div>
    );
  }

  const shipmentStatus = shipmentData.status?.toLowerCase() || "in_transit";
  const progressPercentage = shipmentData.percentage || 50;

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-custom-bg1 bg-cover bg-fixed">
      <Header />
      <div className="flex-grow">
        <div className="mt-16">Shipment progress</div>
        <div className="text-center px-4 mb-8 mt-14">
          <h1 className="text-2xl font-bold text-red-600 mt-16">THIS IS YOUR PACKAGE STATUS</h1>
          <p className="text-1xl font-curly font-bold text-center text-gray-600 mt-4">
            Kargoline ensures your package reaches you promptly. Thank you for your patience.
          </p>
        </div>

        <div className="relative mb-10 max-w-3xl mx-auto p-2">
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-600" />
              <span className="text-sm text-gray-700">{shipmentData.origin}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">{shipmentData.destination}</span>
              <FaMapMarkerAlt className="text-red-600" />
            </div>
          </div>
          <div className="relative w-full h-2 bg-gray-300 rounded-full my-4">
            <div
              className={`absolute top-0 left-0 h-full rounded-full ${
                {
                  in_transit: "bg-green-600",
                  delivered: "bg-blue-600",
                  "pending delivery": "bg-yellow-600",
                }[shipmentStatus] || "bg-red-600"
              }`}
              style={{
                width: `${progressPercentage}%`,
              }}
            ></div>

            <div
              className="absolute top-[-12px] flex flex-col items-center"
              style={{
                left: `calc(${progressPercentage}% - 12px)`,
              }}
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-xs">📦</span>
              </div>
              <span className="text-sm mt-2 text-gray-700">
                {shipmentData.current_location || "Unknown Location"}
              </span>
              <FaMapMarkerAlt className="text-red-600" />
            </div>
          </div>
        </div>

        <div className="mt-40 mb-20">
          <img src="truck.png" alt="Our Promise" className=" mx-auto w-50 h-5 filter brightness-50" />
        </div>

        <div className="bg-custom-bg2 shadow-md rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-1xl font-curly font-bold text-center text-gray-600 mb-8">Package Details</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="p-2 text-left text-1xl font-curly font-bold">Parameter</th>
                <th className="p-2 text-left text-1xl font-curly font-bold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border text-sm">Tracking ID</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.tracking_id}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Sender</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.sender_name}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Receiver</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.receiver_name}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Sender Address</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.sender_address}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Receiver Address</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.receiver_address}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Luggage Type</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.luggage_type}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Mode of Shipment</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.mode}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Payment Method</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.fee}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Book Date</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.book_date}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Pickup Date</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.pick_up_date}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Expected Delivery Date</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.expected_delivery_date}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Current Location</td>
                <td className="p-2 border text-sm font-semibold">{shipmentData.current_location}</td>
              </tr>
              <tr>
                <td className="p-2 border text-sm">Shipment Status</td>
                <td
                  className={`p-2 border font-bold ${
                    {
                      in_transit: "text-green-600",
                      delivered: "text-blue-600",
                      "pending delivery": "text-yellow-600",
                    }[shipmentStatus] || "text-red-600"
                  }`}
                >
                  {shipmentData.status}
                </td>
              </tr>
            </tbody>
          </table>

          {shipmentStatus === "pending" && (
            <div className="mt-4 p-4 border-t border-gray-300 text-gray-700">
              <h3 className="text-2xl text-center font-bold text-red-600 mt-2 mb-2">⚠️ WARNING !!!</h3>
              <p className="text-1xl font-curly font-bold text-center text-gray-600 mb-8 mt-4">We encountered an issue while processing your shipment.</p>
              <p className="text-sm text-center font-curly mt-4">
                Your shipment is currently <span className="text-[16px] font-curly font-bold text-gray-600">Pending</span>. Please message our support team or email us at 
                <a
                  href="mailto:support@kargoline-shipping.com"
                  className="text-blue-500 underline ml-1"
                >
                  support@kargoline-shipping.com
                </a>
              </p>
            </div>
          )}
        </div>

        <div className="bg-custom-bg2 mt-16 p-4 border rounded-lg max-w-5xl mx-auto">
          <h2 className="font-bold font-curly text-1xl text-gray-600 text-center mb-10">
            Data Collection
          </h2>

          <div className="mt-8 px-4">
            <h3 className="text-md font-semibold text-gray-600 mb-2">Receiver's Data</h3>
            <div className="text-sm text-gray-700 grid grid-cols-">
              <p><span className="font-bold">Name: </span>{shipmentData.receiver_name}</p>
              <p><span className="font-bold">Phone: </span> {shipmentData.phone_number}</p>
              <p><span className="font-bold">Address: </span> {shipmentData.receiver_address}</p>
            </div>
          </div>

          <div className="mt-10 px-4">
            <h3 className="text-md font-semibold text-gray-600 mb-2">Sender's Data</h3>
            <div className="text-sm text-gray-700 grid grid-cols-">
              <p><span className="font-bold">Name: </span> {shipmentData.sender_name}</p>
              <p><span className="font-bold">Country: </span> {shipmentData.sender_country}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default ShipmentProgress;
