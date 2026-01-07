import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function BPStat({ label, value, color, trend, trendText }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
        <p className="text-sm text-gray-600">{label}</p>
      </div>

      <p className="text-3xl font-bold text-gray-900">{value}</p>

      <p className="text-sm text-gray-500 flex items-center gap-1">
        {trend} {trendText}
      </p>
    </div>
  );
}

export default function DiagnosisHistory({ history }) {
  const latest = history.at(-1);
  const { systolic, diastolic } = latest.blood_pressure;

  const data = {
    labels: history.map((e) => e.year),
    datasets: [
      {
        label: "Systolic",
        data: history.map((e) => e.blood_pressure.systolic.value),
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        borderWidth: 1.5,
        tension: 0.6,
        pointRadius: 3,
        pointBackgroundColor: "#E66FD2",
      },
      {
        label: "Diastolic",
        data: history.map((e) => e.blood_pressure.diastolic.value),
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        borderWidth: 1.5,
        tension: 0.6,
        pointRadius: 3,
        pointBackgroundColor: "#8C6FE6",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { min: 60, max: 180, ticks: { stepSize: 5, color: "#6B7280" }, grid: { color: "#E5E7EB" } },
      x: { ticks: { color: "#6B7280" }, grid: { display: false } },
    },
  };

  return (
    <section className="space-y-4 bg-white overflow-hidden">
      <h2 className="text-lg font-bold text-gray-800">Diagnosis History</h2>

      <div className="bg-[#F4F0FE] rounded-2xl p-6  ">
        {/* Header */}
        <div className="flex items-center gap-45 mb-4">
          <h4 className="font-semibold text-gray-800">Blood Pressure</h4>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            Last 6 months <span className="text-base">⌄</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%]  h-auto gap-4">
          {/* Chart */}
          <div className="h-50">
            <Line data={data} options={options} />
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 justify-center">
            <BPStat label="Systolic" value={systolic.value} color="#E66FD2" trend="▲" trendText="Higher than Average" />
            <hr className="border-gray-200" />
            <BPStat label="Diastolic" value={diastolic.value} color="#8C6FE6" trend="▼" trendText="Lower than Average" />
          </div>
        </div>
      </div>
    </section>
  );
}
