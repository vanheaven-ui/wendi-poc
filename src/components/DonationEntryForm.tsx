"use client";

import React, { useState } from "react";
import VoiceInputButton from "./VoiceInputButton";

interface Donor {
  id: number;
  name: string;
  email: string;
}

interface Beneficiary {
  id: number;
  name: string;
  age: number;
  needs: string;
}

interface DonationEntryFormProps {
  campaigns: string[];
  registeredDonors: Donor[];
  registeredBeneficiaries: Beneficiary[];
  onAddDonation: (donation: {
    amount: number;
    campaign: string;
    donorId: number | null;
    beneficiaryId: number | null;
  }) => void;
  simulateVoiceInput: (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => void;
  setMessage: (message: string) => void;
}

const DonationEntryForm: React.FC<DonationEntryFormProps> = ({
  campaigns,
  registeredDonors,
  registeredBeneficiaries,
  onAddDonation,
  simulateVoiceInput,
  setMessage,
}) => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationCampaign, setDonationCampaign] = useState("Education Fund");
  const [selectedDonorId, setSelectedDonorId] = useState<number | null>(null);
  const [selectedBeneficiaryId, setSelectedBeneficiaryId] = useState<
    number | null
  >(null);

  const handleSubmit = () => {
    const amountNum = parseFloat(donationAmount);
    if (isNaN(amountNum) || amountNum <= 0) {
      setMessage("Please enter a valid donation amount.");
      return;
    }
    if (!donationCampaign) {
      setMessage("Please select a campaign.");
      return;
    }

    onAddDonation({
      amount: amountNum,
      campaign: donationCampaign,
      donorId: selectedDonorId,
      beneficiaryId: selectedBeneficiaryId,
    });
    setDonationAmount("");
    setSelectedDonorId(null);
    setSelectedBeneficiaryId(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4 pb-2 border-b border-blue-100">
        Record Donation
      </h3>
      <input
        type="number"
        className="w-full p-3 border border-gray-300 rounded-md mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Donation Amount (UGX)"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
      />
      <VoiceInputButton
        label="Voice Input Amount"
        onClick={() => simulateVoiceInput(setDonationAmount, "50000")}
      />

      {/* Simple Campaign Picker */}
      <div className="mb-5">
        <p className="text-lg font-medium text-blue-900 mb-3">
          Select Campaign:
        </p>
        <div className="flex flex-wrap gap-2">
          {campaigns.map((campaign) => (
            <button
              key={campaign}
              className={`py-2 px-4 rounded-md border transition-all duration-200 ${
                donationCampaign === campaign
                  ? "bg-blue-400 border-blue-600 text-white font-bold shadow-sm"
                  : "bg-blue-100 border-blue-300 text-blue-900 hover:bg-blue-200"
              }`}
              onClick={() => setDonationCampaign(campaign)}
            >
              {campaign}
            </button>
          ))}
        </div>
      </div>

      {/* Link to Donor (Dropdown) */}
      {registeredDonors.length > 0 && (
        <div className="mb-5">
          <p className="text-lg font-medium text-blue-900 mb-3">
            Link to Donor (Optional):
          </p>
          <div className="flex overflow-x-auto pb-2 -mx-2">
            {registeredDonors.map((donor) => (
              <button
                key={donor.id}
                className={`flex-shrink-0 py-2 px-4 rounded-md border transition-all duration-200 mx-1 ${
                  selectedDonorId === donor.id
                    ? "bg-blue-400 border-blue-600 text-white font-bold shadow-sm"
                    : "bg-blue-100 border-blue-300 text-blue-900 hover:bg-blue-200"
                }`}
                onClick={() =>
                  setSelectedDonorId(
                    selectedDonorId === donor.id ? null : donor.id
                  )
                }
              >
                {donor.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Link to Beneficiary (Dropdown) */}
      {registeredBeneficiaries.length > 0 && (
        <div className="mb-5">
          <p className="text-lg font-medium text-blue-900 mb-3">
            Link to Beneficiary (Optional):
          </p>
          <div className="flex overflow-x-auto pb-2 -mx-2">
            {registeredBeneficiaries.map((beneficiary) => (
              <button
                key={beneficiary.id}
                className={`flex-shrink-0 py-2 px-4 rounded-md border transition-all duration-200 mx-1 ${
                  selectedBeneficiaryId === beneficiary.id
                    ? "bg-blue-400 border-blue-600 text-white font-bold shadow-sm"
                    : "bg-blue-100 border-blue-300 text-blue-900 hover:bg-blue-200"
                }`}
                onClick={() =>
                  setSelectedBeneficiaryId(
                    selectedBeneficiaryId === beneficiary.id
                      ? null
                      : beneficiary.id
                  )
                }
              >
                {beneficiary.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-colors duration-200 w-full"
        onClick={handleSubmit}
      >
        Add Donation
      </button>
    </div>
  );
};

export default DonationEntryForm;
