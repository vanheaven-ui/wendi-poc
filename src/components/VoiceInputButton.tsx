"use client";

import React from "react";

interface VoiceInputButtonProps {
  onClick: () => void;
  label: string;
}

const VoiceInputButton: React.FC<VoiceInputButtonProps> = ({
  onClick,
  label,
}) => {
  return (
    <button
      className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200 w-full mb-3"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default VoiceInputButton;
