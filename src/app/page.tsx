"use client";

import BeneficiaryRegistrationForm from "@/components/BeneficiaryRegistrationForm";
import DailySummaryDisplay from "@/components/DailySummaryDisplay";
import DonationEntryForm from "@/components/DonationEntryForm";
import DonorRegistrationForm from "@/components/DonorRegistrationForm";
import MessageBox from "@/components/MessageBox";
import RegisteredBeneficiariesList from "@/components/RegisteredBeneficiariesList";
import RegisteredDonorsList from "@/components/RegisteredDonorsList";
import TransactionHistoryList from "@/components/TransactionHistoryList";
import React, { useState, useEffect } from "react";

// Types
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

interface Donation {
  id: number;
  amount: number;
  campaign: string;
  donorId: number | null;
  beneficiaryId: number | null;
  date: string;
  time: string;
}

export default function App() {
  const [registeredDonors, setRegisteredDonors] = useState<Donor[]>([]);
  const [registeredBeneficiaries, setRegisteredBeneficiaries] = useState<
    Beneficiary[]
  >([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [message, setMessage] = useState<string>("");
  const [viewMode, setViewMode] = useState<"public" | "admin">("public");

  // Hardcoded campaigns
  const campaigns = [
    "Education Fund",
    "Healthcare Initiative",
    "Community Support",
  ];

  // --- localStorage Simulation (for offline persistence) ---
  useEffect(() => {
    const loadData = () => {
      try {
        const storedDonors = localStorage.getItem("registeredDonors");
        const storedBeneficiaries = localStorage.getItem(
          "registeredBeneficiaries"
        );
        const storedDonations = localStorage.getItem("donations");

        if (storedDonors) setRegisteredDonors(JSON.parse(storedDonors));
        if (storedBeneficiaries)
          setRegisteredBeneficiaries(JSON.parse(storedBeneficiaries));
        if (storedDonations) setDonations(JSON.parse(storedDonations));
      } catch (e) {
        console.error("Failed to load data from localStorage", e);
        setMessage("Failed to load data. Please try again.");
      }
    };
    if (typeof window !== "undefined") {
      loadData();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "registeredDonors",
          JSON.stringify(registeredDonors)
        );
      } catch (e) {
        console.error("Failed to save donors to localStorage", e);
        setMessage("Failed to save donor data.");
      }
    }
  }, [registeredDonors]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          "registeredBeneficiaries",
          JSON.stringify(registeredBeneficiaries)
        );
      } catch (e) {
        console.error("Failed to save beneficiaries to localStorage", e);
        setMessage("Failed to save beneficiary data.");
      }
    }
  }, [registeredBeneficiaries]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("donations", JSON.stringify(donations));
      } catch (e) {
        console.error("Failed to save donations to localStorage", e);
        setMessage("Failed to save donation data.");
      }
    }
  }, [donations]);

  // --- Voice Input Simulation ---
  const simulateVoiceInput = (
    fieldSetter: React.Dispatch<React.SetStateAction<string>>,
    simulatedValue: string
  ) => {
    setMessage(`Simulating voice input for field: "${simulatedValue}"`);
    setTimeout(() => {
      fieldSetter(simulatedValue);
      setMessage("");
    }, 1000);
  };

  // --- Handlers ---
  const handleRegisterDonor = (newDonor: Omit<Donor, "id">) => {
    const fullNewDonor: Donor = { id: Date.now(), ...newDonor };
    setRegisteredDonors((prev) => [...prev, fullNewDonor]);
    setMessage("Donor registered successfully!");
  };

  const handleRegisterBeneficiary = (
    newBeneficiary: Omit<Beneficiary, "id">
  ) => {
    const fullNewBeneficiary: Beneficiary = {
      id: Date.now(),
      ...newBeneficiary,
    };
    setRegisteredBeneficiaries((prev) => [...prev, fullNewBeneficiary]);
    setMessage("Beneficiary registered successfully!");
  };

  const handleAddDonation = (
    newDonationData: Omit<Donation, "id" | "date" | "time">
  ) => {
    const newDonation: Donation = {
      id: Date.now(),
      ...newDonationData,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setDonations((prev) => [...prev, newDonation]);
    setMessage("Donation recorded successfully!");
  };

  // Helper to get donor/beneficiary name by ID
  const getDonorName = (id: number | null) =>
    registeredDonors.find((d) => d.id === id)?.name || "N/A";
  const getBeneficiaryName = (id: number | null) =>
    registeredBeneficiaries.find((b) => b.id === id)?.name || "N/A";

  // Calculate daily summary (for current day)
  const getDailySummary = () => {
    const today = new Date().toLocaleDateString();
    const dailyDonations = donations.filter((d) => d.date === today);
    const totalToday = dailyDonations.reduce((sum, d) => sum + d.amount, 0);
    return { count: dailyDonations.length, total: totalToday };
  };
  const dailySummary = getDailySummary();

  return (
    <div className="min-h-screen p-5 bg-blue-50 flex flex-col items-center font-sans">
      <MessageBox message={message} onClose={() => setMessage("")} />

      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg mb-8">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2 text-center">
          Wendi Foundation POC
        </h1>
        <h2 className="text-xl text-blue-600 mb-8 text-center">
          Donor, Beneficiary & Reconciliation Platform
        </h2>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8 bg-blue-100 rounded-lg p-1 shadow-inner">
          <button
            onClick={() => setViewMode("public")}
            className={`flex-1 py-2 px-4 rounded-md text-center font-semibold transition-all duration-300 ${
              viewMode === "public"
                ? "bg-blue-600 text-white shadow-md"
                : "text-blue-900 hover:bg-blue-200"
            }`}
          >
            Public/Donor View
          </button>
          <button
            onClick={() => setViewMode("admin")}
            className={`flex-1 py-2 px-4 rounded-md text-center font-semibold transition-all duration-300 ${
              viewMode === "admin"
                ? "bg-blue-600 text-white shadow-md"
                : "text-blue-900 hover:bg-blue-200"
            }`}
          >
            Admin View
          </button>
        </div>

        {viewMode === "public" ? (
          // Public/Donor View
          <div className="space-y-8">
            <DonorRegistrationForm
              onRegisterDonor={handleRegisterDonor}
              simulateVoiceInput={simulateVoiceInput}
              setMessage={setMessage}
            />
            <DonationEntryForm
              campaigns={campaigns}
              registeredDonors={registeredDonors}
              registeredBeneficiaries={registeredBeneficiaries}
              onAddDonation={handleAddDonation}
              simulateVoiceInput={simulateVoiceInput}
              setMessage={setMessage}
            />
          </div>
        ) : (
          // Admin View
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 pb-2 border-b border-blue-100">
                Admin Dashboard Overview
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                Total Registered Donors:{" "}
                <span className="font-bold text-blue-800">
                  {registeredDonors.length}
                </span>
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Total Registered Beneficiaries:{" "}
                <span className="font-bold text-blue-800">
                  {registeredBeneficiaries.length}
                </span>
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Total Donations Recorded:{" "}
                <span className="font-bold text-blue-800">
                  {donations.length}
                </span>
              </p>
            </div>

            <DailySummaryDisplay dailySummary={dailySummary} />
            <BeneficiaryRegistrationForm
              onRegisterBeneficiary={handleRegisterBeneficiary}
              simulateVoiceInput={simulateVoiceInput}
              setMessage={setMessage}
            />
            <RegisteredDonorsList donors={registeredDonors} />
            <RegisteredBeneficiariesList
              beneficiaries={registeredBeneficiaries}
            />
            <TransactionHistoryList
              donations={donations}
              getDonorName={getDonorName}
              getBeneficiaryName={getBeneficiaryName}
            />
          </div>
        )}
      </div>
    </div>
  );
}
