import React from 'react';
import { Patient } from '../types';
import { 
  Search, 
  UserPlus, 
  CreditCard, 
  User, 
  Phone, 
  ArrowRight, 
  AlertCircle
} from 'lucide-react';

interface PatientSearchProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
  onOpenRegisterModal: () => void;
}

type SearchMode = 'ABHA ID' | 'Full Name' | 'Mobile No.';

export const PatientSearch: React.FC<PatientSearchProps> = ({
  patients,
  onSelectPatient,
  onOpenRegisterModal,
}) => {
  const [searchMode, setSearchMode] = React.useState<SearchMode>('ABHA ID');
  const [query, setQuery] = React.useState<string>('');
  const [hasSearched, setHasSearched] = React.useState<boolean>(false);

  const searchModes: SearchMode[] = ['ABHA ID', 'Full Name', 'Mobile No.'];

  // Filter patients based on active mode & query
  const searchResults = React.useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    return patients.filter((patient) => {
      if (searchMode === 'ABHA ID') {
        return patient.abhaId.toLowerCase().includes(trimmed);
      } else if (searchMode === 'Full Name') {
        return patient.name.toLowerCase().includes(trimmed);
      } else if (searchMode === 'Mobile No.') {
        return patient.mobile.includes(trimmed);
      }
      return false;
    });
  }, [patients, searchMode, query]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setHasSearched(true);
  };

  const getPlaceholderText = () => {
    switch (searchMode) {
      case 'ABHA ID':
        return 'Enter 14-digit ABHA ID (e.g., 91-2049-1830-4921)...';
      case 'Full Name':
        return 'Enter patient full name (e.g., Ramesh Kumar, Sunita Devi)...';
      case 'Mobile No.':
        return 'Enter 10-digit mobile number (e.g., 9876543210)...';
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Outer Card Box with Sharp Corners */}
      <div className="bg-sehat-card rounded-none border border-sehat-border p-6 sm:p-8 space-y-6">
        
        {/* Header Box: "Search for Patient" */}
        <div className="border border-sehat-border bg-sehat-cream-100/50 rounded-none p-4 text-center">
          <h1 className="text-2xl font-bold text-sehat-maroon-700 tracking-tight">
            Search for Patient
          </h1>
          <p className="text-xs text-sehat-navy-700 mt-1">
            Access National Digital Health Mission (ABDM) electronic health records and rural registry.
          </p>
        </div>

        {/* Search Mode Filter Buttons with Sharp Corners */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {searchModes.map((mode) => {
            const isSelected = searchMode === mode;
            return (
              <button
                key={mode}
                onClick={() => {
                  setSearchMode(mode);
                  setHasSearched(false);
                }}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-none text-xs font-bold transition-all border ${
                  isSelected
                    ? 'bg-sehat-maroon-700 text-white border-sehat-maroon-800'
                    : 'bg-sehat-cream-100 text-sehat-navy-900 border-sehat-border hover:bg-sehat-saffron-100 hover:text-sehat-maroon-700'
                }`}
              >
                {mode === 'ABHA ID' && <CreditCard className="w-4 h-4" />}
                {mode === 'Full Name' && <User className="w-4 h-4" />}
                {mode === 'Mobile No.' && <Phone className="w-4 h-4" />}
                <span>{mode}</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar + Search Button Container */}
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-2">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-sehat-navy-700 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setHasSearched(false);
              }}
              placeholder={getPlaceholderText()}
              className="w-full h-11 bg-white border border-sehat-border focus:border-sehat-maroon-700 focus:outline-none rounded-none pl-11 pr-4 text-sm text-sehat-navy-900 placeholder:text-sehat-navy-700/60 transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 h-11 bg-sehat-maroon-700 hover:bg-sehat-maroon-800 text-white font-bold text-xs rounded-none transition-all flex items-center justify-center space-x-2 shrink-0 shadow-2xs"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </form>

        {/* Lower Box: Results Area OR "No Exact patient Found" */}
        <div className="border border-sehat-border rounded-none p-6 bg-sehat-cream-100/30 min-h-[240px] flex flex-col justify-center">
          {/* State 1: Search performed and matches found */}
          {query.trim().length > 0 && searchResults.length > 0 ? (
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-sehat-olive-700 px-1">
                Found {searchResults.length} Matched Patient Record(s):
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map((patient) => (
                  <div
                    key={patient.id}
                    onClick={() => onSelectPatient(patient)}
                    className="bg-sehat-card p-5 rounded-none border border-sehat-border hover:border-sehat-maroon-700 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-sehat-navy-900 group-hover:text-sehat-maroon-700 transition-colors text-base">
                          {patient.name}
                        </h3>
                        <p className="text-xs text-sehat-navy-700 font-mono mt-0.5">
                          ABHA: {patient.abhaId}
                        </p>
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-none ${
                        patient.condition === 'Critical'
                          ? 'bg-sehat-emergency-100 text-sehat-emergency-700'
                          : 'bg-sehat-success-100 text-sehat-success-700'
                      }`}>
                        {patient.condition}
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-sehat-border/60 flex items-center justify-between text-xs text-sehat-navy-700">
                      <div>
                        {patient.age} yrs • {patient.gender} • {patient.mobile}
                      </div>
                      <div className="flex items-center space-x-1 font-semibold text-sehat-maroon-700">
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : query.trim().length > 0 && (hasSearched || searchResults.length === 0) ? (
            /* State 2: "No Exact patient Found" + "Register New Patient" */
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-sehat-saffron-100 flex items-center justify-center text-sehat-saffron-600 border border-sehat-saffron-200">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-sehat-navy-900">
                  No Exact patient Found
                </h3>
                <p className="text-xs text-sehat-navy-700 mt-1 max-w-md mx-auto">
                  No registered citizen matches <strong className="text-sehat-navy-900">"{query}"</strong> in the current local center cache or ABDM gateway.
                </p>
              </div>

              <div className="pt-1">
                <button
                  onClick={onOpenRegisterModal}
                  className="px-6 py-2.5 bg-sehat-maroon-700 hover:bg-sehat-maroon-800 text-white font-bold text-xs rounded-none transition-all inline-flex items-center space-x-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register New Patient</span>
                </button>
              </div>
            </div>
          ) : (
            /* State 3: Initial Empty State Prompt */
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-sehat-cream-100 flex items-center justify-center text-sehat-navy-700 border border-sehat-border">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-sehat-navy-900">
                Search or Register Patient
              </h3>
              <p className="text-xs text-sehat-navy-700 max-w-sm mx-auto">
                Select search mode above and type patient details to quickly open medical history or conduct immediate triage.
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenRegisterModal}
                  className="px-5 py-2 bg-sehat-card border border-sehat-border hover:border-sehat-maroon-700 text-sehat-navy-900 text-xs font-semibold rounded-none transition-all hover:bg-sehat-cream-100 inline-flex items-center space-x-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5 text-sehat-saffron-600" />
                  <span>Direct Patient Registration</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
