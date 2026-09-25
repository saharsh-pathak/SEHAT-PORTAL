import React from 'react';
import { Agentation } from 'agentation';
import { initialPatients } from './data/mockData';
import { Patient, ReferralData } from './types';
import { Sidebar, NavTab } from './components/Sidebar';
import { DashboardQueue } from './screens/DashboardQueue';
import { PatientSearch } from './screens/PatientSearch';
import { PatientDetails } from './screens/PatientDetails';
import { MedicineAvailability } from './screens/MedicineAvailability';
import { ReferralsView } from './screens/ReferralsView';
import { FollowUpsView } from './screens/FollowUpsView';
import { TeleconsultationModal } from './components/TeleconsultationModal';
import { ReferralModal } from './components/ReferralModal';
import { RegisterPatientModal } from './components/RegisterPatientModal';

export default function App() {
  const [currentTab, setCurrentTab] = React.useState<NavTab>('dashboard');
  const [patients, setPatients] = React.useState<Patient[]>(initialPatients);
  const [selectedPatient, setSelectedPatient] = React.useState<Patient | null>(null);

  // Modals state
  const [teleconsultPatient, setTeleconsultPatient] = React.useState<Patient | null>(null);
  const [referralPatient, setReferralPatient] = React.useState<Patient | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState<boolean>(false);

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
  };

  const handleBackToQueue = () => {
    setSelectedPatient(null);
  };

  const handleRegisterNewPatient = (newPatient: Patient) => {
    setPatients((prev) => [newPatient, ...prev]);
    setSelectedPatient(newPatient);
  };

  const handleSaveReferral = (patientId: string, referral: ReferralData) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === patientId ? { ...p, referral, queueStatus: 'Referred' } : p))
    );
    if (selectedPatient && selectedPatient.id === patientId) {
      setSelectedPatient((prev) => (prev ? { ...prev, referral, queueStatus: 'Referred' } : null));
    }
  };

  return (
    <div className="flex h-screen w-screen bg-white overflow-hidden font-sans text-sehat-navy-900">
      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          setSelectedPatient(null);
        }}
        queueCount={patients.length}
      />

      {/* Main Workspace Area (Clean White, No Header, Optimized to fit without scrolling) */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white flex flex-col justify-start">
        {selectedPatient ? (
          <PatientDetails
            patient={selectedPatient}
            onBack={handleBackToQueue}
            onStartTeleconsultation={(p) => setTeleconsultPatient(p)}
            onCreateReferral={(p) => setReferralPatient(p)}
          />
        ) : currentTab === 'dashboard' ? (
          <DashboardQueue
            patients={patients}
            onSelectPatient={handleSelectPatient}
            onNavigateSearch={() => setCurrentTab('patients')}
          />
        ) : currentTab === 'patients' ? (
          <PatientSearch
            patients={patients}
            onSelectPatient={handleSelectPatient}
            onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
          />
        ) : currentTab === 'referrals' ? (
          <ReferralsView patients={patients} onSelectPatient={handleSelectPatient} />
        ) : currentTab === 'followups' ? (
          <FollowUpsView patients={patients} onSelectPatient={handleSelectPatient} />
        ) : currentTab === 'medicines' ? (
          <MedicineAvailability />
        ) : null}
      </main>

      {/* Modals */}
      {teleconsultPatient && (
        <TeleconsultationModal
          patient={teleconsultPatient}
          onClose={() => setTeleconsultPatient(null)}
        />
      )}

      {referralPatient && (
        <ReferralModal
          patient={referralPatient}
          onSaveReferral={handleSaveReferral}
          onClose={() => setReferralPatient(null)}
        />
      )}

      {isRegisterModalOpen && (
        <RegisterPatientModal
          nextAvailableToken={patients.length + 1}
          onRegister={handleRegisterNewPatient}
          onClose={() => setIsRegisterModalOpen(false)}
        />
      )}

      {/* Agentation Visual Feedback Toolbar in Development */}
      {(import.meta.env.DEV || process.env.NODE_ENV === 'development') && <Agentation />}
    </div>
  );
}
