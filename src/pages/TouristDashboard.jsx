import { useState, useEffect } from "react";

export default function TouristDashboard() {
  const [tracking, setTracking] = useState(false);
  const [alerts, setAlerts] = useState([]);
  const [location, setLocation] = useState("Unknown");
  const [signalLost, setSignalLost] = useState(false);

  // Mock safety score generator
  const safetyScore = tracking ? 92 : 76;

  // Simulated geofence / anomaly triggers
  useEffect(() => {
    if (!tracking) return;

    const interval = setInterval(() => {
      const events = [
        "Entered caution zone",
        "Possible route deviation detected",
        "Movement inactive for long duration",
        "Weak GPS signal detected"
      ];

      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setAlerts(prev => [{ message: randomEvent, time: new Date().toLocaleTimeString() }, ...prev]);

      if (randomEvent.includes("signal")) setSignalLost(true);
      else setSignalLost(false);

      setLocation("Near National Highway — Zone 3");
    }, 7000);

    return () => clearInterval(interval);
  }, [tracking]);

  const triggerPanic = () => {
    setAlerts(prev => [
      { message: "🚨 PANIC ALERT: Location shared with authorities & emergency contacts", time: new Date().toLocaleTimeString() },
      ...prev,
    ]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">

      <h2 className="text-2xl font-semibold text-gray-800">
        Tourist Safety Dashboard
      </h2>

      {/* Safety Score */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-2">
        <p className="text-gray-600 text-sm">Safety Score</p>
        <div className="text-4xl font-bold text-green-600">{safetyScore}</div>
        <p className="text-xs text-gray-500">
          Calculated from travel behavior & activity signals (mock)
        </p>
      </div>

      {/* Tracking Controls */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-medium">Real-time Tracking (Opt-in)</p>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={tracking}
              onChange={() => setTracking(!tracking)}
              className="accent-indigo-600"
            />
            <span className="text-sm text-gray-600">
              {tracking ? "Enabled" : "Disabled"}
            </span>
          </label>
        </div>

        <p className="text-sm text-gray-600">
          {tracking
            ? "Location sharing enabled for safety monitoring."
            : "Tracking off — system uses minimal activity signals only."}
        </p>
      </div>

      {/* Live Status */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-2">
        <p className="text-sm text-gray-600">Live Status</p>

        <p><b>Location:</b> {location}</p>
        <p>
          <b>Signal Status:</b>{" "}
          {signalLost ? (
            <span className="text-red-600 font-medium">Weak / Lost</span>
          ) : (
            <span className="text-green-600 font-medium">Stable</span>
          )}
        </p>
      </div>

      {/* Panic Button */}
      <button
        onClick={triggerPanic}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-2xl font-semibold text-lg transition"
      >
        🚨 Panic Button — Share Live Location
      </button>

      {/* Alerts Panel */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border space-y-3">
        <p className="font-semibold">Alerts & Activity Events</p>

        {alerts.length === 0 && (
          <p className="text-sm text-gray-500">No alerts yet</p>
        )}

        {alerts.map((a, i) => (
          <div
            key={i}
            className="p-3 rounded-xl bg-gray-50 border text-sm flex justify-between"
          >
            <span>{a.message}</span>
            <span className="text-gray-500">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
