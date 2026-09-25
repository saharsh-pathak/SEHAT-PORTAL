import React from 'react';
import { Patient } from '../types';
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff, 
  PhoneOff, 
  Activity, 
  CheckCircle2
} from 'lucide-react';

interface TeleconsultationModalProps {
  patient: Patient;
  onClose: () => void;
}

export const TeleconsultationModal: React.FC<TeleconsultationModalProps> = ({ patient, onClose }) => {
  const [micOn, setMicOn] = React.useState<boolean>(true);
  const [videoOn, setVideoOn] = React.useState<boolean>(true);
  const [doctorNotes, setDoctorNotes] = React.useState<string>(
    `Patient exhibits ${patient.probableDisorder.title}. Vitals indicate BP ${patient.vitals.bp}, Pulse ${patient.vitals.pulse} bpm. Advised treatment plan initiated.`
  );
  const [isPrescriptionSent, setIsPrescriptionSent] = React.useState<boolean>(false);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-sehat-card rounded-none border border-sehat-border max-w-4xl w-full p-6 shadow-sehat-modal space-y-5 animate-in zoom-in-95">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sehat-border pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-sehat-maroon-100 rounded-none text-sehat-maroon-700">
              <Video className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-sehat-navy-900">
                Live Teleconsultation — Dr. Radhika Sen (Cardiologist)
              </h2>
              <p className="text-xs text-sehat-navy-700">
                District Hospital Telemedicine Grid • Connected to {patient.name}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-sehat-success-100 text-sehat-success-700 rounded-none text-xs font-bold border border-sehat-success-700/20">
            <span className="w-2 h-2 rounded-full bg-sehat-success-700 animate-ping"></span>
            <span>Live Encrypted Session</span>
          </span>
        </div>

        {/* Video Stage & Patient Tele-Vitals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Main Video Window */}
          <div className="md:col-span-2 bg-sehat-navy-900 rounded-none overflow-hidden relative aspect-video flex items-center justify-center border border-sehat-navy-700 shadow-inner">
            {videoOn ? (
              <div className="text-center text-white space-y-2">
                <div className="w-20 h-20 mx-auto rounded-none bg-sehat-maroon-700 border-2 border-sehat-saffron-600 flex items-center justify-center text-2xl font-bold">
                  DR
                </div>
                <div>
                  <h4 className="font-bold text-base">Dr. Radhika Sen, MD, DM (Cardiology)</h4>
                  <p className="text-xs text-sehat-cream-100/70">District Hospital Tele-OPD Console</p>
                </div>
                <div className="inline-flex items-center space-x-1 bg-black/40 px-3 py-1 rounded-none text-[11px] text-sehat-success-700 font-mono">
                  <span>HD 1080p • 24ms Latency</span>
                </div>
              </div>
            ) : (
              <div className="text-center text-white/50 space-y-2">
                <VideoOff className="w-12 h-12 mx-auto" />
                <p className="text-xs">Camera is paused</p>
              </div>
            )}

            {/* Inset Patient Camera */}
            <div className="absolute bottom-3 right-3 w-32 h-24 bg-sehat-navy-700/90 rounded-none border border-white/20 p-2 flex flex-col justify-between text-white text-[10px]">
              <div className="flex items-center justify-between">
                <span className="font-bold">Patient Edge Cam</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sehat-success-700"></span>
              </div>
              <p className="truncate">{patient.name}</p>
            </div>
          </div>

          {/* Live Vitals Sidebar during Teleconsult */}
          <div className="bg-sehat-cream-100/60 p-4 rounded-none border border-sehat-border space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-sehat-maroon-700 uppercase tracking-wider mb-2">
                <Activity className="w-4 h-4" />
                <span>Live Edge Vitals</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 bg-white rounded-none border border-sehat-border">
                  <span className="text-sehat-navy-700">Blood Pressure:</span>
                  <strong className={patient.vitals.isBpAbnormal ? 'text-sehat-emergency-700' : 'text-sehat-navy-900'}>
                    {patient.vitals.bp}
                  </strong>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-none border border-sehat-border">
                  <span className="text-sehat-navy-700">Heart Rate:</span>
                  <strong className="text-sehat-navy-900">{patient.vitals.pulse} bpm</strong>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-none border border-sehat-border">
                  <span className="text-sehat-navy-700">SpO2 Oxygen:</span>
                  <strong className="text-sehat-success-700">{patient.vitals.spo2} %</strong>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-none border border-sehat-border">
                  <span className="text-sehat-navy-700">Blood Glucose:</span>
                  <strong className="text-sehat-saffron-600">{patient.vitals.bloodSugar} mg/dL</strong>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-sehat-navy-700 bg-white p-2.5 rounded-none border border-sehat-border">
              <span className="font-bold text-sehat-navy-900 block mb-0.5">Primary Assessment:</span>
              <p className="line-clamp-2">{patient.probableDisorder.title}</p>
            </div>
          </div>
        </div>

        {/* Telemedicine Note Input & Action Toolbar */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-sehat-navy-900 block">
            Specialist Tele-Consultation Clinical Notes & Prescription
          </label>
          <textarea
            value={doctorNotes}
            onChange={(e) => setDoctorNotes(e.target.value)}
            rows={2}
            className="w-full bg-white border border-sehat-border rounded-none p-3 text-xs text-sehat-navy-900 focus:border-sehat-maroon-700 focus:outline-none"
          />
        </div>

        {/* Call Controls Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-sehat-border">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`p-3 rounded-none border text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                micOn ? 'bg-sehat-cream-100 text-sehat-navy-900 border-sehat-border' : 'bg-sehat-emergency-100 text-sehat-emergency-700 border-sehat-emergency-700/30'
              }`}
            >
              {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              <span>{micOn ? 'Mute' : 'Unmuted'}</span>
            </button>

            <button
              onClick={() => setVideoOn(!videoOn)}
              className={`p-3 rounded-none border text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                videoOn ? 'bg-sehat-cream-100 text-sehat-navy-900 border-sehat-border' : 'bg-sehat-emergency-100 text-sehat-emergency-700 border-sehat-emergency-700/30'
              }`}
            >
              {videoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
              <span>{videoOn ? 'Stop Cam' : 'Start Cam'}</span>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPrescriptionSent(true)}
              className="px-5 py-2.5 bg-sehat-olive-700 hover:bg-sehat-olive-600 text-white font-bold text-xs rounded-none shadow-sm transition-all flex items-center space-x-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isPrescriptionSent ? 'Prescription Issued ✓' : 'Send E-Prescription'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-sehat-emergency-700 hover:bg-sehat-maroon-800 text-white font-bold text-xs rounded-none shadow-sm transition-all flex items-center space-x-1.5"
            >
              <PhoneOff className="w-4 h-4" />
              <span>End Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
