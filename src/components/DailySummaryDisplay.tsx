"use client";

import React from "react";

interface DailySummary {
  count: number;
  total: number;
}

interface DailySummaryDisplayProps {
  dailySummary: DailySummary;
}

const DailySummaryDisplay: React.FC<DailySummaryDisplayProps> = ({
  dailySummary,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4 pb-2 border-b border-blue-100">
        Daily Summary (Today)
      </h3>
      <p className="text-lg text-gray-700 mb-2">
        Total Donations:{" "}
        <span className="font-bold text-blue-800">{dailySummary.count}</span>
      </p>
      <p className="text-lg text-gray-700 mb-2">
        Total Amount:{" "}
        <span className="font-bold text-blue-800">
          UGX {dailySummary.total.toLocaleString()}
        </span>
      </p>
    </div>
  );
};

export default DailySummaryDisplay;
