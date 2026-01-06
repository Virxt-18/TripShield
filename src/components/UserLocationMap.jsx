import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const userIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function UserLocationMap() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [status, setStatus] = useState<string>("Requesting location…");

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("❌ Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setStatus("✔ Location detected");
      },
      () => setStatus("⚠ Permission denied or GPS unavailable"),
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="w-full space-y-3">
      <div className="w-full h-125 rounded-2xl shadow border overflow-hidden">
        {position ? (
          <MapContainer
            center={position}
            zoom={15}
            className="w-full h-full"
            scrollWheelZoom
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position} icon={userIcon}>
              <Popup>You are here 📍</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600">
            {status}
          </div>
        )}
      </div>

      <p className="text-sm text-gray-600">{status}</p>

      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 rounded-xl bg-blue-600 text-white"
      >
        Refresh Location
      </button>
    </div>
  );
}
