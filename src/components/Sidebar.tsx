import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Share2, 
  CalendarCheck, 
  Pill, 
  Clock, 
  Activity
} from 'lucide-react';
import { SehatLogo } from './SehatLogo';

export type NavTab = 'dashboard' | 'patients' | 'referrals' | 'followups' | 'medicines';

interface SidebarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  queueCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, onSelectTab, queueCount }) => {
  const [time, setTime] = React.useState<string>(
    new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );
  const [dateStr, setDateStr] = React.useState<string>(
    new Date().toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setDateStr(now.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems: Array<{ id: NavTab; label: string; icon: React.FC<{ className?: string }>; badge?: number }> = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: queueCount },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'referrals', label: 'Referrals', icon: Share2 },
    { id: 'followups', label: 'Follow Ups', icon: CalendarCheck },
    { id: 'medicines', label: 'Medicine Availability', icon: Pill },
  ];

  return (
    <aside className="w-72 bg-sehat-cream-100 border-r border-sehat-border flex flex-col justify-between shrink-0 shadow-xs min-h-screen">
      {/* Brand & Logo Section + Relocated Clock */}
      <div className="p-5 border-b border-sehat-border/60 bg-gradient-to-b from-sehat-saffron-100/40 to-transparent space-y-3">
        <SehatLogo size="md" showSubtitle={true} />
        <div className="pt-2 border-t border-sehat-border/60 flex items-center justify-between text-xs text-sehat-navy-700">
          <span className="font-mono font-bold text-sehat-navy-900">{time}</span>
          <span className="text-[11px] font-semibold">{dateStr}</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <nav className="p-4 space-y-2 flex-1">
        <div className="text-[11px] uppercase tracking-wider font-semibold text-sehat-navy-700/70 px-3 mb-2">
          Clinical Portal
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-none text-sm font-semibold transition-all duration-150 text-left ${
                isActive
                  ? 'bg-sehat-maroon-700 text-white shadow-sm ring-1 ring-sehat-maroon-800'
                  : 'bg-white text-sehat-navy-900 border border-sehat-border/80 hover:bg-white/80 hover:border-sehat-maroon-700/60 hover:text-sehat-maroon-700 shadow-2xs'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-sehat-navy-700'}`} />
                <span>{item.label}</span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer Doctor Profile */}
      <div className="p-4 border-t border-sehat-border/60">
        <div className="flex items-center space-x-2.5 text-xs text-sehat-navy-700">
          <div className="w-7 h-7 rounded-none bg-sehat-maroon-100 flex items-center justify-center text-sehat-maroon-700 font-bold text-[11px] shrink-0 border border-sehat-maroon-200">
            DR
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-sehat-navy-900 text-xs">Dr. Alok Verma</p>
            <p className="text-[10px] text-sehat-navy-700/80">Medical Officer (Sitapur CHC)</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
