"use client";

import React from "react";

interface Donation {
  id: number;
  amount: number;
  campaign: string;
  donorId: number | null;
  beneficiaryId: number | null;
  date: string;
  time: string;
}

interface TransactionHistoryListProps {
  donations: Donation[];
  getDonorName: (id: number | null) => string;
  getBeneficiaryName: (id: number | null) => string;
}

const TransactionHistoryList: React.FC<TransactionHistoryListProps> = ({
  donations,
  getDonorName,
  getBeneficiaryName,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4 pb-2 border-b border-blue-100">
        Transaction History
      </h3>
      {donations.length === 0 ? (
        <p className="text-center text-gray-500 italic mt-4">
          No donations recorded yet.
        </p>
      ) : (
        <div className="max-h-60 overflow-y-auto">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="bg-blue-50 p-3 rounded-md mb-2 border-l-4 border-blue-400"
            >
              <p className="text-gray-800">
                <span className="font-semibold text-blue-900">Amount:</span> UGX{" "}
                {donation.amount.toLocaleString()}
              </p>
              <p className="text-gray-800">
                <span className="font-semibold text-blue-900">Campaign:</span>{" "}
                {donation.campaign}
              </p>
              {donation.donorId && (
                <p className="text-gray-800">
                  <span className="font-semibold text-blue-900">Donor:</span>{" "}
                  {getDonorName(donation.donorId)}
                </p>
              )}
              {donation.beneficiaryId && (
                <p className="text-gray-800">
                  <span className="font-semibold text-blue-900">
                    Beneficiary:
                  </span>{" "}
                  {getBeneficiaryName(donation.beneficiaryId)}
                </p>
              )}
              <p className="text-gray-800">
                <span className="font-semibold text-blue-900">Date:</span>{" "}
                {donation.date} at {donation.time}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionHistoryList;
