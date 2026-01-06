export default function TouristIDCard({ data, onReset }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Tourist Digital ID Generated
      </h2>

      <div className="bg-white p-6 rounded-2xl border-2 border-indigo-400 border-dashed space-y-2 shadow-sm">
        <h3 className="text-xl font-semibold">{data.fullName}</h3>

        <p><b>Tourist ID:</b> {data.id}</p>
        <p><b>Document:</b> {data.docType} — {data.docNumber}</p>
        <p><b>Country:</b> {data.country}</p>

        <hr className="my-2"/>

        <p><b>Visit Validity:</b> {data.startDate} → {data.endDate}</p>
        <p><b>Itinerary:</b> {data.itinerary || "—"}</p>

        <hr className="my-2"/>

        <p><b>Emergency Contact:</b> {data.emergencyName}</p>
        <p><b>Phone:</b> {data.emergencyPhone}</p>

        <p className="text-xs text-gray-500 mt-1">
          Issued On: {data.issuedOn}
        </p>
      </div>

      <button
        onClick={onReset}
        className="mt-4 w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-xl transition"
      >
        Register Another Tourist
      </button>
    </div>
  );
}
