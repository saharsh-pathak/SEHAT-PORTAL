import React from 'react';
import { Patient } from '../types';
import { 
  ArrowRight, 
  Filter
} from 'lucide-react';

interface DashboardQueueProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
  onNavigateSearch: () => void;
}

export const DashboardQueue: React.FC<DashboardQueueProps> = ({ 
  patients, 
  onSelectPatient,
}) => {
  const [filterCondition, setFilterCondition] = React.useState<string>('All');

  const filteredPatients = React.useMemo(() => {
    if (filterCondition === 'All') return patients;
    return patients.filter(p => p.condition.toLowerCase() === filterCondition.toLowerCase());
  }, [patients, filterCondition]);

  const renderCondition = (condition: Patient['condition']) => {
    switch (condition) {
      case 'Critical':
        return (
          <span className="text-xs font-bold text-sehat-emergency-700 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sehat-emergency-700 animate-ping"></span>
            ● Critical
          </span>
        );
      case 'Moderate':
      case 'Observation':
        return (
          <span className="text-xs font-bold text-sehat-saffron-600">
            ● {condition}
          </span>
        );
      case 'Stable':
      default:
        return (
          <span className="text-xs font-bold text-sehat-success-700">
            ● Stable
          </span>
        );
    }
  };

  return (
    <div className="space-y-4 w-full">
      {/* 1. Header - Unboxed style with baseline-aligned patient count */}
      <div className="pb-3 border-b border-sehat-border/60 flex items-baseline justify-between">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-sehat-navy-900 tracking-tight">
            Today's Queue
          </h1>
          <span className="text-xs font-bold text-sehat-navy-700">
            • {patients.length} Registered Patients
          </span>
        </div>
      </div>

      {/* 2. Triage Filter Controls - Sharp corners & clean unboxed */}
      <div className="flex items-center space-x-2 py-1">
        <Filter className="w-3.5 h-3.5 text-sehat-navy-700" />
        <span className="text-xs font-bold text-sehat-navy-900 uppercase tracking-wider mr-1">Triage Filter:</span>
        {['All', 'Critical', 'Moderate', 'Observation', 'Stable'].map((filter) => (
          <button
            key={filter}
            onClick={() => setFilterCondition(filter)}
            className={`px-3 py-1 rounded-none text-xs font-bold transition-all border ${
              filterCondition === filter
                ? 'bg-sehat-maroon-700 text-white border-sehat-maroon-800'
                : 'bg-white text-sehat-navy-700 border-sehat-border hover:bg-sehat-cream-100 hover:text-sehat-navy-900'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 3. Queue Table matching PatientDetails theme */}
      <div className="overflow-x-auto border-t border-b border-sehat-border/60">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-sehat-border text-xs font-bold text-sehat-navy-900 uppercase tracking-wider">
              <th className="py-3 px-4 w-20">Token</th>
              <th className="py-3 px-4 min-w-[200px]">Patient</th>
              <th className="py-3 px-4 w-48">ABHA ID</th>
              <th className="py-3 px-4 w-32">Age / Gender</th>
              <th className="py-3 px-4 w-40">Condition</th>
              <th className="py-3 px-4 w-28 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sehat-border/40 text-sm">
            {filteredPatients.map((patient) => {
              return (
                <tr 
                  key={patient.id} 
                  className="hover:bg-sehat-cream-100/40 transition-colors cursor-pointer group bg-transparent"
                  onClick={() => onSelectPatient(patient)}
                >
                  {/* Column 1: Token No - Unboxed clean text */}
                  <td className="py-3.5 px-4 font-mono font-bold text-base text-sehat-navy-900">
                    #{patient.tokenNo}
                  </td>

                  {/* Column 2: Patient Info */}
                  <td className="py-3.5 px-4">
                    <div>
                      <div className="font-bold text-base text-sehat-navy-900 group-hover:text-sehat-maroon-700 transition-colors">
                        {patient.name}
                      </div>
                      <div className="text-xs text-sehat-navy-700/70 mt-0.5">
                        {patient.villageBlock}
                      </div>
                    </div>
                  </td>

                  {/* Column 3: ABHA ID */}
                  <td className="py-3.5 px-4 font-mono text-xs text-sehat-navy-800 font-medium">
                    {patient.abhaId}
                  </td>

                  {/* Column 4: Age / Gender */}
                  <td className="py-3.5 px-4 text-sehat-navy-900 text-xs font-medium">
                    <div>{patient.age} yrs</div>
                    <div className="text-sehat-navy-700">{patient.gender}</div>
                  </td>

                  {/* Column 5: Condition - Unboxed colored dot indicator without long description */}
                  <td className="py-3.5 px-4">
                    {renderCondition(patient.condition)}
                  </td>

                  {/* Column 6: Action - Sharp Open button */}
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPatient(patient);
                      }}
                      className="inline-flex items-center space-x-1.5 bg-sehat-maroon-700 hover:bg-sehat-maroon-800 text-white px-3.5 py-1.5 rounded-none text-xs font-bold shadow-2xs transition-all"
                    >
                      <span>Open</span>
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
