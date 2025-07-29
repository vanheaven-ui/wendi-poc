"use client";

import React from "react";

interface MessageBoxProps {
  message: string;
  onClose: () => void;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center max-w-sm mx-auto">
        <p className="text-lg text-gray-800 mb-5 text-center">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
