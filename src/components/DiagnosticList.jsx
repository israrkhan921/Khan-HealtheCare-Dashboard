function DiagnosticRow({ item }) {
  return (
    <tr>
      <td className="p-3">{item.name}</td>
      <td className="text-gray-500">{item.description}</td>
      <td>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold 
            bg-gray-100 text-gray-500"
          `}
        >
          {item.status}
        </span>
      </td>
    </tr>
  );
}

export default function DiagnosticList({ list }) {
  return (
    <div className="bg-white space-y-4 rounded-xl p-5 shadow-sm">
      <h3 className="font-semibold mb-3">Diagnostic List</h3>

      <table className="w-full text-sm">
        <thead className="bg-[#F8FAFF] text-gray-500">
          <tr>
            <th className="p-3 text-left" scope="col">
              Problem
            </th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <DiagnosticRow key={item.id || item.name} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
