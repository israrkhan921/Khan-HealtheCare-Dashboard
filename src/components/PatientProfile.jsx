const patientDetails = (patient) => [
  { icon: "Date-of-birth.svg", label: "Date Of Birth", value: patient.date_of_birth },
  {  icon:
      patient.gender?.toLowerCase() === "male"
        ? "MaleIcon.svg"
        : "FemaleIcon.svg",
    label: "Gender",
    value: patient.gender, },
  { icon: "PhoneIcon.svg", label: "Contact Info.", value: patient.phone_number },
  { icon: "PhoneIcon.svg", label: "Emergency Contacts", value: patient.emergency_contact },
  { icon: "InsuranceIcon.svg", label: "Insurance Provider", value: patient.insurance_type },
];

function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl">
      <img src={`/images/${icon}`} className="w-5 h-5" alt={label} />
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default function PatientProfile({ patient }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      {/* Top */}
      <div className="text-center mb-4">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-32 h-32 rounded-full mx-auto mb-2 object-cover"
        />
        <h3 className="font-semibold text-gray-800">{patient.name}</h3>
      </div>

      {/* Details */}
      <div className="space-y-3">
        {patientDetails(patient).map((detail) => (
          <DetailRow key={detail.label} {...detail} />
        ))}
      </div>

      {/* Button */}
      <div className="text-center">
      <button className="mt-4 bg-[#01F0D0] font-semibold py-1 px-4 rounded-xl">
        Show All Information
      </button>
      </div>
    </div>
  );
}
