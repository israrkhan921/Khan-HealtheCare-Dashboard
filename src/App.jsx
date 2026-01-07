import { useEffect, useState } from "react";
import { getPatients } from "./api/patientApi";
import PatientList from "./components/PatientList";
import Header from "./components/Header";
import DiagnosisHistory from "./components/DiagnosisHistory";
import VitalsCards from "./components/VitalsCards";
import DiagnosticList from "./components/DiagnosticList";
import PatientProfile from "./components/PatientProfile";
import LabResults from "./components/LabResults";

export default function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    getPatients()
      .then(result => {
        setPatients(result.data);

        // Default active patient = Jessica Taylor
        const jessica = result.data.find(p => p.name === "Jessica Taylor");
        if (jessica) setSelectedPatient(jessica);
      })
      .catch(console.error);
  }, []);

  if (!selectedPatient) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-[#F6F7F8] flex flex-col gap-6">
      <Header />

      <main className="flex flex-col lg:flex-row gap-6 px-4 py-4">
        {/* Sidebar */}
        <aside className="  lg:w-[20%]">
          <PatientList
            patients={patients}
            activePatient={selectedPatient}
            onSelect={setSelectedPatient} // handle click from Sidebar
          />
        </aside>

        {/* Center */}
        <section className="flex-1 space-y-4">
          <div className="bg-white rounded-2xl p-5 space-y-6">
            <DiagnosisHistory history={selectedPatient.diagnosis_history} />
            <VitalsCards latest={selectedPatient.diagnosis_history.at(-1)} />
          </div>

          <DiagnosticList list={selectedPatient.diagnostic_list} />
        </section>

        {/* Right Panel */}
        <aside className="xl:flex xl:w-[22%] flex-col gap-4">
          <PatientProfile patient={selectedPatient} />
          <LabResults labs={selectedPatient.lab_results} />
        </aside>
      </main>
    </div>
  );
}
