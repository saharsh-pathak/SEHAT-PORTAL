import React from 'react';
import { Bell, HeartPulse, Clock, ShieldAlert, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeScreenTitle: string;
  emergencyCount: number;
  onEmergencyClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeScreenTitle, 
  emergencyCount,
  onEmergencyClick 
}) => {
  const [time, setTime] = React.useState<string>(
    new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-[70px] bg-sehat-card border-b border-sehat-border px-8 flex items-center justify-between shadow-sm shrink-0">
      {/* Active Screen Breadcrumb */}
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-sehat-maroon-100 rounded-lg text-sehat-maroon-700">
          <HeartPulse className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-sehat-navy-900 tracking-tight">{activeScreenTitle}</h2>
          <p className="text-xs text-sehat-navy-700">National Rural Telemedicine Grid & Community Care</p>
        </div>
      </div>

      {/* Center/Right Status Widgets */}
      <div className="flex items-center space-x-4">
        {/* Real-time Clock */}
        <div className="hidden sm:flex items-center space-x-1.5 text-xs text-sehat-navy-700 bg-sehat-cream-100 px-3 py-1.5 rounded-lg border border-sehat-border">
          <Clock className="w-3.5 h-3.5 text-sehat-saffron-600" />
          <span className="font-semibold text-sehat-navy-900">{time}</span>
          <span className="text-sehat-navy-700/70">| IST</span>
        </div>

        {/* Emergency Alert Badge if critical patients exist */}
        {emergencyCount > 0 && (
          <button 
            onClick={onEmergencyClick}
            className="flex items-center space-x-2 bg-sehat-emergency-100 border border-sehat-emergency-700/30 text-sehat-emergency-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-sehat-emergency-700 hover:text-white transition-colors"
          >
            <ShieldAlert className="w-4 h-4 animate-bounce" />
            <span>{emergencyCount} Critical Alert</span>
          </button>
        )}

        {/* Sync Indicator */}
        <div className="flex items-center space-x-2 text-xs bg-sehat-olive-100 text-sehat-olive-700 px-3 py-1.5 rounded-lg border border-sehat-olive-600/20 font-medium">
          <span className="w-2 h-2 rounded-full bg-sehat-olive-700"></span>
          <span>Ayushman Bharat Synced</span>
        </div>
      </div>
    </header>
  );
};
