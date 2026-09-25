export type PatientCondition = 'Stable' | 'Moderate' | 'Critical' | 'Observation';
export type QueueStatus = 'Waiting' | 'In Consultation' | 'Completed' | 'Referred';

export interface Vitals {
  bp: string; // e.g. "138/88 mmHg"
  pulse: number; // e.g. 78 bpm
  spo2: number; // e.g. 97 %
  temp: number; // e.g. 98.6 °F
  bloodSugar: number; // e.g. 142 mg/dL
  bmi: number; // e.g. 23.4
  recordedAt: string;
  isBpAbnormal?: boolean;
  isSugarAbnormal?: boolean;
}

export interface Symptom {
  name: string;
  duration: string;
  severity: 'Mild' | 'Moderate' | 'Severe';
}

export interface ProbableDisorder {
  title: string;
  confidence: number; // 0 - 100
  icdCode?: string;
  description: string;
  suggestedAction: string;
}

export interface DiagnosticTest {
  id: string;
  testName: string;
  result: string;
  date: string;
  status: 'Normal' | 'Abnormal' | 'Pending';
  range?: string;
}

export interface PastReport {
  id: string;
  title: string;
  category: 'ECG' | 'X-Ray' | 'Blood Test' | 'Pathology' | 'Prescription';
  date: string;
  doctor: string;
  fileSize: string;
}

export interface ReferralData {
  referredToHospital: string;
  specialty: string;
  priority: 'Routine' | 'Urgent' | 'Emergency Ambulance';
  reason: string;
  date: string;
  status: 'Draft' | 'Dispatched' | 'Accepted';
}

export interface FollowUpData {
  scheduledDate: string;
  prescriptions: Array<{
    medicine: string;
    dosage: string;
    frequency: string;
    duration: string;
  }>;
  doctorNotes: string;
  status: 'Active' | 'Completed';
}

export interface Patient {
  id: string;
  tokenNo: number;
  name: string;
  abhaId: string;
  mobile: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  address: string;
  villageBlock: string;
  chronicDiseases: string[];
  condition: PatientCondition;
  conditionDescription: string;
  queueStatus: QueueStatus;
  arrivalTime: string;
  vitals: Vitals;
  symptoms: Symptom[];
  probableDisorder: ProbableDisorder;
  testsConducted: DiagnosticTest[];
  pastReports: PastReport[];
  referral?: ReferralData;
  followUp?: FollowUpData;
}
