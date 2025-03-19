import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatWidget = () => {
  const [isWidgetVisible, setWidgetVisible] = useState(true);
  const [isPopupVisible, setPopupVisible] = useState(true);
  const navigate = useNavigate();

  const redirectToChat = () => {
    navigate(`/chat`);
  };

  if (!isWidgetVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="absolute top-0 right-0 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-lg hover:bg-red-700 transition"
        onClick={() => setWidgetVisible(false)}
      >
        X
      </button>

      <div className="flex items-center space-x-1">
        <button
          onClick={redirectToChat}
          className="bg-blue-500 text-white px-4 py-2 text-sm rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          Chat Now
        </button>

        <div
          className="w-14 h-14 bg-gray-300 rounded-full cursor-pointer shadow-lg border-2 border-blue-500"
          onClick={() => setPopupVisible(false)}
        >
          <img
            src="widget.avif"
            alt="Support"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {isPopupVisible && (
        <div className="absolute bottom-16 right-0 bg-white shadow-md p-3 rounded-lg border border-gray-300 max-w-xs">
          <p className="text-sm text-gray-700">
            Hi, do you want to chat with support?
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
