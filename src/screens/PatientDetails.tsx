import React from 'react';
import { Patient } from '../types';
import { 
  Activity, 
  Stethoscope, 
  FileText, 
  Share2, 
  Video, 
  CalendarCheck, 
  FlaskConical, 
  ArrowLeft, 
  CheckCircle2, 
  Download, 
  Sparkles, 
  User, 
  MapPin, 
  Phone,
  Paperclip
} from 'lucide-react';

interface PatientDetailsProps {
  patient: Patient;
  onBack: () => void;
  onStartTeleconsultation: (patient: Patient) => void;
  onCreateReferral: (patient: Patient) => void;
}

export const PatientDetails: React.FC<PatientDetailsProps> = ({
  patient,
  onBack,
  onStartTeleconsultation,
  onCreateReferral,
}) => {
  const [selectedReport, setSelectedReport] = React.useState<string | null>(null);
  const [prescriptionSaved, setPrescriptionSaved] = React.useState<boolean>(false);

  // Unboxed, clean condition indicator
  const renderCondition = (condition: Patient['condition']) => {
    switch (condition) {
      case 'Critical':
        return (
          <span className="flex items-center space-x-1.5 text-sm font-bold text-sehat-emergency-700">
            <span className="w-2 h-2 rounded-full bg-sehat-emergency-700 animate-ping"></span>
            <span>Critical</span>
          </span>
        );
      case 'Moderate':
      case 'Observation':
        return (
          <span className="flex items-center space-x-1.5 text-sm font-bold text-sehat-saffron-600">
            <span className="w-2 h-2 rounded-full bg-sehat-saffron-600"></span>
            <span>{condition}</span>
          </span>
        );
      case 'Stable':
      default:
        return (
          <span className="flex items-center space-x-1.5 text-sm font-bold text-sehat-success-700">
            <span className="w-2 h-2 rounded-full bg-sehat-success-700"></span>
            <span>Stable</span>
          </span>
        );
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between space-y-4 pb-2">
      
      {/* 1. Top Navigation & Quick Token */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-bold text-sehat-maroon-700 hover:text-sehat-maroon-800 transition-colors py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Today's Queue</span>
        </button>

        <div className="flex items-center space-x-1.5 text-xs text-sehat-navy-700 font-semibold">
          <span>Token:</span>
          <span className="text-sehat-maroon-700 font-extrabold text-sm">
            #{patient.tokenNo}
          </span>
        </div>
      </div>

      {/* 2. Patient Profile Header */}
      <div className="pb-4 border-b-2 border-sehat-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Name & ABHA & Condition */}
          <div className="flex flex-wrap items-center gap-3.5">
            <h1 className="text-3xl sm:text-4xl font-bold text-sehat-navy-900 tracking-tight">
              {patient.name}
            </h1>
            <span className="text-sm font-mono text-sehat-navy-700 bg-sehat-cream-100/80 px-2.5 py-1 rounded-none border border-sehat-border/60">
              ABHA: {patient.abhaId}
            </span>
            <span className="text-sehat-border text-base">•</span>
            {renderCondition(patient.condition)}
          </div>

          {/* Chronic Diseases */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-sehat-navy-700/80">Chronic:</span>
            {patient.chronicDiseases.length > 0 ? (
              <span className="font-bold text-sehat-saffron-600 text-sm">
                {patient.chronicDiseases.join(', ')}
              </span>
            ) : (
              <span className="text-sm text-sehat-olive-700 font-medium">None</span>
            )}
          </div>
        </div>

        {/* Demographic subtitle line */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-sehat-navy-700 mt-2">
          <span className="font-medium">{patient.age} Yrs • {patient.gender}</span>
          <span className="text-sehat-border">•</span>
          <span className="font-mono text-sehat-navy-900 font-medium">{patient.mobile}</span>
          <span className="text-sehat-border">•</span>
          <span className="truncate max-w-xl">📍 {patient.address}</span>
        </div>
      </div>

      {/* 3. Open Biometric & Vitals Strip */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sehat-navy-700">
            <Activity className="w-4 h-4 text-sehat-maroon-700" />
            <span>Vital Signs & Biometrics</span>
          </div>
          <span className="text-xs text-sehat-navy-700/80">
            Recorded: {patient.vitals.recordedAt}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 py-3.5 px-1 border-y border-sehat-border/60">
          {/* BP */}
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase font-bold text-sehat-navy-700/80 block">Blood Pressure</span>
            <div className={`text-2xl font-bold tracking-tight ${patient.vitals.isBpAbnormal ? 'text-sehat-emergency-700' : 'text-sehat-navy-900'}`}>
              {patient.vitals.bp}
            </div>
            <span className="text-[10px] text-sehat-navy-700/70 block">Target: 120/80</span>
          </div>

          {/* Pulse */}
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase font-bold text-sehat-navy-700/80 block">Pulse Rate</span>
            <div className="text-2xl font-bold tracking-tight text-sehat-navy-900">
              {patient.vitals.pulse} <span className="text-xs font-normal text-sehat-navy-700">bpm</span>
            </div>
            <span className="text-[10px] text-sehat-navy-700/70 block">Normal: 60-100</span>
          </div>

          {/* SpO2 */}
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase font-bold text-sehat-navy-700/80 block">SpO2 Oxygen</span>
            <div className={`text-2xl font-bold tracking-tight ${patient.vitals.spo2 < 92 ? 'text-sehat-emergency-700' : 'text-sehat-success-700'}`}>
              {patient.vitals.spo2}%
            </div>
            <span className="text-[10px] text-sehat-navy-700/70 block">Room Air</span>
          </div>

          {/* Blood Sugar */}
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase font-bold text-sehat-navy-700/80 block">Blood Glucose</span>
            <div className={`text-2xl font-bold tracking-tight ${patient.vitals.isSugarAbnormal ? 'text-sehat-saffron-600' : 'text-sehat-navy-900'}`}>
              {patient.vitals.bloodSugar} <span className="text-xs font-normal text-sehat-navy-700">mg/dL</span>
            </div>
            <span className="text-[10px] text-sehat-navy-700/70 block">RBG Spot Check</span>
          </div>

          {/* Temperature */}
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase font-bold text-sehat-navy-700/80 block">Temperature</span>
            <div className="text-2xl font-bold tracking-tight text-sehat-navy-900">
              {patient.vitals.temp} <span className="text-xs font-normal text-sehat-navy-700">&deg;F</span>
            </div>
            <span className="text-[10px] text-sehat-navy-700/70 block">Oral Sensor</span>
          </div>

          {/* BMI */}
          <div className="space-y-0.5">
            <span className="text-[11px] uppercase font-bold text-sehat-navy-700/80 block">BMI Index</span>
            <div className="text-2xl font-bold tracking-tight text-sehat-navy-900">
              {patient.vitals.bmi}
            </div>
            <span className="text-[10px] text-sehat-navy-700/70 block">Healthy Range</span>
          </div>
        </div>
      </div>

      {/* 4. Middle Section: Left 6 cols Symptoms + Right 6 cols Diagnostic Tests & Clinical Impression */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-1">
        
        {/* Left 6 cols: Presenting Symptoms (Feedback 2: Increased heading size) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between border-b border-sehat-border/60 pb-2">
            <div className="flex items-center space-x-2.5">
              <Stethoscope className="w-5 h-5 text-sehat-maroon-700 stroke-[2.5]" />
              <h2 className="text-lg font-bold tracking-tight text-sehat-navy-900">
                Primary Presenting Symptoms
              </h2>
            </div>
            <span className="text-xs font-bold text-sehat-navy-900">
              {patient.symptoms.length} Symptoms Reported
            </span>
          </div>

          <div className="divide-y divide-sehat-border/40">
            {patient.symptoms.map((symptom, i) => (
              <div key={i} className="py-2.5 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-sehat-navy-900">{symptom.name}</span>
                  <span className="text-xs text-sehat-navy-700/80 font-medium ml-2">• Duration: {symptom.duration}</span>
                </div>
                <span className={`text-xs font-bold ${
                  symptom.severity === 'Severe'
                    ? 'text-sehat-emergency-700'
                    : symptom.severity === 'Moderate'
                    ? 'text-sehat-saffron-600'
                    : 'text-sehat-olive-700'
                }`}>
                  ● {symptom.severity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right 6 cols: Diagnostic Tests ON TOP, Clinical Impression CONCISE UNDERNEATH */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Today's Diagnostic Tests (Increased heading size) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-sehat-border/60 pb-2">
              <div className="flex items-center space-x-2.5">
                <FlaskConical className="w-5 h-5 text-sehat-maroon-700 stroke-[2.5]" />
                <h2 className="text-lg font-bold tracking-tight text-sehat-navy-900">
                  Today's Diagnostic Tests
                </h2>
              </div>
              <span className="text-xs font-semibold text-sehat-navy-700/80">
                {patient.testsConducted.length} Tests Logged
              </span>
            </div>

            {patient.testsConducted.length > 0 ? (
              <div className="divide-y divide-sehat-border/40">
                {patient.testsConducted.map((test) => (
                  <div key={test.id} className="py-1.5 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-sehat-navy-900 block">{test.testName}</span>
                      {test.range && <span className="text-[11px] text-sehat-navy-700/70">Ref: {test.range}</span>}
                    </div>
                    <span className={`font-bold text-xs ${test.status === 'Abnormal' ? 'text-sehat-emergency-700' : 'text-sehat-success-700'}`}>
                      {test.result}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-sehat-navy-700/70 italic py-1.5">
                No rapid tests ordered for this session.
              </p>
            )}
          </div>

          {/* Concise Clinical Impression & Probable Disorder */}
          <div className="space-y-1.5 pt-2.5 border-t border-sehat-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sehat-olive-700" />
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-sehat-navy-900">
                  Clinical Impression & Diagnosis
                </h3>
              </div>
              <span className="text-xs font-bold text-sehat-olive-700">
                {patient.probableDisorder.confidence}% Match
              </span>
            </div>

            <div className="text-xs space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-sehat-maroon-700 text-sm">
                  {patient.probableDisorder.title}
                </span>
              </div>

              <p className="text-sehat-navy-700 text-xs leading-relaxed">
                {patient.probableDisorder.description}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* 5. Bottom Action Bar & Past Digital Health Files */}
      <div className="pt-4 border-t border-sehat-border/60 space-y-3">
        {/* Past Health Records Row */}
        {patient.pastReports.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-2 bg-sehat-cream-100/40 p-2.5 rounded-none border border-sehat-border/60">
            <div className="flex items-center space-x-2 text-xs font-bold text-sehat-navy-900">
              <FileText className="w-4 h-4 text-sehat-maroon-700" />
              <span>Past Digital Health Files ({patient.pastReports.length}):</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {patient.pastReports.map((report) => (
                <button
                  key={report.id}
                  onClick={() => setSelectedReport(report.title)}
                  className="px-2.5 py-1 bg-white hover:bg-sehat-cream-100/80 rounded-none text-xs font-medium text-sehat-navy-900 border border-sehat-border/80 flex items-center space-x-1.5 transition-all shadow-2xs group"
                >
                  <Paperclip className="w-3 h-3 text-sehat-saffron-600" />
                  <span className="group-hover:text-sehat-maroon-700">{report.title}</span>
                  <Download className="w-3 h-3 text-sehat-navy-700/60 ml-1" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-sehat-navy-700 font-medium">
            {patient.referral ? (
              <span>Active Referral: <strong className="text-sehat-navy-900">{patient.referral.referredToHospital}</strong></span>
            ) : patient.followUp ? (
              <span>Scheduled Follow-Up: <strong className="text-sehat-navy-900">{patient.followUp.scheduledDate}</strong></span>
            ) : (
              <span>Ready for clinical action or specialist tele-link</span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Teleconsultation CTA */}
            <button
              onClick={() => onStartTeleconsultation(patient)}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-sehat-maroon-700 hover:bg-sehat-maroon-800 text-white font-bold text-xs rounded-none shadow-xs transition-all flex items-center justify-center space-x-2"
            >
              <Video className="w-4 h-4" />
              <span>Teleconsult Specialist</span>
            </button>

            {/* Referral CTA */}
            <button
              onClick={() => onCreateReferral(patient)}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-white hover:bg-sehat-cream-100 border border-sehat-border text-sehat-navy-900 font-bold text-xs rounded-none shadow-2xs transition-all flex items-center justify-center space-x-2"
            >
              <Share2 className="w-4 h-4 text-sehat-olive-700" />
              <span>{patient.referral ? 'View Referral' : 'Create Referral'}</span>
            </button>

            {/* Complete & Schedule CTA */}
            <button
              onClick={() => setPrescriptionSaved(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-sehat-olive-700 hover:bg-sehat-olive-600 text-white font-bold text-xs rounded-none shadow-xs transition-all flex items-center justify-center space-x-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{prescriptionSaved ? 'Prescription Saved ✓' : 'Prescribe & Discharge'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Report Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl border border-sehat-border max-w-md w-full p-6 shadow-sehat-modal space-y-4 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-sehat-border pb-3">
              <h3 className="font-bold text-sehat-navy-900">{selectedReport}</h3>
              <button
                onClick={() => setSelectedReport(null)}
                className="text-sehat-navy-700 hover:text-sehat-maroon-700 text-xs font-bold"
              >
                ✕ Close
              </button>
            </div>
            <div className="p-4 bg-sehat-cream-100/60 rounded-xl text-xs space-y-2 font-mono text-sehat-navy-900 border border-sehat-border/60">
              <p>Ayushman Bharat Digital Health Record</p>
              <p>Patient: {patient.name} ({patient.abhaId})</p>
              <p>Authentication: Digitally Signed by CHC Lab</p>
            </div>
            <button
              onClick={() => setSelectedReport(null)}
              className="w-full py-2.5 bg-sehat-maroon-700 text-white font-bold text-xs rounded-xl shadow-xs"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
