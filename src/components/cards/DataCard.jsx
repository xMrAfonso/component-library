// components/cards/DataCard.jsx
export default function DataCard({ title, value, icon, trend }) {
  return (
    <div className="p-5 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center gap-4">
      {/* Icon */}
      <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-indigo-100 text-indigo-600 text-2xl">
        {icon || "📊"}
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
      </div>

      {/* Trend */}
      {trend && (
        <div
          className={`text-sm font-medium ${
            trend > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {trend > 0 ? `▲ ${trend}%` : `▼ ${Math.abs(trend)}%`}
        </div>
      )}
    </div>
  );
}
