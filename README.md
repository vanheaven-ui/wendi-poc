# Wendi Foundation POC: Donor, Beneficiary & Reconciliation Platform

This project is a **Proof of Concept (POC)** for a web platform designed to assist the **Wendi Foundation** in managing donors, beneficiaries, and tracking donations, with a focus on **reconciliation** and **role-based access**. It demonstrates key functionalities that would be part of a larger NGO management system.

---

## 🚀 Live Demo

👉 [Try the application](https://wendi-poc.vercel.app/)

---

## 🧭 Project Overview

This application simulates core features of the proposed Wendi Foundation platform, including:

- **Donor Management**: Registration and listing of donors.
- **Beneficiary Profiles**: Registration and listing of beneficiaries.
- **Donation Tracking**: Recording donations and linking them to specific donors and beneficiaries.
- **Offline Capability**: Uses `localStorage` for data persistence, simulating offline usage.
- **Voice Input Simulation**: Demonstrates a concept for voice-based data entry.
- **Role-Based Dashboard Simulation**: Toggle between:
  - **Donor View** (forms for input)
  - **Admin View** (lists, daily summary, transaction history)
- **Daily Reconciliation**: Displays a summary ("business picture") of daily transactions.
- **Transaction History**: Log of all donation records.

---

## 🛠 Tech Stack

| Category     | Tech            |
|--------------|-----------------|
| Frontend     | [Next.js](https://nextjs.org/) (React) |
| Styling      | [Tailwind CSS](https://tailwindcss.com/) |
| Language     | TypeScript      |
| Data Storage | `localStorage` (simulating backend services) |

---

## 🧪 Getting Started

### ✅ Prerequisites

- Node.js (LTS recommended)
- npm or Yarn

### 📦 Installation

```bash
# Clone the repository
git clone [Your GitHub Repository URL]
cd wendi-poc-nextjs

# Install dependencies
npm install
# OR
yarn install
```

Once the server is running, open your browser and navigate to:
http://localhost:3000
Your app should now be live locally!

## 📁 Project Structure
```
src/
├── app/
│   ├── page.tsx                         # Main entry point; controls layout and view logic
│   ├── globals.css                      # Global Tailwind CSS styles
│   └── components/
│       ├── MessageBox.tsx                  # Reusable message display component
│       ├── VoiceInputButton.tsx           # Simulates voice command input
│       ├── DonorRegistrationForm.tsx      # Form for registering donors
│       ├── BeneficiaryRegistrationForm.tsx# Form for registering beneficiaries
│       ├── DonationEntryForm.tsx          # Record and link donations
│       ├── DailySummaryDisplay.tsx        # Shows daily reconciliation summary
│       ├── RegisteredDonorsList.tsx       # List of registered donors
│       ├── RegisteredBeneficiariesList.tsx# List of registered beneficiaries
│       └── TransactionHistoryList.tsx     # Full donation transaction log
├── tailwind.config.ts                  # Tailwind CSS configuration
├── postcss.config.js                   # PostCSS setup for Tailwind
```

## 🔮 Future Enhancements
The Proof of Concept lays the groundwork for several production-grade features:

- 🔐 Authentication & Authorization
Integrate secure user login with role-based access (admin, donor, etc.).
- 📊 Advanced Reporting & Analytics
Generate charts, reports, and filters for donations and beneficiary activity.
- 🌍 Multi-language Support
Add internationalization (i18n) for accessibility across regions.
- 🧠 Real Voice Recognition
Use Web Speech API or external services for real-time voice input.
- 🔌 Backend Integration
Connect to a real backend using Laravel, Django, or Node.js.
- 🧾 Database Support
Replace localStorage with MySQL, PostgreSQL, or Firebase for persistence.
- 💳 Payment Gateway Integration
Integrate with services like Stripe or PayPal to accept real donations.

## 🙏 Thank You
Thank you for reviewing this Proof of Concept for the Wendi Foundation platform!

If you have suggestions, feedback, or ideas, feel free to fork the repo, open an issue, or submit a pull request.

Together, we can build tools that empower impactful giving. 💚