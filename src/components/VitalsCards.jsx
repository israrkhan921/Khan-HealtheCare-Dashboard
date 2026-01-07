export default function VitalsCards({ latest }) {
const metrics = [
  {
    title: "Respiratory Rate",
    value: latest.respiratory_rate.value,
    levels: latest.respiratory_rate.levels,
    icon: "/images/respiratory rate.svg",
    bg: "bg-[#E0F3FA]",
    unit: "bpm",
  },
  {
    title: "Temperature",
    value: latest.temperature.value,
    levels: latest.temperature.levels,
    icon: "/images/temperature.svg",
    bg: "bg-[#FFE6E9]",
    unit: "°F",
  },
  {
    title: "Heart Rate",
    value: latest.heart_rate.value,
    levels: latest.heart_rate.levels,
    icon: "/images/HeartBPM.svg",
    bg: "bg-[#FFE6F1]",
    unit: "bpm",
  },
];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white">
      {metrics.map(({ title, value, levels, icon, bg, unit }) => (
        <div key={title} className={`${bg} rounded-xl p-3`}>
          <img src={icon} className="mb-4" alt={title} />
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-xl font-semibold">
            {value} {unit}
          </h2>
          <span className="text-xs">{levels}</span>
        </div>
      ))}
    </div>
  );
}