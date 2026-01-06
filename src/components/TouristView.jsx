import React, { useState, useEffect } from 'react';
import { Shield, MapPin, AlertTriangle, Phone, QrCode, Globe, RefreshCw } from 'lucide-react';
import { translations } from '../data';

const TouristView = () => {
  const [lang, setLang] = useState('en'); // 'en' or 'hi'
  const [panicMode, setPanicMode] = useState(false);
  const [locationStatus, setLocationStatus] = useState('safe'); // 'safe' | 'risk'
  const t = translations[lang];

  // Simulating Geolocation Check
  useEffect(() => {
    const interval = setInterval(() => {
      // In a real app, use navigator.geolocation.watchPosition
      // Here we randomly simulate entering a risk zone for demo purposes
      const randomRisk = Math.random() > 0.8; 
      setLocationStatus(randomRisk ? 'risk' : 'safe');
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handlePanic = () => {
    setPanicMode(true);
    // TODO: Send coordinates to Firebase 'alerts' collection
    alert("SOS TRIGGERED: Location sent to Authority Dashboard!");
  };

  return (
    <div className={`min-h-screen pb-20 md:max-w-md md:mx-auto border-x border-gray-200 bg-gray-50 transition-colors duration-500 ${panicMode ? 'bg-red-50' : ''}`}>
      
      {/* Top Bar with Language Toggle */}
      <div className="bg-slate-900 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Shield className="text-green-400" /> NE-Guardian
          </h2>
          <button onClick={() => setLang(lang === 'en' ? 'hi' : 'en')} className="bg-white/10 px-3 py-1 rounded-full text-xs flex items-center gap-1 hover:bg-white/20">
            <Globe size={14} /> {lang === 'en' ? 'हिंदी' : 'English'}
          </button>
        </div>

        {/* Digital ID Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-50"><QrCode size={48} /></div>
          <p className="text-xs text-gray-300 uppercase tracking-wider">Tourist ID</p>
          <p className="font-semibold text-lg mb-1">Amit Verma</p>
          <p className="font-mono text-xs text-green-300 mb-2">TRST-8821-NE • VERIFIED</p>
          <div className="flex gap-2 text-[10px] text-gray-300">
             <span>Valid: 12 Jan 2026</span>
             <span>•</span>
             <span>Itinerary: Tawang</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        
        {/* Status & Geofencing Alert */}
        <div className={`p-4 rounded-xl border flex items-center gap-4 shadow-sm transition-all ${locationStatus === 'safe' ? 'bg-white border-gray-100' : 'bg-red-100 border-red-300'}`}>
          <div className={`p-3 rounded-full ${locationStatus === 'safe' ? 'bg-blue-100 text-blue-600' : 'bg-red-200 text-red-600 animate-pulse'}`}>
             <MapPin size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-700">{t.status}</h3>
            <p className={`text-sm ${locationStatus === 'safe' ? 'text-green-600' : 'text-red-600 font-bold'}`}>
              {locationStatus === 'safe' ? t.safe : `⚠ ${t.danger}`}
            </p>
          </div>
        </div>

        {/* Safety Score */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
           <div className="flex justify-between items-end mb-2">
             <span className="text-gray-500 font-medium">{t.safetyScore}</span>
             <span className="text-3xl font-bold text-green-500">94</span>
           </div>
           <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
             <div className="bg-green-500 h-full w-[94%]"></div>
           </div>
           <p className="text-xs text-gray-400 mt-2 text-right">Updated 2m ago</p>
        </div>

        {/* SOS Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={handlePanic}
            onMouseLeave={() => !panicMode && setPanicMode(false)}
            className={`w-40 h-40 rounded-full shadow-2xl flex flex-col items-center justify-center transition-all duration-300 mx-auto border-8 ring-4 
            ${panicMode 
              ? 'bg-red-600 border-red-400 ring-red-200 animate-ping-slow scale-110' 
              : 'bg-red-500 border-red-300 ring-red-100 hover:scale-105 active:scale-95'}`}
          >
            <AlertTriangle size={48} className="text-white mb-2" />
            <span className="font-bold text-white text-lg tracking-widest">{t.panicBtn}</span>
          </button>
          <p className="text-gray-400 text-xs mt-4">Long press for 3 seconds to cancel</p>
        </div>

        {/* Quick Contacts */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
            <Phone size={18} /> {t.police}
          </button>
          <button className="bg-emerald-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-200">
            <RefreshCw size={18} /> {t.ambulance}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristView;