import { useState } from "react";

export default function TouristRegister({ onSubmit }) {
  const [form, setForm] = useState({
    fullName: "",
    docType: "Passport",
    docNumber: "",
    country: "",
    startDate: "",
    endDate: "",
    itinerary: "",
    emergencyName: "",
    emergencyPhone: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "TID-" + Math.floor(100000 + Math.random() * 900000);
    onSubmit({ ...form, id, issuedOn: new Date().toLocaleString() });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Digital Tourist ID Registration
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-sm space-y-6"
      >
        <section>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            KYC Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
              className="border rounded-lg px-3 py-2"
            />

            <select
              name="docType"
              value={form.docType}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            >
              <option>Passport</option>
              <option>Aadhaar</option>
            </select>

            <input
              name="docNumber"
              placeholder="Document Number"
              value={form.docNumber}
              onChange={handleChange}
              required
              className="border rounded-lg px-3 py-2"
            />

            <input
              name="country"
              placeholder="Country of Origin"
              value={form.country}
              onChange={handleChange}
              required
              className="border rounded-lg px-3 py-2"
            />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Visit Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Visit Start</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Visit End</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <textarea
            name="itinerary"
            rows={3}
            placeholder="Itinerary (Cities / Places)"
            value={form.itinerary}
            onChange={handleChange}
            className="w-full mt-3 border rounded-lg px-3 py-2"
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Emergency Contact
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="emergencyName"
              placeholder="Contact Name"
              value={form.emergencyName}
              onChange={handleChange}
              required
              className="border rounded-lg px-3 py-2"
            />

            <input
              name="emergencyPhone"
              placeholder="Contact Phone"
              value={form.emergencyPhone}
              onChange={handleChange}
              required
              className="border rounded-lg px-3 py-2"
            />
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-medium transition"
        >
          Generate Tourist ID
        </button>
      </form>
    </div>
  );
}
