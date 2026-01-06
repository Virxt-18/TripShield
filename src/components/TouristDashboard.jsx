// src/components/TouristDashboard.jsx
import React, { useState } from 'react';
import { Shield, MapPin, AlertTriangle, Phone, QrCode } from 'lucide-react';

const TouristDashboard = () => {
  const [panicMode, setPanicMode] = useState(false);
  const [safetyScore, setSafetyScore] = useState(92);

  // Mock Data for Digital ID
  const touristData = {
    name: "Vikram Malhotra",
    id: "TRST-2024-NE-8821",
    validUntil: "12 Jan 2026",
    kyc: "Aadhaar Verified",
    status: "Active"
  };

  const handlePanic = () => {
    setPanicMode(true);
    // In real app: trigger Firebase function to alert authorities
    alert("SOS TRIGGERED: Location sent to nearest Police Station & Emergency Contacts");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:max-w-md md:mx-auto border-x border-gray-200">
      {/* Header */}
      <div className="bg-blue-900 text-white p-6 rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">My Digital ID</h2>
            <div className="bg-white/20 p-2 rounded-lg">
              <QrCode size={24} />
            </div>
          </div>
          
          {/* Digital ID Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl mb-4">
            <p className="text-xs text-gray-300 uppercase tracking-wider">Name</p>
            <p className="font-semibold text-lg mb-2">{touristData.name}</p>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-gray-300">ID Number</p>
                <p className="font-mono text-sm">{touristData.id}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-300">Valid Until</p>
                <p className="text-sm">{touristData.validUntil}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        
        {/* Safety Score */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-700">Safety Score</h3>
            <p className="text-xs text-gray-500">Based on your route behavior</p>
          </div>
          <div className={`text-2xl font-bold ${safetyScore > 80 ? 'text-green-500' : 'text-yellow-500'}`}>
            {safetyScore}/100
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="text-blue-600" size={20} />
            <span className="font-semibold text-blue-900">Current Location</span>
          </div>
          <p className="text-sm text-blue-800">Tawang Monastery Road, Arunachal Pradesh</p>
          <div className="mt-2 text-xs bg-green-200 text-green-800 inline-block px-2 py-1 rounded-full">
            Safe Zone
          </div>
        </div>

        {/* Panic Button */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4 text-sm">In case of emergency, press and hold</p>
          <button 
            onClick={handlePanic}
            className={`w-32 h-32 rounded-full shadow-2xl flex flex-col items-center justify-center transition-all duration-300 ${
              panicMode ? 'bg-red-600 animate-pulse' : 'bg-red-500 hover:bg-red-600'
            } text-white mx-auto border-4 border-red-200 ring-4 ring-red-100`}
          >
            <AlertTriangle size={40} className="mb-2" />
            <span className="font-bold tracking-widest">SOS</span>
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 w-full md:max-w-md bg-white border-t border-gray-200 p-4 flex justify-around">
        <div className="flex flex-col items-center text-blue-600">
          <Shield size={24} />
          <span className="text-xs mt-1">Safety</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <Phone size={24} />
          <span className="text-xs mt-1">Contacts</span>
        </div>
      </div>
    </div>
  );
};

export default TouristDashboard;