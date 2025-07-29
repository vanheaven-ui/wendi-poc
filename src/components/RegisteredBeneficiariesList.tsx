"use client";

import React from "react";

interface Beneficiary {
  id: number;
  name: string;
  age: number;
  needs: string;
}

interface RegisteredBeneficiariesListProps {
  beneficiaries: Beneficiary[];
}

const RegisteredBeneficiariesList: React.FC<
  RegisteredBeneficiariesListProps
> = ({ beneficiaries }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4 pb-2 border-b border-blue-100">
        Registered Beneficiaries
      </h3>
      {beneficiaries.length === 0 ? (
        <p className="text-center text-gray-500 italic mt-4">
          No beneficiaries registered yet.
        </p>
      ) : (
        <div className="max-h-60 overflow-y-auto">
          {beneficiaries.map((beneficiary) => (
            <div
              key={beneficiary.id}
              className="bg-blue-50 p-3 rounded-md mb-2 border-l-4 border-blue-400"
            >
              <p className="text-gray-800">
                <span className="font-semibold text-blue-900">Name:</span>{" "}
                {beneficiary.name}
              </p>
              <p className="text-gray-800">
                <span className="font-semibold text-blue-900">Age:</span>{" "}
                {beneficiary.age}
              </p>
              <p className="text-gray-800">
                <span className="font-semibold text-blue-900">Needs:</span>{" "}
                {beneficiary.needs}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegisteredBeneficiariesList;
