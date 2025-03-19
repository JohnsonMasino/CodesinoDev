import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import { AiOutlineLoading3Quarters, AiOutlinePaperClip } from "react-icons/ai";
import axios from "axios";
import { io } from "socket.io-client";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const socket = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      const initialMessage = {
        text: "Hello, this is Amara from Kargoline support team. What help do you need?",
        sender: "support",
      };
      setMessages([initialMessage]);

      socket.current = io("backend-url");

      socket.current.on("message", (message) => {
        setMessages((prev) => [...prev, message]);
        setIsTyping(false);
      });

      socket.current.on("typing", () => {
        setIsTyping(true);
      });
    }, 60000);

    return () => {
      clearTimeout(timer);
      if (socket.current) socket.current.disconnect();
    };
  }, []);

  const handleBackToHome = () => {
    navigate("/");
  };

  const supportProfile = {
    name: "Support",
    avatar: "widget.JPG",
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() && !attachment) return;

    const userMessage = { text: inputMessage, sender: "user", attachment };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setAttachment(null);

    try {
      await axios.post("/api/send-message", {
        text: inputMessage,
        attachment,
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(URL.createObjectURL(file));
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-gray-100">
        <AiOutlineLoading3Quarters className="text-red-600 text-5xl animate-spin mb-4" />
        <p className="text-lg text-gray-800 font-medium text-center">
          Please wait while we connect you to a staff.<br />
          This will only take a minute.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-red-600 text-white py-2 px-1 shadow-md flex justify-between items-center">
        <div>
          <h2 className="text-[13px] font-semibold">Support Chat</h2>
          <p className="text-[9px] font-curly">We are here to help you!</p>
        </div>
        <button
          onClick={handleBackToHome}
          className="bg-white text-[12px] text-red-600 px-1 py-1 rounded hover:bg-gray-200 transition"
        >
          Back to Home
        </button>
        <div className="flex items-center space-x-2">
          <img
            src={supportProfile.avatar}
            alt="Support Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium">{supportProfile.name}</span>
        </div>
      </div>

      <ScrollToBottom className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } mb-2`}
          >
            {msg.sender === "support" && (
              <div className="flex items-start space-x-2">
                <img
                  src={supportProfile.avatar}
                  alt="Support Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div className="max-w-xs p-3 rounded-lg shadow-md bg-gray-200 text-gray-800">
                  {msg.text}
                  {msg.attachment && (
                    <img src={msg.attachment} alt="Attachment" className="mt-2 max-w-full" />
                  )}
                </div>
              </div>
            )}
            {msg.sender === "user" && (
              <div className="max-w-xs p-3 rounded-lg shadow-md bg-red-600 text-white">
                {msg.text}
                {msg.attachment && (
                  <img src={msg.attachment} alt="Attachment" className="mt-2 max-w-full" />
                )}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center justify-start space-x-2 mb-2">
            <AiOutlineLoading3Quarters className="text-red-600 animate-spin" />
            <span className="text-sm text-gray-600">Support is typing...</span>
          </div>
        )}
      </ScrollToBottom>

      <div className="bg-white p-4 shadow-md">
        <div className="flex items-center">
          <input
            type="file"
            id="file-input"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-input"
            className="cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <AiOutlinePaperClip className="text-2xl mr-2" />
          </label>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            onClick={sendMessage}
            className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition"
          >
            Send
          </button>
        </div>
        {attachment && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">Attachment:</p>
            <img src={attachment} alt="Attachment Preview" className="max-w-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
