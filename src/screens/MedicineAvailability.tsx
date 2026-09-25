import React from 'react';
import { Pill, Search } from 'lucide-react';

interface MedicineItem {
  id: string;
  name: string;
  category: string;
  stockCount: number;
  unit: string;
  expiryDate: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  scheme: 'Jan Aushadhi' | 'Essential Drug List (EDL)';
}

export const MedicineAvailability: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');

  const medicines: MedicineItem[] = [
    { id: 'm-1', name: 'Tab. Paracetamol 500mg', category: 'Antipyretic / Analgesic', stockCount: 1420, unit: 'Tablets', expiryDate: '12/2027', status: 'In Stock', scheme: 'Essential Drug List (EDL)' },
    { id: 'm-2', name: 'Tab. Metformin 500mg', category: 'Anti-Diabetic', stockCount: 680, unit: 'Tablets', expiryDate: '09/2027', status: 'In Stock', scheme: 'Jan Aushadhi' },
    { id: 'm-3', name: 'Tab. Telmisartan 40mg', category: 'Anti-Hypertensive', stockCount: 420, unit: 'Tablets', expiryDate: '05/2027', status: 'In Stock', scheme: 'Jan Aushadhi' },
    { id: 'm-4', name: 'Oral Rehydration Salts (ORS)', category: 'Electrolytes', stockCount: 280, unit: 'Packets', expiryDate: '02/2028', status: 'In Stock', scheme: 'Essential Drug List (EDL)' },
    { id: 'm-5', name: 'Iron & Folic Acid (IFA) Red', category: 'Nutritional Supplement', stockCount: 45, unit: 'Strips', expiryDate: '01/2027', status: 'Low Stock', scheme: 'Essential Drug List (EDL)' },
    { id: 'm-6', name: 'Salbutamol Nebulizer Solution 2.5mg', category: 'Bronchodilator (Respiratory)', stockCount: 12, unit: 'Respules', expiryDate: '11/2026', status: 'Low Stock', scheme: 'Essential Drug List (EDL)' },
    { id: 'm-7', name: 'Inj. Tetanus Toxoid (TT)', category: 'Immunization / Vaccine', stockCount: 0, unit: 'Vials', expiryDate: 'Reorder Sent', status: 'Out of Stock', scheme: 'Essential Drug List (EDL)' },
    { id: 'm-8', name: 'Cap. Amoxicillin 500mg', category: 'Antibiotic', stockCount: 520, unit: 'Capsules', expiryDate: '08/2027', status: 'In Stock', scheme: 'Jan Aushadhi' },
  ];

  const filtered = medicines.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full space-y-4">
      {/* 1. Header Bar matching PatientDetails theme */}
      <div className="pb-3 border-b-2 border-sehat-border">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div className="flex items-baseline space-x-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-sehat-navy-900 tracking-tight">
              Medicine Availability
            </h1>
            <span className="text-xs text-sehat-olive-700 font-bold">
              ● Dispensary Live
            </span>
            <span className="text-xs text-sehat-navy-700/80 font-medium hidden md:inline">
              • Sitapur CHC Essential Drug List (EDL) & Jan Aushadhi
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-sehat-navy-700 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search drug or category..."
              className="w-full h-9 bg-white border border-sehat-border focus:border-sehat-maroon-700 focus:outline-none rounded-none pl-9 pr-3 text-xs text-sehat-navy-900 placeholder:text-sehat-navy-700/60"
            />
          </div>
        </div>
      </div>

      {/* 2. Unboxed Table matching DashboardQueue / PatientDetails */}
      <div className="overflow-x-auto border-t border-b border-sehat-border/60">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-sehat-border text-xs font-bold text-sehat-navy-900 uppercase tracking-wider">
              <th className="py-3 px-4 min-w-[220px]">Drug Name & Formulation</th>
              <th className="py-3 px-4 w-48">Category</th>
              <th className="py-3 px-4 w-36">Current Stock</th>
              <th className="py-3 px-4 w-44">Scheme / Supply</th>
              <th className="py-3 px-4 w-32 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sehat-border/40 text-sm">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-sehat-cream-100/40 transition-colors bg-transparent">
                <td className="py-3.5 px-4 font-bold text-sehat-navy-900">
                  <div className="flex items-center space-x-2">
                    <Pill className="w-4 h-4 text-sehat-maroon-700 shrink-0" />
                    <span className="text-base text-sehat-navy-900">{item.name}</span>
                  </div>
                  <span className="text-xs text-sehat-navy-700/70 font-normal block pl-6 mt-0.5">
                    Exp: {item.expiryDate}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-xs text-sehat-navy-700 font-medium">
                  {item.category}
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-bold text-sehat-navy-900 text-sm">{item.stockCount}</span>{' '}
                  <span className="text-xs text-sehat-navy-700">{item.unit}</span>
                </td>
                <td className="py-3.5 px-4 text-xs text-sehat-navy-700">
                  <span className="font-mono text-xs text-sehat-navy-800">
                    {item.scheme}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <span className={`text-xs font-bold ${
                    item.status === 'In Stock'
                      ? 'text-sehat-success-700'
                      : item.status === 'Low Stock'
                      ? 'text-sehat-saffron-600'
                      : 'text-sehat-emergency-700'
                  }`}>
                    ● {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
