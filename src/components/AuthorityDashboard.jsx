// src/components/AuthorityDashboard.jsx
import React, { useState } from 'react';
import { AlertCircle, FileText, Search, Activity, Map } from 'lucide-react';

const AuthorityDashboard = () => {
  const [activeTab, setActiveTab] = useState('live');

  // Mock Alert Data
  const alerts = [
    { id: 1, type: 'SOS', name: 'Vikram M.', location: 'Tawang, Sector 4', time: '2 mins ago', status: 'Critical' },
    { id: 2, type: 'Geo-Fence', name: 'Sarah J.', location: 'Restricted Border Zone', time: '15 mins ago', status: 'Warning' },
    { id: 3, type: 'Inactivity', name: 'Team Alpha', location: 'Hiking Trail 7', time: '2 hours ago', status: 'Investigating' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8 text-blue-400">Guardian Admin</h2>
        <nav className="space-y-4">
          <button onClick={() => setActiveTab('live')} className={`flex items-center gap-3 w-full p-3 rounded-lg ${activeTab === 'live' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
            <Activity size={20} /> Live Monitor
          </button>
          <button onClick={() => setActiveTab('alerts')} className={`flex items-center gap-3 w-full p-3 rounded-lg ${activeTab === 'alerts' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
            <AlertCircle size={20} /> Incident Logs
          </button>
          <button onClick={() => setActiveTab('efir')} className={`flex items-center gap-3 w-full p-3 rounded-lg ${activeTab === 'efir' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
            <FileText size={20} /> Auto E-FIRs
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="bg-white p-4 shadow-sm flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Operational Dashboard - Northeast Region</h1>
          <div className="flex items-center gap-4">
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full flex items-center gap-2 font-bold animate-pulse">
              <AlertCircle size={16} /> 2 Active SOS Signals
            </div>
            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">A</div>
          </div>
        </header>

        <div className="p-6">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
              <p className="text-gray-500 text-sm">Active Tourists</p>
              <p className="text-3xl font-bold">1,248</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <p className="text-gray-500 text-sm">Critical Alerts</p>
              <p className="text-3xl font-bold text-red-600">3</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
              <p className="text-gray-500 text-sm">Route Deviations</p>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
              <p className="text-gray-500 text-sm">Safe Check-ins</p>
              <p className="text-3xl font-bold">98%</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Map Placeholder (Left 2 cols) */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 h-125 relative">
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                 {/* In a real app, <MapContainer> from Leaflet goes here */}
                 <div className="text-center">
                   <Map size={64} className="mx-auto text-gray-400 mb-4" />
                   <p className="text-gray-500">Interactive Heat Map & Geofencing View</p>
                   <p className="text-xs text-gray-400">Loading Map API...</p>
                 </div>
              </div>
              
              {/* Overlay simulation */}
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded shadow text-xs">
                <div className="flex items-center gap-2 mb-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> SOS Signal</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Active Tourist</div>
              </div>
            </div>

            {/* Alert Feed (Right col) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-700">Live Incident Feed</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {alerts.map((alert) => (
                  <div key={alert.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                        alert.type === 'SOS' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {alert.type}
                      </span>
                      <span className="text-xs text-gray-400">{alert.time}</span>
                    </div>
                    <p className="font-medium text-gray-800">{alert.name}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin size={12} /> {alert.location}
                    </p>
                    <div className="mt-3 flex gap-2">
                       <button className="flex-1 bg-slate-800 text-white text-xs py-1.5 rounded hover:bg-slate-700">Locate</button>
                       <button className="flex-1 border border-red-200 text-red-600 text-xs py-1.5 rounded hover:bg-red-50">Log E-FIR</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityDashboard;