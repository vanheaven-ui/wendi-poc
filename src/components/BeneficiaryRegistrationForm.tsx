"use client";

import React, { useState } from "react";
import VoiceInputButton from "./VoiceInputButton";

interface BeneficiaryRegistrationFormProps {
  onRegisterBeneficiary: (beneficiary: {
    name: string;
    age: number;
    needs: string;
  }) => void;
  simulateVoiceInput: (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => void;
  setMessage: (message: string) => void;
}

const BeneficiaryRegistrationForm: React.FC<
  BeneficiaryRegistrationFormProps
> = ({ onRegisterBeneficiary, simulateVoiceInput, setMessage }) => {
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [beneficiaryAge, setBeneficiaryAge] = useState("");
  const [beneficiaryNeeds, setBeneficiaryNeeds] = useState("");

  const handleSubmit = () => {
    if (!beneficiaryName || !beneficiaryAge || !beneficiaryNeeds) {
      setMessage("Please fill all beneficiary registration fields.");
      return;
    }
    const ageNum = parseInt(beneficiaryAge);
    if (isNaN(ageNum) || ageNum <= 0) {
      setMessage("Please enter a valid age for the beneficiary.");
      return;
    }
    onRegisterBeneficiary({
      name: beneficiaryName,
      age: ageNum,
      needs: beneficiaryNeeds,
    });
    setBeneficiaryName("");
    setBeneficiaryAge("");
    setBeneficiaryNeeds("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4 pb-2 border-b border-blue-100">
        Register Beneficiary
      </h3>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Beneficiary Name"
        value={beneficiaryName}
        onChange={(e) => setBeneficiaryName(e.target.value)}
      />
      <VoiceInputButton
        label="Voice Input Name"
        onClick={() => simulateVoiceInput(setBeneficiaryName, "Aisha Nankya")}
      />
      <input
        type="number"
        className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Age"
        value={beneficiaryAge}
        onChange={(e) => setBeneficiaryAge(e.target.value)}
      />
      <VoiceInputButton
        label="Voice Input Age"
        onClick={() => simulateVoiceInput(setBeneficiaryAge, "12")}
      />
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md mb-5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Needs (e.g., Education, Food, Medical)"
        value={beneficiaryNeeds}
        onChange={(e) => setBeneficiaryNeeds(e.target.value)}
      />
      <VoiceInputButton
        label="Voice Input Needs"
        onClick={() => simulateVoiceInput(setBeneficiaryNeeds, "School Fees")}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-colors duration-200 w-full"
        onClick={handleSubmit}
      >
        Register Beneficiary
      </button>
    </div>
  );
};

export default BeneficiaryRegistrationForm;
