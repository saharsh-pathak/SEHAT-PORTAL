import React from 'react';
import { Patient, ReferralData } from '../types';
import { Share2 } from 'lucide-react';

interface ReferralModalProps {
  patient: Patient;
  onSaveReferral: (patientId: string, referral: ReferralData) => void;
  onClose: () => void;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({ patient, onSaveReferral, onClose }) => {
  const [hospital, setHospital] = React.useState<string>(
    patient.referral?.referredToHospital || 'Sitapur District Hospital (Tertiary Center)'
  );
  const [specialty, setSpecialty] = React.useState<string>(
    patient.referral?.specialty || 'Cardiology / Diabetology'
  );
  const [priority, setPriority] = React.useState<ReferralData['priority']>(
    patient.referral?.priority || 'Urgent'
  );
  const [reason, setReason] = React.useState<string>(
    patient.referral?.reason || `Referral for specialized evaluation of ${patient.probableDisorder.title}.`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveReferral(patient.id, {
      referredToHospital: hospital,
      specialty,
      priority,
      reason,
      date: new Date().toISOString().split('T')[0],
      status: 'Dispatched',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-sehat-card rounded-none border border-sehat-border max-w-lg w-full p-6 shadow-sehat-modal space-y-5 animate-in zoom-in-95">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-sehat-border pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-sehat-olive-100 rounded-none text-sehat-olive-700">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-sehat-navy-900">Inter-Facility Referral</h2>
              <p className="text-xs text-sehat-navy-700">
                Patient: <strong>{patient.name}</strong> • Token #{patient.tokenNo}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-sehat-navy-700 hover:text-sehat-maroon-700 font-bold text-sm">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Destination Hospital */}
          <div>
            <label className="font-bold text-sehat-navy-900 block mb-1">
              Destination Healthcare Facility
            </label>
            <select
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700 focus:outline-none"
            >
              <option value="Sitapur District Hospital (Tertiary Center)">Sitapur District Hospital (Tertiary Center)</option>
              <option value="King George's Medical University (KGMU Lucknow)">King George's Medical University (KGMU Lucknow)</option>
              <option value="Community Health Center (CHC) Sidhauli">Community Health Center (CHC) Sidhauli</option>
              <option value="Sanjay Gandhi PGI Super Specialty, Lucknow">Sanjay Gandhi PGI Super Specialty, Lucknow</option>
            </select>
          </div>

          {/* Department / Specialty */}
          <div>
            <label className="font-bold text-sehat-navy-900 block mb-1">Department / Specialty</label>
            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700 focus:outline-none"
            />
          </div>

          {/* Priority Level */}
          <div>
            <label className="font-bold text-sehat-navy-900 block mb-1">Transport & Triage Priority</label>
            <div className="grid grid-cols-3 gap-2">
              {(['Routine', 'Urgent', 'Emergency Ambulance'] as ReferralData['priority'][]).map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setPriority(level)}
                  className={`p-2.5 rounded-none border text-center font-bold text-[11px] transition-all ${
                    priority === level
                      ? level === 'Emergency Ambulance'
                        ? 'bg-sehat-emergency-700 text-white border-sehat-emergency-700'
                        : 'bg-sehat-maroon-700 text-white border-sehat-maroon-800'
                      : 'bg-sehat-cream-100 text-sehat-navy-900 border-sehat-border hover:bg-sehat-card'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Reason / Clinical Summary */}
          <div>
            <label className="font-bold text-sehat-navy-900 block mb-1">Clinical Reason for Transfer</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              className="w-full bg-white border border-sehat-border rounded-none p-2.5 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700 focus:outline-none"
            />
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
              Dispatch Referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
