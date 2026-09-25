import React from 'react';
import { Patient } from '../types';
import { Building2, ArrowRight } from 'lucide-react';

interface ReferralsViewProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
}

export const ReferralsView: React.FC<ReferralsViewProps> = ({ patients, onSelectPatient }) => {
  const referredPatients = patients.filter(p => p.referral !== undefined);

  return (
    <div className="w-full space-y-4">
      {/* 1. Header Bar matching PatientDetails theme */}
      <div className="pb-3 border-b-2 border-sehat-border">
        <div className="flex items-baseline space-x-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-sehat-navy-900 tracking-tight">
            Active Referrals
          </h1>
          <span className="text-xs text-sehat-navy-700/80 font-medium">
            • {referredPatients.length} Hospital Transfer Dispatches
          </span>
        </div>
      </div>

      {/* 2. Unboxed Table matching DashboardQueue */}
      <div className="overflow-x-auto border-t border-b border-sehat-border/60">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-sehat-border text-xs font-bold text-sehat-navy-900 uppercase tracking-wider">
              <th className="py-3 px-4 w-20">Token</th>
              <th className="py-3 px-4 min-w-[200px]">Patient</th>
              <th className="py-3 px-4 min-w-[220px]">Destination Facility</th>
              <th className="py-3 px-4 w-36">Specialty</th>
              <th className="py-3 px-4 w-40">Priority</th>
              <th className="py-3 px-4 w-28 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sehat-border/40 text-sm">
            {referredPatients.map((patient) => {
              const ref = patient.referral!;
              return (
                <tr
                  key={patient.id}
                  onClick={() => onSelectPatient(patient)}
                  className="hover:bg-sehat-cream-100/40 transition-colors cursor-pointer group bg-transparent"
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-base text-sehat-navy-900">
                    #{patient.tokenNo}
                  </td>
                  <td className="py-3.5 px-4">
                    <div>
                      <div className="font-bold text-base text-sehat-navy-900 group-hover:text-sehat-maroon-700 transition-colors">
                        {patient.name}
                      </div>
                      <div className="text-xs text-sehat-navy-700/70 mt-0.5">
                        ABHA: {patient.abhaId}
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-sehat-navy-900 flex items-center space-x-1.5 text-xs">
                      <Building2 className="w-3.5 h-3.5 text-sehat-maroon-700" />
                      <span>{ref.referredToHospital}</span>
                    </div>
                    <div className="text-[11px] text-sehat-navy-700/70 italic mt-0.5">
                      "{ref.reason}"
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-sehat-navy-800">
                    {ref.specialty}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`text-xs font-bold ${
                      ref.priority === 'Emergency Ambulance'
                        ? 'text-sehat-emergency-700'
                        : 'text-sehat-saffron-600'
                    }`}>
                      ● {ref.priority}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPatient(patient);
                      }}
                      className="inline-flex items-center space-x-1.5 bg-sehat-maroon-700 hover:bg-sehat-maroon-800 text-white px-3.5 py-1.5 rounded-none text-xs font-bold shadow-2xs transition-all"
                    >
                      <span>Review</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
