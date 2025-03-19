import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AdminChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [roomName, setRoomName] = useState(null);
  const socket = useRef(null);
  const navigate = useNavigate();

  const BASE_URL = "https://kargoline-shipping-com-1-tczb.onrender.com";

  // Generate guestId dynamically (for example, using a timestamp or UUID)
  const guestId = `guest_${Date.now()}`; // Replace with your preferred logic.
  const targetUserId = 1; // Admin ID.

  // WebSocket function to create or fetch the chat room
  const getOrCreateRoom = async () => {
    try {
      const wsUrl = `${BASE_URL.replace("https://", "ws://")}/ws/chat/chat-rooms/`;
      socket.current = new WebSocket(wsUrl);

      socket.current.onopen = () => {
        console.log("WebSocket connection established for room creation");

        // Send the payload to create or fetch the room
        const payload = {
          guest_id: guestId,
          target_user_id: targetUserId,
        };
        socket.current.send(JSON.stringify(payload));
      };

      socket.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.room_name) {
          setRoomName(data.room_name); // Update the room name
        } else {
          console.error("Room name not found in server response:", data);
        }
      };

      socket.current.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      socket.current.onclose = () => {
        console.log("WebSocket connection closed for room creation");
      };
    } catch (error) {
      console.error("Error creating or fetching room:", error);
    }
  };

  useEffect(() => {
    getOrCreateRoom();

    // Cleanup WebSocket connection on component unmount
    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!roomName) return;

    const wsUrl = `${BASE_URL.replace("https://", "ws://")}/ws/chat/${roomName}/`;
    socket.current = new WebSocket(wsUrl);

    socket.current.onopen = () => {
      console.log("WebSocket connection established for chat room");
    };

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    socket.current.onclose = () => {
      console.log("WebSocket connection closed for chat room");
    };

    socket.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, [roomName]);

  const sendMessage = () => {
    if (!inputMessage.trim() || !socket.current) return;

    const message = {
      message: inputMessage,
      guest_id: guestId,
      target_user_id: targetUserId,
    };

    socket.current.send(JSON.stringify(message));
    setMessages((prev) => [...prev, { ...message, sender: "admin" }]);
    setInputMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-red-600 text-white py-4 px-6 shadow-md">
        <h2 className="text-sm font-semibold">
          Chat Room: {roomName || "Connecting..."}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              msg.sender === "admin" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg shadow-md ${
                msg.sender === "admin"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
        {isTyping && <div className="text-gray-500 italic">Client is typing...</div>}
      </div>

      <div className="bg-white p-4 shadow-md">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          onClick={sendMessage}
          className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AdminChatPage;