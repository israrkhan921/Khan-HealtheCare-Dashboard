function PatientItem({ patient, isActive, onClick }) {
  const { name, profile_picture, gender, age } = patient;
  
  return (
    <div
      onClick={() => onClick(patient)}
      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-100 ${
        isActive ? "bg-[#D8FCF7]" : ""
      }`}
    >
      <img src={profile_picture} className="w-11 h-11 rounded-full" alt={name} />
      <div className="flex-1">
        <p className="text-sm font-semibold">{name}</p>
        <span className="text-xs text-gray-500">
          {gender}, {age}
        </span>
      </div>
      <span className="text-xl text-gray-400">⋯</span>
    </div>
  );
}

export default function PatientList({ patients = [], activePatient, onSelect }) {
  const handleClick = (patient) => {
    onSelect?.(patient);
  };

  return (
    <aside className="bg-white rounded-xl p-4  h-250">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Patients</h3>
        <img src="/images/search_FILL0_wght300_GRAD0_opsz24.svg" alt="Search" />
      </div>

      <div className=" space-y-2 overflow-y-scroll h-200">
        {patients.map((patient, index) => (
          <PatientItem
            key={`${patient.name}-${index}`}
            patient={patient}
            isActive={activePatient?.name === patient.name}
            onClick={handleClick}
          />
        ))}
      </div>
    </aside>
  );
}
