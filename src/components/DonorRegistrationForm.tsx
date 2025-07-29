"use client";

import React, { useState } from "react";
import VoiceInputButton from "./VoiceInputButton";

interface DonorRegistrationFormProps {
  onRegisterDonor: (donor: {
    name: string;
    email: string;
    password: string;
  }) => void;
  simulateVoiceInput: (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => void;
  setMessage: (message: string) => void;
}

const DonorRegistrationForm: React.FC<DonorRegistrationFormProps> = ({
  onRegisterDonor,
  simulateVoiceInput,
  setMessage,
}) => {
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPassword, setDonorPassword] = useState("");

  const handleSubmit = () => {
    if (!donorName || !donorEmail || !donorPassword) {
      setMessage("Please fill all donor registration fields.");
      return;
    }
    onRegisterDonor({
      name: donorName,
      email: donorEmail,
      password: donorPassword,
    });
    setDonorName("");
    setDonorEmail("");
    setDonorPassword("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4 pb-2 border-b border-blue-100">
        Donor Registration
      </h3>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Donor Name"
        value={donorName}
        onChange={(e) => setDonorName(e.target.value)}
      />
      <VoiceInputButton
        label="Voice Input Name"
        onClick={() => simulateVoiceInput(setDonorName, "John Doe")}
      />

      <input
        type="email"
        className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Donor Email"
        value={donorEmail}
        onChange={(e) => setDonorEmail(e.target.value)}
      />
      <VoiceInputButton
        label="Voice Input Email"
        onClick={() =>
          simulateVoiceInput(setDonorEmail, "john.doe@example.com")
        }
      />

      <input
        type="password"
        className="w-full p-3 border border-gray-300 rounded-md mb-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Password (simplified)"
        value={donorPassword}
        onChange={(e) => setDonorPassword(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-colors duration-200 w-full"
        onClick={handleSubmit}
      >
        Register Donor
      </button>
    </div>
  );
};

export default DonorRegistrationForm;
