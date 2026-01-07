function LabItem({ lab }) {
 
  
  return (
    <li className="flex items-center justify-between py-1 px-1 last:border-b-0 hover:bg-blue-50 rounded-md transition cursor-pointer">
      <span className="text-sm py-1 text-gray-700">{lab}</span>
      <img
        src="/images/download.svg"
        alt={`Download ${lab.name}`}
        className="w-4 h-4 opacity-70"
      />
    </li>
  );
}

export default function LabResults({ labs }) {

  
  return (
    <div className="bg-white rounded-xl  p-5 shadow-sm">
      <h3 className="font-semibold mb-3">Lab Results</h3>

      <ul className=" space-y-1 overflow-y-scroll h-35">
        {labs.map((lab, index) => (
          <LabItem key={lab.name || `${lab.name}-${index}`} lab={lab} />
        ))}
      </ul>
    </div>
  );
}
