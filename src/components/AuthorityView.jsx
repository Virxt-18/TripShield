import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { AlertCircle, FileText, Activity, CheckCircle, X } from 'lucide-react';

// Mock Alert Data
const initialAlerts = [
  { id: 1, name: 'Amit Verma', type: 'SOS', lat: 27.5, lng: 91.9, time: 'Now', status: 'Critical' },
  { id: 2, name: 'Sarah Jenkins', type: 'Zone Violation', lat: 27.48, lng: 91.85, time: '5m ago', status: 'Warning' },
];

const AuthorityView = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [selectedAlert, setSelectedAlert] = useState(null); // For E-FIR Modal
  const [efirGenerated, setEfirGenerated] = useState(false);

  const handleGenerateEfir = () => {
    // Simulate API call to police database
    setTimeout(() => {
      setEfirGenerated(true);
      setTimeout(() => {
        setEfirGenerated(false);
        setSelectedAlert(null);
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold text-blue-400 tracking-wider">GUARDIAN</h1>
          <p className="text-xs text-slate-400">Authority Control</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <div className="bg-blue-600 p-3 rounded flex items-center gap-3 cursor-pointer">
            <Activity size={20} /> Live Monitoring
          </div>
          <div className="text-slate-400 hover:bg-slate-800 p-3 rounded flex items-center gap-3 cursor-pointer">
            <FileText size={20} /> E-FIR Database
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        
        {/* Header */}
        <header className="bg-white h-16 border-b flex items-center justify-between px-6 shadow-sm z-20">
          <h2 className="font-bold text-gray-700">Region: Arunachal Sector 4</h2>
          <div className="flex gap-4">
            <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-bold border border-red-200 animate-pulse flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span> 2 Active Alerts
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          
          {/* MAP VIEW (Leaflet) */}
          <div className="flex-1 relative z-0">
            <MapContainer center={[27.5, 91.9]} zoom={11} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Plot Alerts on Map */}
              {alerts.map(alert => (
                <CircleMarker 
                  key={alert.id} 
                  center={[alert.lat, alert.lng]} 
                  pathOptions={{ color: alert.type === 'SOS' ? 'red' : 'orange' }} 
                  radius={10}
                >
                  <Popup>
                    <div className="text-sm">
                      <strong>{alert.name}</strong><br/>
                      {alert.type}<br/>
                      <button 
                        onClick={() => setSelectedAlert(alert)}
                        className="mt-2 text-xs bg-blue-600 text-white px-2 py-1 rounded w-full">
                        Action
                      </button>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>

          {/* RIGHT PANEL: Alert Feed */}
          <div className="w-96 bg-white border-l shadow-xl z-10 overflow-y-auto">
            <div className="p-4 bg-gray-50 border-b font-bold text-gray-700">Incident Feed</div>
            <div className="divide-y">
              {alerts.map(alert => (
                <div key={alert.id} className="p-4 hover:bg-blue-50 transition-colors border-l-4 border-transparent hover:border-blue-500 cursor-pointer">
                  <div className="flex justify-between mb-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${alert.type === 'SOS' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'}`}>
                      {alert.type}
                    </span>
                    <span className="text-xs text-gray-400">{alert.time}</span>
                  </div>
                  <h4 className="font-bold text-gray-800">{alert.name}</h4>
                  <p className="text-xs text-gray-500 mb-3">Coords: {alert.lat}, {alert.lng}</p>
                  <button 
                    onClick={() => setSelectedAlert(alert)}
                    className="w-full border border-gray-300 rounded py-1 text-xs hover:bg-gray-800 hover:text-white transition-colors">
                    View & Generate FIR
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* E-FIR MODAL */}
        {selectedAlert && (
          <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              
              <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
                <h3 className="font-bold">Generate Automated E-FIR</h3>
                <button onClick={() => setSelectedAlert(null)}><X size={20}/></button>
              </div>

              {!efirGenerated ? (
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-500 block">Incident Type</label>
                        <input type="text" value={selectedAlert.type} readOnly className="w-full bg-gray-100 p-2 rounded text-sm font-bold"/>
                      </div>
                      <div>
                         <label className="text-xs text-gray-500 block">Time</label>
                         <input type="text" value={selectedAlert.time} readOnly className="w-full bg-gray-100 p-2 rounded text-sm"/>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 block">Tourist Name</label>
                      <input type="text" value={selectedAlert.name} readOnly className="w-full bg-gray-100 p-2 rounded text-sm"/>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 block">System Generated Report</label>
                      <textarea className="w-full bg-gray-50 p-2 rounded text-sm h-24 border border-gray-200" defaultValue={`Alert triggers at coordinates [${selectedAlert.lat}, ${selectedAlert.lng}]. System detects anomaly consistent with distress signal. Immediate intervention required.`}></textarea>
                    </div>
                  </div>
                  <button onClick={handleGenerateEfir} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 flex items-center justify-center gap-2">
                    <FileText size={18} /> Confirm & Submit FIR
                  </button>
                </div>
              ) : (
                <div className="p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">FIR Generated Successfully</h3>
                  <p className="text-gray-500 mt-2">Reference ID: #FIR-NE-{Math.floor(Math.random()*10000)}</p>
                  <p className="text-xs text-gray-400 mt-1">Dispatched to Local Station</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AuthorityView;