import { useState } from "react";

export default function AuthorityDashboard() {
  const [selectedTourist, setSelectedTourist] = useState(null);

  const tourists = [
    { id:"TID-812934", name:"John Miller", status:"Active", zone:"Zone-3", lastSeen:"12:40 PM" },
    { id:"TID-553120", name:"Priya Sen", status:"Idle", zone:"Zone-1", lastSeen:"12:10 PM" },
    { id:"TID-989321", name:"Alex Wong", status:"Alert", zone:"Restricted-B", lastSeen:"12:42 PM" },
  ];

  const alerts = [
    { msg:"Route deviation detected", id:"TID-989321", time:"12:42 PM" },
    { msg:"Entered caution zone", id:"TID-812934", time:"12:39 PM" },
    { msg:"GPS weak signal", id:"TID-553120", time:"12:30 PM" },
  ];

  const handleEFIR = () => {
    alert("E-FIR auto-generated (demo) — case logged with tourist details.");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">

      <h2 className="text-2xl font-semibold text-gray-800">
        Authority Monitoring & Incident Response
      </h2>

      {/* Heat-map style zone grid (mock visual) */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <p className="font-medium mb-3">Tourist Movement Heat-Map (Mock)</p>

        <div className="grid grid-cols-3 gap-3">
          {["Zone-1","Zone-2","Zone-3","Restricted-A","Restricted-B","Valley-Trail"]
            .map((z,i)=>(
            <div key={i}
              className="p-4 rounded-xl border flex flex-col items-center bg-gray-50">
              <p className="font-semibold">{z}</p>
              <p className="text-sm text-gray-600">
                {Math.floor(Math.random()*20)+2} tourists
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-2">
          (Static mock — replace with real GIS / heat-map later)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Tourist table */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl border shadow-sm">
          <p className="font-semibold mb-2">Registered Tourists — Live Status</p>

          <div className="space-y-2">
            {tourists.map(t=>(
              <button key={t.id}
                className="w-full flex justify-between p-3 rounded-xl border bg-gray-50 hover:bg-gray-100 text-left"
                onClick={()=>setSelectedTourist(t)}>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.id}</p>
                </div>

                <div className="text-right">
                  <p><b>Zone:</b> {t.zone}</p>
                  <p className="text-sm text-gray-600">
                    Last Seen: {t.lastSeen}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Alerts panel */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-3">
          <p className="font-semibold">Alerts & Incidents</p>

          {alerts.map((a,i)=>(
            <div key={i} className="p-3 rounded-xl bg-red-50 border text-sm">
              <p className="font-medium text-red-700">{a.msg}</p>
              <p className="text-gray-600">
                Tourist: {a.id} — {a.time}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Drawer — Tourist Digital ID */}
      {selectedTourist && (
        <div className="fixed inset-0 bg-black/40 flex justify-end">
          <div className="w-full sm:w-105 bg-white h-full p-6 space-y-3 border-l">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">Tourist Digital ID</h3>
              <button onClick={()=>setSelectedTourist(null)}>✕</button>
            </div>

            <div className="p-4 rounded-xl border bg-gray-50 space-y-1">
              <p><b>Name:</b> {selectedTourist.name}</p>
              <p><b>ID:</b> {selectedTourist.id}</p>
              <p><b>Status:</b> {selectedTourist.status}</p>
              <p><b>Last Zone:</b> {selectedTourist.zone}</p>
              <p><b>Last Seen:</b> {selectedTourist.lastSeen}</p>
            </div>

            <button
              onClick={handleEFIR}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-medium"
            >
              Generate E-FIR (Demo)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
