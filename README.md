# SEHAT Doctor Portal 🩺

https://sehat-portal.vercel.app/
**SEHAT** (Smart Edge Healthcare Access & Telemedicine) is a doctor-facing telemedicine and patient management portal designed for seamless clinical workflows, rural health center integration, triage queue management, and real-time patient consultation.

---

## ✨ Features

- **Live Triage & Consultation Queue**: Monitor active patient queues, priority levels (Emergency, High, Normal), and vitals in real time.
- **Patient Search & Comprehensive Records**: Search by ABHA ID, name, or phone number. View complete medical history, allergy alerts, past visits, and lab reports.
- **Teleconsultation & Clinical Notes**: Integrated consultation workspace with diagnosis logging, symptom tags, vitals trending, and digital prescriptions.
- **Medicine & Pharmacy Availability**: Check medicine stock across PHCs, CHCs, and district pharmacies before prescribing.
- **Referrals & Follow-up Tracking**: Manage secondary/tertiary hospital referrals and track patient follow-up appointments.
- **Warm Healthcare Design System**: Accessible, human-centered UI built with custom SEHAT warm palettes and typography.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **UI Tools**: clsx, tailwind-merge, Agentation

---

## 🚀 Quick Start

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- npm or yarn

### 2. Clone the Repository
```bash
git clone https://github.com/saharsh-pathak/SEHAT-PORTAL.git
cd SEHAT-PORTAL
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```text
├── public/               # Static assets & icons
├── src/
│   ├── assets/           # Application images & branding
│   ├── components/       # Reusable UI components (Sidebar, Topbar, Badges)
│   ├── data/             # Mock patient records, queue data & medicine inventory
│   ├── screens/          # Application views:
│   │   ├── DashboardQueue.tsx       # Live patient triage queue
│   │   ├── PatientDetails.tsx       # Patient 360 profile & consultation
│   │   ├── PatientSearch.tsx        # Search & register patient records
│   │   ├── MedicineAvailability.tsx # Pharmacy inventory check
│   │   ├── FollowUpsView.tsx        # Scheduled follow-up tracker
│   │   └── ReferralsView.tsx        # Specialist & hospital referrals
│   ├── types/            # TypeScript data interfaces
│   ├── App.tsx           # Main application shell & navigation router
│   ├── index.css         # Global styles & Tailwind directives
│   └── main.tsx          # Application entry point
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 📄 License
This project is licensed under the MIT License.
