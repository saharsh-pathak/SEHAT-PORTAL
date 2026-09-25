import React from 'react';
import { Patient, PatientCondition } from '../types';
import { UserPlus } from 'lucide-react';

interface RegisterPatientModalProps {
  onRegister: (patient: Patient) => void;
  onClose: () => void;
  nextAvailableToken: number;
}

export const RegisterPatientModal: React.FC<RegisterPatientModalProps> = ({
  onRegister,
  onClose,
  nextAvailableToken,
}) => {
  const [name, setName] = React.useState<string>('');
  const [age, setAge] = React.useState<string>('35');
  const [gender, setGender] = React.useState<'Male' | 'Female' | 'Other'>('Female');
  const [mobile, setMobile] = React.useState<string>('');
  const [village, setVillage] = React.useState<string>('');
  const [chronic, setChronic] = React.useState<string>('None');
  const [complaint, setComplaint] = React.useState<string>('General weakness and headache');
  const [condition, setCondition] = React.useState<PatientCondition>('Stable');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newPatient: Patient = {
      id: `p-${Date.now()}`,
      tokenNo: nextAvailableToken,
      name: name.trim(),
      abhaId: `91-4920-${randomSuffix}-1029`,
      mobile: mobile || '9800112233',
      age: parseInt(age, 10) || 30,
      gender,
      address: `${village || 'Main Village'}, Block Shivgarh, Sitapur`,
      villageBlock: village ? `${village} (Sitapur)` : 'Sitapur Rural',
      chronicDiseases: chronic !== 'None' && chronic.trim() ? [chronic.trim()] : [],
      condition,
      conditionDescription: complaint,
      queueStatus: 'Waiting',
      arrivalTime: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      vitals: {
        bp: '120/80 mmHg',
        pulse: 76,
        spo2: 98,
        temp: 98.6,
        bloodSugar: 105,
        bmi: 22.4,
        recordedAt: 'Just Now',
        isBpAbnormal: false,
        isSugarAbnormal: false,
      },
      symptoms: [
        { name: complaint, duration: '2 days', severity: condition === 'Critical' ? 'Severe' : 'Mild' }
      ],
      probableDisorder: {
        title: complaint.includes('headache') ? 'Tension Headache / Dehydration' : 'Acute Symptomatic Evaluation',
        confidence: 85,
        description: 'New clinical intake registered via SEHAT Edge Terminal.',
        suggestedAction: 'Initial vitals triage and medical officer consultation.'
      },
      testsConducted: [],
      pastReports: []
    };

    onRegister(newPatient);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-sehat-card rounded-none border border-sehat-border max-w-lg w-full p-6 shadow-sehat-modal space-y-5 animate-in zoom-in-95">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sehat-border pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-sehat-maroon-100 rounded-none text-sehat-maroon-700">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-sehat-navy-900">Register New Patient</h2>
              <p className="text-xs text-sehat-navy-700">
                Issue Token #{nextAvailableToken} & Link Ayushman Bharat ABHA ID
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-sehat-navy-700 hover:text-sehat-maroon-700 font-bold text-sm">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-sehat-navy-900 block mb-1">Patient Full Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Maya Devi, Rajesh Kumar..."
              className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-sehat-navy-900 block mb-1">Age (Years) *</label>
              <input
                type="number"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700 font-medium"
              />
            </div>
            <div>
              <label className="font-bold text-sehat-navy-900 block mb-1">Gender *</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as any)}
                className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-sehat-navy-900 block mb-1">Mobile Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="10-digit phone"
                className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700"
              />
            </div>
            <div>
              <label className="font-bold text-sehat-navy-900 block mb-1">Village / Ward</label>
              <input
                type="text"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                placeholder="e.g. Rampur, Shivgarh"
                className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-sehat-navy-900 block mb-1">Chief Presenting Complaint</label>
            <input
              type="text"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700"
            />
          </div>

          <div>
            <label className="font-bold text-sehat-navy-900 block mb-1">Known Chronic Diseases</label>
            <input
              type="text"
              value={chronic}
              onChange={(e) => setChronic(e.target.value)}
              placeholder="e.g. Hypertension, Asthma, None..."
              className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700"
            />
          </div>

          <div>
            <label className="font-bold text-sehat-navy-900 block mb-1">Initial Triage Condition</label>
            <div className="flex gap-2">
              {(['Stable', 'Moderate', 'Critical', 'Observation'] as PatientCondition[]).map((cond) => (
                <button
                  type="button"
                  key={cond}
                  onClick={() => setCondition(cond)}
                  className={`flex-1 p-2 rounded-none text-xs font-bold border transition-all ${
                    condition === cond
                      ? cond === 'Critical'
                        ? 'bg-sehat-emergency-100 text-sehat-emergency-700 border-sehat-emergency-700'
                        : 'bg-sehat-maroon-700 text-white border-sehat-maroon-800'
                      : 'bg-sehat-cream-100 text-sehat-navy-900 border-sehat-border'
                  }`}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 pt-3 border-t border-sehat-border">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-sehat-cream-100 text-sehat-navy-900 font-semibold rounded-none border border-sehat-border hover:bg-sehat-card"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-sehat-maroon-700 hover:bg-sehat-maroon-800 text-white font-bold rounded-none shadow-sm transition-all"
            >
              Issue Token & Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
