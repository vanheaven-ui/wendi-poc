"use client";

import React from "react";

interface Donor {
  id: number;
  name: string;
  email: string;
}

interface RegisteredDonorsListProps {
  donors: Donor[];
}

const RegisteredDonorsList: React.FC<RegisteredDonorsListProps> = ({
  donors,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4 pb-2 border-b border-blue-100">
        Registered Donors
      </h3>
      {donors.length === 0 ? (
        <p className="text-center text-gray-500 italic mt-4">
          No donors registered yet.
        </p>
      ) : (
        <div className="max-h-60 overflow-y-auto">
          {donors.map((donor) => (
            <div
              key={donor.id}
              className="bg-blue-50 p-3 rounded-md mb-2 border-l-4 border-blue-400"
            >
              <p className="text-gray-800">
                <span className="font-semibold text-blue-900">Name:</span>{" "}
                {donor.name}
              </p>
              <p className="text-gray-800">
                <span className="font-semibold text-blue-900">Email:</span>{" "}
                {donor.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegisteredDonorsList;
